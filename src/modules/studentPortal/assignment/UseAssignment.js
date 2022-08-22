import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_ASSIGNMENT,
  ADD_COURSES,
  // DELETE_ASSIGNMENT,
  UPDATE_ASSIGNMENT,
} from "../../../lib/mutation/AllMutations";
import { GET_ASSIGNMENT, GET_COURSES } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../../State";
import FiltredData from "../../../constants/FiltredRoles";

export default function UseAssignment() {
  const [{ courseBatch, COURSE_DATA }] = FiltredData();
  const formInputs = [
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "Course Batches",
      name: "courseBatchesId",
      type: "selectBatch",
      dropDown: courseBatch,
    },
    {
      label: "Courses",
      name: "coursesId",
      type: "selectCourse",
      dropDown: COURSE_DATA,
    },
  ];
  const { state, dispatch } = useContext(AppContext);

  //GET STAFF

  let { data, loading: GET_LOADING, error } = useQuery(GET_ASSIGNMENT);
  //   console.log("error", error);
  const refacteredData = [];
  data?.courseAssignments?.map((item) => {
    refacteredData.push({
      id: item.id,
      name: item.name,
      courseBatchesId: item.courseBatchesId,
      coursesId: item.coursesId,
      createdAt: item.createdAt,
      updateAt: item.updateAt,
    });
  });
  console.log("refacteredData", refacteredData);

  const [loader, setLoader] = useState(false);

  //ADD STAFF

  let [CreateCourseAssignment, { loading: ADD_LOADING }] =
    useMutation(ADD_ASSIGNMENT);

  const ctaFormHandler = async (event) => {
    event.preventDefault();
    if (!state.editData?.courseBatchesId) {
      ToastWarning("Course Batches required");
    } else if (!state.editData?.name) {
      ToastWarning("Name required");
    } else if (!state.editData?.coursesId) {
      ToastWarning("Courses required");
    } else {
      try {
        await CreateCourseAssignment({
          variables: {
            data: {
              name: state.editData?.name,
              CourseBatches: {
                connect: {
                  id: state.editData?.courseBatchesId,
                },
              },
              courses: {
                connect: {
                  id: state.editData?.coursesId,
                },
              },
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
            ToastSuccess("Assignment Added");
          },
          refetchQueries: [{ query: GET_ASSIGNMENT }],
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

  // let [DeleteCourseAssignment, { loading: DELETE_LOADING }] = useMutation(DELETE_ASSIGNMENT);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //     try {
  //         await DeleteCourseAssignment({
  //             variables: {
  //                 where: {
  //                     id: data.id,
  //                 },
  //             },
  //             onCompleted(data) {
  //                 ToastSuccess('Course Deleted')
  //             },
  //             refetchQueries: [{ query: GET_ASSIGNMENT }],
  //         });
  //     } catch (error) {
  //         console.log(error.message);
  //     }
  // };

  //Update staff

  let [UpdateCourseAssignment, { loading: UPDATE_LOADING }] =
    useMutation(UPDATE_ASSIGNMENT);

  const ctaUpdateHandler = async (event) => {
    event.preventDefault();
    if (!state.editData?.courseBatchesId) {
      ToastWarning("Course Batches required");
    } else if (!state.editData?.name) {
      ToastWarning("Name required");
    } else if (!state.editData?.coursesId) {
      ToastWarning("Courses required");
    } else {
      try {
        await UpdateCourseAssignment({
          variables: {
            where: {
              id: state.editId,
            },

            data: {
              name: {
                set: state.editData?.name,
              },
              CourseBatches: {
                connect: {
                  id: state.editData?.courseBatchesId,
                },
              },
              courses: {
                connect: {
                  id: state.editData?.coursesId,
                },
              },
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
            ToastSuccess("Course Updated");
          },
          refetchQueries: [{ query: GET_ASSIGNMENT }],
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };
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
