import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_STAFF,
  DELETE_SINGLE_STAFF,
  UPDATE_SINGLE_STAFF,
} from "../../../lib/mutation/AllMutations";
import { GET_STAFF } from "../../../lib/queries/AllQueries";
import { AppContext } from "../../../State";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";







export function UseAllStaff() {
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
      label: "Phone",
      name: "phone",
      type: "number",
    },
    {
      label: "Role",
      name: "role",
      type: "select",
      dropDownContent: ["ADMIN", "TEACHER"],
    },
  ]
  const { state, dispatch } = useContext(AppContext);






  //GET STAFF 
  
  let { data, loading: GET_LOADING, error } = useQuery(GET_STAFF);
  console.log("error", error);
  const refacteredData = [];
  data?.findManyStaff?.map((item) => {
    refacteredData.push({
      id: item.id,
      name: item.name,
      email: item.email,
      role: item.role,
      phone: item.phone,
    });
  });
  console.log("refacteredData", refacteredData);

  const [loader, setLoader] = useState(false);

  //ADD STAFF

  let [CreateManyStaff, { loading: ADD_LOADING }] = useMutation(ADD_STAFF);

 
  const ctaFormHandler = async (event) => {
    event.preventDefault();
    try {
      await CreateManyStaff({
        variables: {
          data: {
            name: state.editData?.name,
            email: state.editData?.email,
            role: state.editData?.role,
            phone: state.editData?.phone
          },
        },
        onCompleted(data, cache) {
          ToastSuccess('Staff Added')
        },
        refetchQueries: [{ query: GET_STAFF }],
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
  };





  // DELETE STAFF

  let [DeleteStaff, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_STAFF);
  const ctaDeleteHandler = async ({ ...data }) => {
    try {
      await DeleteStaff({
        variables: {
          where: {
            id: data.id,
          },
        },
        onCompleted(data) {
          ToastSuccess('Staff Deleted')
        },
        refetchQueries: [{ query: GET_STAFF }],
      });
    } catch (error) {
      console.log(error.message);
    }
  };





  //Update staff

  let [UpdateStudents, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_STAFF);
  const [updatedIndex, setUpdatedIndex] = useState('')
  const ctaEditButtonHandler = async (data) => {
    const test = state.editData;
    console.log(data.id);
    setUpdatedIndex(data.id)
    dispatch({
      type: "setModal",
      payload: {
        openFormModal: true,
        modalUpdateFlag: true,
      },
    });
    formInputs.map((item) => {
      test[item.name] = data[item.name];
    });
    dispatch({
      type: "setEditData",
      payload: test,
    });
  };
  const ctaUpdateHandler = async (event) => {
    event.preventDefault()

    try {
      await UpdateStudents({
        variables: {
          where: {
            id: updatedIndex
          },
          data: {
            name: {
              set: state.editData?.name
            },
            email: {
              set: state.editData?.email
            },
            phone: {
              set: state.editData?.phone
            },
            role: {
              set: state.editData?.role
            }
          }
        },
        onCompleted() {
          ToastSuccess('Staff Updated')
        },
        refetchQueries: [{ query: GET_STAFF }],
      })

    } catch (error) {
      console.log(error.message);
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
      formInputs,
      ctaEditButtonHandler
    },
  ];
}
