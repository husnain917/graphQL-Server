import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_ENROLMMENT_APPROVAL,
  DELETE_ENROLMMENT_APPROVAL,
  UPDATE_SINGLE_ENROLLMENT,
} from "../../lib/mutation/AllMutations";
import { GET_ENROLLMENT } from "../../lib/queries/AllQueries";
import { AppContext } from "../../State";







export function UseEnrollmentApproval() {
  const formInputs = [
    {
      label: "Name",
      name: "studentName",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Course",
      name: "course",
      type: "text",
    },
    {
      label: "Payment Method",
      name: "paymentMethod",
      type: "text",
    },
    {
      label: "Amount",
      name: "amount",
      type: "number",
    },
    {
      label: "Transaction Id",
      name: "transactionId",
      type: "text",
    },
    {
      label: "Status",
      name: "status",
      type: "select",
      dropDownContent: ["PENDING", "APPROVED", "REJECT"],
    },
  ]
  const { state, dispatch } = useContext(AppContext);






  //GET STAFF 

  let { data, loading: GET_LOADING, error } = useQuery(GET_ENROLLMENT);
  console.log("error", error);
  const refacteredData = [];
  data?.enrollmentApprovals?.map((item) => {

    refacteredData.push({
      id: item.id,
      studentName: item.studentName,
      email: item.email,
      course: item.course,
      paymentMethod: item.paymentMethod,
      amount: item.amount,
      transactionId: item.transactionId,
      status: item.status
    });
  });
  console.log("refacteredData", refacteredData);

  const [loader, setLoader] = useState(false);

  //ADD STAFF

  let [Mutation, { loading: ADD_LOADING }] = useMutation(ADD_ENROLMMENT_APPROVAL);
  const ctaFormHandler = async (event) => {

    event.preventDefault();
    try {
      await Mutation({
        variables: {
          data: {
            studentName: state.editData?.studentName,
            email: state.editData?.email,
            course: state.editData?.course,
            paymentMethod: state.editData?.paymentMethod,
            amount: state.editData?.amount,
            transactionId: state.editData?.transactionId,
            status: state.editData?.status
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
          ToastSuccess('Enrollment Added')

        },
        refetchQueries: [{ query: GET_ENROLLMENT }],
      });
      console.log(state.editData);
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

  let [DeleteEnrollmentApproval, { loading: DELETE_LOADING }] = useMutation(DELETE_ENROLMMENT_APPROVAL);
  const ctaDeleteHandler = async ({ ...data }) => {
    try {
      await DeleteEnrollmentApproval({
        variables: {
          where: {
            id: data.id,
          },
        },
        onCompleted(data) {
          ToastSuccess('Enrollment Deleted')
        },
        refetchQueries: [{ query: GET_ENROLLMENT }],
      });
    } catch (error) {
      console.log(error.message);
    }
  };





  //Update staff

  let [UpdateEnrollmentApproval, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_ENROLLMENT);
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
      await UpdateEnrollmentApproval({
        variables: {
          where: {
            id: updatedIndex
          },
          data: {
            studentName: {
              set: state.editData?.studentName
            },
            email: {
              set: state.editData?.email
            },
            course: {
              set: state.editData?.course
            },
            paymentMethod: {
              set: state.editData?.paymentMethod
            },
            amount: {
              set: state.editData?.amount
            },
            transactionId: {
              set: state.editData?.transactionId
            },
            status: {
              set: state.editData?.status
            },
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
          ToastSuccess('Enrollment Updated')
        },
        refetchQueries: [{ query: GET_ENROLLMENT }],
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
