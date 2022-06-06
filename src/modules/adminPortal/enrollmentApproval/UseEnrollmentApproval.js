import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import FiltredRoles from "../../../constants/FiltredRoles";
import {
  ADD_ENROLMMENT_APPROVAL,
  DELETE_ENROLMMENT_APPROVAL,
  UPDATE_SINGLE_ENROLLMENT,
} from "../../../lib/mutation/AllMutations";
import { GET_ENROLLMENT } from "../../../lib/queries/AllQueries";
import { AppContext } from "../../../State";







export function UseEnrollmentApproval() {
  const [{ student }] = FiltredRoles()
  const formInputs = [
    {
      label: "User Id",
      name: "userId",
      type: "selectUser",
      dropDown: student
    },
    {
      label: "Courses Id",
      name: "coursesId",
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
      userId: item.userId,
      coursesId: item.coursesId,
      status: item.status,
      paymentMethod: item.paymentMethod,
      amount: item.amount,
      transactionId: item.transactionId,
    });
  });
  console.log("refacteredData", refacteredData);

  const [loader, setLoader] = useState(false);

  //ADD STAFF

  let [CreateEnrollmentApproval, { loading: ADD_LOADING }] = useMutation(ADD_ENROLMMENT_APPROVAL);
  const ctaFormHandler = async (event) => {

    event.preventDefault();
    if (!state.editData?.userId) {
      ToastWarning('User Id required')
    }
    else if (!state.editData?.coursesId) {
      ToastWarning('Courses Id required')
    }
    else if (!state.editData?.paymentMethod) {
      ToastWarning('Payment method required')
    }
    else if (!state.editData?.amount) {
      ToastWarning('Amount required')
    }
    else if (!state.editData?.transactionId) {
      ToastWarning('Transaction Id required')
    }
    else if (!state.editData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await CreateEnrollmentApproval({
          variables: {
            // studentName: state.editData?.studentName,
            // email: state.editData?.email,
            // course: state.editData?.course,
            // paymentMethod: state.editData?.paymentMethod,
            // amount: state.editData?.amount,
            // transactionId: state.editData?.transactionId,
            // status: state.editData?.status

            data: {
              user: {
                connect: {
                  id: null
                }
              },
              courses: {
                connect: {
                  id: null
                }
              },
              status: state.editData?.status,
              paymentMethod: state.editData?.paymentMethod,
              amount: state.editData?.amount,
              transactionId: state.editData?.transactionId,

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

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!state.editData?.studentName) {
      ToastWarning('Name required')
    }
    else if (!state.editData?.email) {
      ToastWarning('email required')
    }
    else if (!state.editData?.course) {
      ToastWarning('Course name required')
    }
    else if (!state.editData?.paymentMethod) {
      ToastWarning('Payment method required')
    }
    else if (!state.editData?.amount) {
      ToastWarning('Amount required')
    }
    else if (!state.editData?.transactionId) {
      ToastWarning('Transaction Id required')
    }
    else if (!state.editData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await UpdateEnrollmentApproval({
          variables: {
            where: {
              id: state.editId
            },
            // data: {
            //   studentName: {
            //     set: state.editData?.studentName
            //   },
            //   email: {
            //     set: state.editData?.email
            //   },
            //   course: {
            //     set: state.editData?.course
            //   },
            //   paymentMethod: {
            //     set: state.editData?.paymentMethod
            //   },
            //   amount: {
            //     set: state.editData?.amount
            //   },
            //   transactionId: {
            //     set: state.editData?.transactionId
            //   },
            //   status: {
            //     set: state.editData?.status
            //   },

            data: {
              user: {
                update: null
              },
              courses: {
                update: {
                  courseName: {
                    set: null
                  },
                  courseDesc: null,
                  courseIntro: null,
                  instructor: {
                    update: {
                      name: {
                        set: null
                      }
                    }
                  }
                }
              },
              status: {
                set: state.editData?.status
              },
              paymentMethod: {
                set: state.editData?.paymentMethod
              },
              amount: {
                set: state.editData?.amount
              },
              transactionId: {
                set: state.editData?.transactionId
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
            ToastSuccess('Enrollment Updated')
          },
          refetchQueries: [{ query: GET_ENROLLMENT }],
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
      formInputs,
    },
  ];
}
