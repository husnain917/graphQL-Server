import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_SUCCESS_STORY,
  // DELETE_SINGLE_SUCCESS_STORY,
  UPDATE_SINGLE_SUCCESS,
} from "../../lib/mutation/AllMutations";
import { GET_SUCCESS_STORIES, GET_EDIT_DATA } from "../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";


import FiltredRoles from '../../constants/FiltredRoles'
import { openModal, updateFlag, editData, editId } from "../../lib/reactivities/reactiveVarables";





export function UseSuccessStory() {
  const useEditId = useReactiveVar(editId)
  const useEditData = useReactiveVar(editData)
  console.log("Edit data in useSuccessStories", useEditData);
  const [{ student }] = FiltredRoles()
  const formInputs = [
    {
      label: "City",
      name: "city",
      type: "text",
    },
    {
      label: "Freelancing Profile Url",
      name: "freelancingProfileUrl",
      type: "text",
    },
    {
      label: "Payment Proof",
      name: "paymentProof",
      type: "text",
    },
    {
      label: "Description",
      name: "description",
      type: "text",
    },
    {
      label: "Total Earned Amount",
      name: "totalEarnedAmount",
      type: "text",
    },
    {
      label: "Why Reject",
      name: "whyReject",
      type: "text",
    },
    {
      label: "Select User",
      name: "user",
      type: "selectUser",
      dropDown: student
    },
    {
      label: "Status",
      name: "status",
      type: "select",
      dropDownContent: ["PUBLISH", "UNPUBLISH"],
    },

  ]






  //GET STAFF 

  let { data, loading: GET_LOADING, error } = useQuery(GET_SUCCESS_STORIES);
  // const {
  //   data: EDIT_DATA,
  //   loading: EDIT_LOADING,
  //   editError
  // } = useQuery(GET_EDIT_DATA);
  // console.log(EDIT_DATA)
  console.log("error", error);
  const refacteredData = [];
  data?.findManySuccessStories?.map((item) => {
    refacteredData.push({
      id: item.id,
      city: item.city,
      freelancingProfileUrl: item.freelancingProfileUrl,
      paymentProof: item.paymentProof,
      description: item.description,
      status: item.status,
      totalEarnedAmount: item.totalEarnedAmount,
      whyReject: item.whyReject,
      // user: item.user
    });
  });
  console.log("refacteredData", refacteredData);

  const [loader, setLoader] = useState(false);

  //ADD STAFF

  let [CreateSuccessStories, { loading: ADD_LOADING }] = useMutation(ADD_SUCCESS_STORY);
  const ctaFormHandler = async (event) => {
    event.preventDefault();
    // if (!state.editData?.city) {
    if (!useEditData?.city) {
      ToastWarning('City name required')
    }
    // else if (!state.editData?.freelancingProfileUrl) {
    else if (!useEditData?.freelancingProfileUrl) {
      ToastWarning('Freelancing profile url required')
    }
    // else if (!state.editData?.paymentProof) {
    else if (!useEditData?.paymentProof) {
      ToastWarning('Payment proof required')
    }
    // else if (!state.editData?.description) {
    else if (!useEditData?.description) {
      ToastWarning('Description required')
    }
    // else if (!state.editData?.totalEarnedAmount) {
    else if (!useEditData?.totalEarnedAmount) {
      ToastWarning('Total earned amount required')
    }
    // else if (!state.editData?.whyReject) {
    else if (!useEditData?.whyReject) {
      ToastWarning('Why reject required')
    }
    // else if (!state.editData?.status) {
    else if (!useEditData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await CreateSuccessStories({
          variables: {
            data: {
              // freelancingProfileUrl: state.editData?.freelancingProfileUrl,
              freelancingProfileUrl: useEditData?.freelancingProfileUrl,
              // paymentProof: state.editData?.paymentProof,
              paymentProof: useEditData?.paymentProof,
              // description: state.editData?.description,
              description: useEditData?.description,
              // status: state.editData?.status,
              status: useEditData?.status,
              // totalEarnedAmount: state.editData?.totalEarnedAmount,
              totalEarnedAmount: useEditData?.totalEarnedAmount,
              // city: state.editData?.city,
              city: useEditData?.city,
              // whyReject: state.editData?.whyReject,
              whyReject: useEditData?.whyReject,
              user: {
                connect: [
                  {
                    // id: state.editData?.user
                    id: useEditData?.user
                  }
                ]
              }
            }

          },
          onCompleted(data, cache) {
            // dispatch({
            //   type: "setModal",
            //   payload: {
            //     modalUpdateFlag: false,
            //     openFormModal: false,
            //   },
            // });
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess('Story Added')
          },
          refetchQueries: [{ query: GET_SUCCESS_STORIES }],
        });
      } catch (error) {
        // dispatch({
        //   type: "setModal",
        //   payload: {
        //     openFormModal: false,
        //   },
        // });
        openModal(false)
        setLoader(false);
        ToastError(error.message);

      }
    }
  };





  // DELETE STAFF

  // let [DeleteSuccessStories, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_SUCCESS_STORY);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //   try {
  //     await DeleteSuccessStories({
  //       variables: {
  //         where: {
  //           id: data.id,
  //         },
  //       },
  //       onCompleted(data) {
  //         ToastSuccess('Story Deleted')
  //       },
  //       refetchQueries: [{ query: GET_SUCCESS_STORIES }],
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };





  //Update staff

  let [UpdateSuccessStories, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_SUCCESS);

  const ctaUpdateHandler = async (event) => {
    event.preventDefault();
    // if (!state.editData?.city) {
    if (!useEditData?.city) {
      ToastWarning('City name required')
    }
    // else if (!state.editData?.freelancingProfileUrl) {
    else if (!useEditData?.freelancingProfileUrl) {
      ToastWarning('Freelancing profile url required')
    }
    // else if (!state.editData?.paymentProof) {
    else if (!useEditData?.paymentProof) {
      ToastWarning('Payment proof required')
    }
    // else if (!state.editData?.description) {
    else if (!useEditData?.description) {
      ToastWarning('Description required')
    }
    // else if (!state.editData?.totalEarnedAmount) {
    else if (!useEditData?.totalEarnedAmount) {
      ToastWarning('Total earned amount required')
    }
    // else if (!state.editData?.whyReject) {
    else if (!useEditData?.whyReject) {
      ToastWarning('Why reject required')
    }
    // else if (!state.editData?.status) {
    else if (!useEditData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await UpdateSuccessStories({
          variables: {
            where: {
              id: useEditId
            },
            data: {
              freelancingProfileUrl: {
                // set: state.editData?.freelancingProfileUrl
                set: useEditData?.freelancingProfileUrl
              },
              paymentProof: {
                // set: state.editData?.paymentProof
                set: useEditData?.paymentProof
              },
              description: {
                // set: state.editData?.description
                set: useEditData?.description
              },
              status: {
                // set: state.editData?.status
                set: useEditData?.status
              },
              totalEarnedAmount: {
                // set: state.editData?.totalEarnedAmount
                set: useEditData?.totalEarnedAmount
              },
              city: {
                // set: state.editData?.city
                set: useEditData?.city
              },
              whyReject: {
                set: useEditData?.whyReject
              },
              user: {
                connect: [
                  {
                    id: useEditData?.user
                  }
                ]
              }
            },
          },
          onCompleted() {
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess('Story Updated')
          },
          refetchQueries: [{ query: GET_SUCCESS_STORIES }],
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
      // DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      // ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
    },
  ];
}
