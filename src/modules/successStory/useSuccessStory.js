import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_SUCCESS_STORY,
  DELETE_SINGLE_SUCCESS_STORY,
  UPDATE_SINGLE_SUCCESS,
} from "../../lib/mutation/AllMutations";
import { GET_SUCCESS_STORIES } from "../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../State";


import FiltredRoles from '../../constants/FiltredRoles'




export function UseSuccessStory() {
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
      dropDown: student,
    },
    {
      label: "Status",
      name: "status",
      type: "select",
      dropDownContent: ["PUBLISH", "UNPUBLISH"],
    },

  ]
  const { state, dispatch } = useContext(AppContext);






  //GET STAFF 

  let { data, loading: GET_LOADING, error } = useQuery(GET_SUCCESS_STORIES);
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
    if (!state.editData?.city) {
      ToastWarning('City name required')
    }
    else if (!state.editData?.freelancingProfileUrl) {
      ToastWarning('Freelancing profile url required')
    }
    else if (!state.editData?.paymentProof) {
      ToastWarning('Payment proof required')
    }
    else if (!state.editData?.description) {
      ToastWarning('Description required')
    }
    else if (!state.editData?.totalEarnedAmount) {
      ToastWarning('Total earned amount required')
    }
    else if (!state.editData?.whyReject) {
      ToastWarning('Why rejectrequired')
    }
    else if (!state.editData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await CreateSuccessStories({
          variables: {
            // data: {
            //   city: state.editData?.city,
            //   freelancingProfileUrl: state.editData?.freelancingProfileUrl,
            //   paymentProof: state.editData?.paymentProof,
            //   description: state.editData?.description,
            //   status: state.editData?.status,
            //   totalEarnedAmount: state.editData?.totalEarnedAmount,
            //   whyReject: state.editData?.whyReject,
            // },

            data: {
              freelancingProfileUrl: state.editData?.freelancingProfileUrl,
              paymentProof: state.editData?.paymentProof,
              description: state.editData?.description,
              status: state.editData?.status,
              totalEarnedAmount: state.editData?.totalEarnedAmount,
              city: state.editData?.city,
              whyReject: state.editData?.whyReject,
              user: {
                connect: [
                  {
                    id: state.editData?.user
                  }
                ]
              }
            }

          },
          onCompleted(data, cache) {
            dispatch({
              type: "setModal",
              payload: {
                modalUpdateFlag: false,
                openFormModal: false,
              },
            });
            ToastSuccess('Story Added')
          },
          refetchQueries: [{ query: GET_SUCCESS_STORIES }],
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

  let [DeleteSuccessStories, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_SUCCESS_STORY);
  const ctaDeleteHandler = async ({ ...data }) => {
    try {
      await DeleteSuccessStories({
        variables: {
          where: {
            id: data.id,
          },
        },
        onCompleted(data) {
          ToastSuccess('Story Deleted')
        },
        refetchQueries: [{ query: GET_SUCCESS_STORIES }],
      });
    } catch (error) {
      console.log(error.message);
    }
  };





  //Update staff

  let [UpdateSuccessStories, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_SUCCESS);

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!state.editData?.city) {
      ToastWarning('City name required')
    }
    else if (!state.editData?.freelancingProfileUrl) {
      ToastWarning('Freelancing profile url required')
    }
    else if (!state.editData?.paymentProof) {
      ToastWarning('Payment proof required')
    }
    else if (!state.editData?.description) {
      ToastWarning('Description required')
    }
    else if (!state.editData?.totalEarnedAmount) {
      ToastWarning('Total earned amount required')
    }
    else if (!state.editData?.whyReject) {
      ToastWarning('Why rejectrequired')
    }
    else if (!state.editData?.status) {
      ToastWarning('Status required')
    }
    else {
      try {
        await UpdateSuccessStories({
          variables: {
            where: {
              id: state.editId
            },
            // data: {
            //   freelancingProfileUrl: {
            //     set: state.editData?.freelancingProfileUrl
            //   },
            //   paymentProof: {
            //     set: state.editData?.paymentProof
            //   },
            //   description: {
            //     set: state.editData?.description
            //   },
            //   status: {
            //     set: state.editData?.status
            //   },
            //   totalEarnedAmount: {
            //     set: state.editData?.totalEarnedAmount
            //   },
            //   city: {
            //     set: state.editData?.city
            //   },
            //   whyReject: {
            //     set: state.editData?.whyReject
            //   }
            // }
            // data: {
            //   freelancingProfileUrl: {
            //     set: state.editData?.freelancingProfileUrl
            //   },
            //   paymentProof: {
            //     set: state.editData?.paymentProof
            //   },
            //   description: {
            //     set: state.editData?.description
            //   },
            //   status: {
            //     set: state.editData?.status
            //   },
            //   totalEarnedAmount: {
            //     set: state.editData?.totalEarnedAmount
            //   },
            //   city: {
            //     set: state.editData?.city
            //   },
            //   whyReject: {
            //     set: state.editData?.whyReject
            //   },
            //   user: {
            //     update: [
            //       {
            //         where: {
            //           id: null
            //         },
            //         data: {
            //           name: {
            //             set: null
            //           }
            //         }
            //       }
            //     ]
            //   }
            // },
            data: {
              freelancingProfileUrl: {
                set: state.editData?.freelancingProfileUrl
              },
              paymentProof: {
                set: state.editData?.paymentProof
              },
              description: {
                set: state.editData?.description
              },
              status: {
                set: state.editData?.status
              },
              totalEarnedAmount: {
                set: state.editData?.totalEarnedAmount
              },
              city: {
                set: state.editData?.city
              },
              whyReject: {
                set: state.editData?.whyReject
              },
              user: {
                connect: [
                  {
                    id: state.editData?.user
                  }
                ]
              }
            },
          },
          onCompleted() {
            dispatch({
              type: "setModal",
              payload: {
                modalUpdateFlag: false,
                openFormModal: false,
              },
            });
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
