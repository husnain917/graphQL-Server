import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_FAQS,
  DELETE_SINGLE_FAQ,
  UPDATE_SINGLE_FAQ,
} from "../../lib/mutation/AllMutations";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../State";
import { GET_FAQS } from "../../lib/queries/AllQueries";







export function UseFaqs() {
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

  let { data, loading: GET_LOADING, error } = useQuery(GET_FAQS);
  console.log("error", error);
  const refacteredData = [];
  data?.faqs?.map((item) => {
    refacteredData.push({
      id: item.id,
      faqAnswer: item.faqAnswer,
      faqQuestion: item.faqQuestion,
      createdAt: item.createdAt,
      updateAt:item.updateAt
    });
  });
  console.log("refacteredData", refacteredData);

  const [loader, setLoader] = useState(false);

  //ADD STAFF

  let [Mutation, { loading: ADD_LOADING }] = useMutation(ADD_FAQS);

  const Notify = () =>
    toast.success('Student added successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Slide,
    });
  const ctaFormHandler = async (event) => {
    event.preventDefault();
    try {
      await Mutation({
        variables: {
          data: {
            name: state.editData?.name,
            email: state.editData?.email,
            status: state.editData?.status,
            // phone: state.editData?.phone
          },
        },
        onCompleted(data, cache) {
          Notify();
        },
        refetchQueries: [{ query: GET_FAQS }],
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

  let [DeleteFaq, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_FAQ);
  const ctaDeleteHandler = async ({ ...data }) => {
    try {
      await DeleteFaq({
        variables: {
          where: {
            id: data.id,
          },
        },
        onCompleted(data) {
          toast.success('Student deleted Successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
          });
        },
        refetchQueries: [{ query: GET_FAQS }],
      });
    } catch (error) {
      console.log(error.message);
    }
  };





  //Update staff

  let [UpdateFaq, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_FAQ);
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
      await UpdateFaq({
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
            status: {
              set: state.editData?.status
            }
          }
        },
        onCompleted() {
          toast.success("Student updated Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
          });
        },
        refetchQueries: [{ query: GET_FAQS }],
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
