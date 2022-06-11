import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_FAQS,
  // DELETE_SINGLE_FAQ,
  UPDATE_SINGLE_FAQ,
} from "../../../lib/mutation/AllMutations";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../../State";
import { GET_COURSES, GET_FAQS } from "../../../lib/queries/AllQueries";







export function UseFaqs() {
  const { data: COURSE_LIST } = useQuery(GET_COURSES)
  const formInputs = [
    {
      label: "Faq Question",
      name: "faqQuestion",
      type: "text"
    },
    {
      label: "Faq Answer",
      name: "faqAnswer",
      type: "text"
    },
    {
      label: "Course",
      name: "courseId",
      type: "selectCourse",
      dropDown: COURSE_LIST
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
      courseId: item.courseId,
      createdAt: item.createdAt,
      updateAt: item.updateAt
    });
  });
  console.log("refacteredData", refacteredData);

  const [loader, setLoader] = useState(false);

  //ADD STAFF

  let [CreateFaq, { loading: ADD_LOADING }] = useMutation(ADD_FAQS);

  const ctaFormHandler = async (event) => {
    event.preventDefault();
    if (!state.editData?.faqQuestion) {
      ToastWarning('Faq question required')
    }
    else if (!state.editData?.faqAnswer) {
      ToastWarning('Faq answer required')
    }
    else {
      try {
        await CreateFaq({
          variables: {
            data: {
              faqQuestion: state.editData?.faqAnswer,
              faqAnswer: state.editData?.faqQuestion,
              course: {
                connect: {
                  id: state.editData?.courseId
                }
              },
              createdAt: new Date(),
              updateAt: '00000000'
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
            ToastSuccess('FAQ Added')
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
    }
  };





  // DELETE STAFF

  // let [DeleteFaq, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_FAQ);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //   try {
  //     await DeleteFaq({
  //       variables: {
  //         where: {
  //           id: data.id,
  //         },
  //       },
  //       onCompleted(data) {
  //         ToastSuccess('FAQ Deleted')
  //       },
  //       refetchQueries: [{ query: GET_FAQS }],
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };





  //Update staff

  let [UpdateFaq, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_FAQ);

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!state.editData?.faqQuestion) {
      ToastWarning('Faq question required')
    }
    else if (!state.editData?.faqAnswer) {
      ToastWarning('Faq answer required')
    }
    else {
      try {
        await UpdateFaq({
          variables: {
            where: {
              id: state.editId
            },
            data: {
              faqQuestion: {
                set: state.editData?.faqQuestion
              },
              faqAnswer: {
                set: state.editData?.faqAnswer
              },
              course: {
                connect: {
                  id: state.editData?.courseId
                }
              },
              updateAt: {
                set: new Date()
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
            ToastSuccess('FAQ Updated')
          },
          refetchQueries: [{ query: GET_FAQS }],
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
