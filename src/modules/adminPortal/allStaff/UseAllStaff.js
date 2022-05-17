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
} from "../../../lib/mutation/AllMutations";
import { GET_STAFF } from "../../../lib/queries/AllQueries";
import { AppContext } from "../../../State";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
export function UseAllStaff() {
  const { state, dispatch } = useContext(AppContext);

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
  let [CreateStaff, { loading: ADD_LOADING }] = useMutation(ADD_STAFF);

  

  const ctaFormHandler = async () => {
    alert("ctaFormHandler");
    // setLoader(true);
    console.log("editDataeditData", state.editData);
    // if (state.editDatadata?.category === "" || state.editDatadata.file  === "" || html === '') {
    //   ToastWarning("please fill all fields");
    //  setLoader(false);
    //   return;
    // }

    try {


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
  const ctaDeleteHandler = async ({ e, ...props }) => {
    try {
     alert("delete handler")
    } catch (error) {
      ToastError(error.message);
    }
  };

  const ctaUpdateHandler = async (event) => {
    alert("ctaUpdateHandler")
    event.preventDefault()
  }
  return [
    {
      loader,
      ADD_LOADING,
      GET_LOADING,
      DELETE_LOADING,
      // UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      ctaDeleteHandler,
      ctaUpdateHandler
    },
  ];
}
