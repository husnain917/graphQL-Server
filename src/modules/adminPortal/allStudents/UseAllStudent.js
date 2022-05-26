import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_STUDENT,
  DELETE_SINGLE_STUDENT,
  UPDATE_SINGLE_STUDENT,
} from "../../../lib/mutation/AllMutations";
import { GET_STUDENT } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../../State";







export function UseAllStudents() {
  const formInputs = [
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Status",
      name: "status",
      type: "select",
      dropDownContent: ["ACTIVE", "OFFLINE"],
    },
  ]
  const { state, dispatch } = useContext(AppContext);






  //GET STAFF 

  let { data, loading: GET_LOADING, error } = useQuery(GET_STUDENT);
  console.log("error", error);
  const refacteredData = [];
  data?.findManyStudents?.map((item) => {
    refacteredData.push({
      id: item.id,
      name: item.name,
      email: item.email,
      status: item.status
    });
  });
  console.log("refacteredData", refacteredData);

  const [loader, setLoader] = useState(false);

  //ADD STAFF

  let [CreateManyStudents, { loading: ADD_LOADING }] = useMutation(ADD_STUDENT);

  const ctaFormHandler = async (event) => {
    event.preventDefault();
    if (!state.editData?.name) {
      ToastWarning('Name required')
    }
    else if (!state.editData?.email) {
      ToastWarning('Email required')
    }
    else if (!state.editData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await CreateManyStudents({
          variables: {
            data: {
              name: state.editData?.name,
              email: state.editData?.email,
              status: state.editData?.status,
              // phone: state.editData?.phone
            },
          },
          onCompleted(data, cache) {
            dispatch({
              type: "setModal",
              payload: {
                modalUpdateFlag: false,
                openFormModal: false,
              },
            });
            ToastSuccess('Student Added')
          },
          refetchQueries: [{ query: GET_STUDENT }],
        });
      } catch (error) {
        dispatch({
          type: "setModal",
          payload: {
            openFormModal: false,
          },
        });
        setLoader(false);
        ToastError(error.message);

      }
    }
  };





  // DELETE STAFF

  let [DeleteStudents, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_STUDENT);
  const ctaDeleteHandler = async ({ ...data }) => {
    try {
      await DeleteStudents({
        variables: {
          where: {
            id: data.id,
          },
        },
        onCompleted(data) {
          ToastSuccess('Student Deleted')
        },
        refetchQueries: [{ query: GET_STUDENT }],
      });
    } catch (error) {
      console.log(error.message);
    }
  };





  //Update staff

  let [UpdateStudents, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_STUDENT);

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!state.editData?.name) {
      ToastWarning('Name required')
    }
    else if (!state.editData?.email) {
      ToastWarning('Email required')
    }
    else if (!state.editData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await UpdateStudents({
          variables: {
            where: {
              id: state.editId
            },
            data: {
              name: {
                set: state.editData?.name
              },
              email: {
                set: state.editData?.email
              },
              status: {
                set: state.editData?.status
              }
            }
          },
          onCompleted() {
            dispatch({
              type: "setModal",
              payload: {
                modalUpdateFlag: false,
                openFormModal: false,
              },
            });
            ToastSuccess('Student Updated')
          },
          refetchQueries: [{ query: GET_STUDENT }],
        })

      } catch (error) {
        console.log(error.message);
      }
    }
  }
  return [
    {
      loader,
      ADD_LOADING,
      GET_LOADING,
      DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs
    },
  ];
}
