import { useMutation, useQuery, readQuery } from "@apollo/client";

import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_COURSES,
  UPDATE_SINGLE_COURSE,
  // DELETE_SINGLE_COURSE
} from "../../lib/mutation/AllMutations";
import { CASHED_COURSES, GET_COURSES } from "../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../State";
import FiltredData from "../../constants/FiltredRoles";
import { useApolloClient } from "@apollo/client";
import { openModal, updateFlag } from "../../commonComponents/newTable/NewTable";







export function UseCourses() {



  //GET_CATEGORIES
  const [{ teacher, CATEGORY_DATA }] = FiltredData()
  const { state, dispatch } = useContext(AppContext);
  // const client = useApolloClient()
  // const { findManyCourses:{
  //   courseName,
  // } } = client.readQuery({
  //   query: GET_COURSES,
  //   // variables: { // Provide any required variables here.  Variables of mismatched types will return `null`.
  //   //   id: 5,
  //   // },
  // });

  // console.log("Courses data in cache", findManyCourses);
  const formInputs = [
    {
      label: "Name", 
      name: "courseName",
      type: "text",
    },
    {
      label: "Description",
      name: "courseDesc",
      type: "text",
    },
    {
      label: "Intro",
      name: "courseIntro",
      type: "text",
    },
    {
      label: "Price",
      name: "coursePrice",
      type: "number",
    },
    {
      label: "Course Category Id",
      name: "courseCategoryId",
      type: "selectCategory",
      dropDown: CATEGORY_DATA
    },
    {
      label: "Select Instructor",
      name: "instructorId",
      type: "selectInstructor",
      dropDown: teacher
    },
    {
      label: "Status",
      name: "courseStatus",
      type: "select",
      dropDownContent: ["PUBLISH", "UNPUBLISH"],
    },
  ]





//GET Courses

//   let { data } = useQuery(CASHED_COURSES);
//   let [ getCourses, {data: networkCourses, loading: GET_LOADING, error} ] = useLazyQuery(GET_COURSES);
//   useEffect(() => {
//     getCourses();
//   }, []);

//   useEffect(()=> {
//     client.writeQuery({
//       query: CASHED_COURSES,
//       data: {
//         courses: networkCourses
//       }
//     })
//   }, [networkCourses])
//   console.log("coursesData", data);
//   const refacteredData = [];
//   data?.courses?.findManyCourses?.map((item) => {
//     refacteredData.push({
//       id: item.id,
//       courseName: item.courseName,
//       courseDesc: item.courseDesc,
//       courseIntro: item.courseIntro,
//       courseStatus: item.courseStatus,
//       coursePrice: item.coursePrice,
//       instructorId: item.instructorId,
//       courseCategoryId: item.courseCategoryId,
//     });
//   });
//   console.log("refacteredData", refacteredData);

  let { data, loading: GET_LOADING, error } = useQuery(GET_COURSES);
  console.log("error", error);
  const refacteredData = [];
  data?.findManyCourses?.map((item) => {
    refacteredData.push({
      id: item.id,
      courseName: item.courseName,
      courseDesc: item.courseDesc,
      courseIntro: item.courseIntro,
      courseStatus: item.courseStatus,
      coursePrice: item.coursePrice,
      instructorId: item.instructorId,
      courseCategoryId: item.courseCategoryId,
      createdAt: item.createdAt
    });
  });
  console.log("refacteredData", refacteredData);

  const [loader, setLoader] = useState(false);

  //ADD Course
  const handleClickOpen = () => {
    // dispatch({
    //   type: "setModal",
    //   payload: {
    //     openFormModal: true,
    //   },
    // });
    openModal(true)
  };

  let [CreateCourses, { loading: ADD_LOADING }] = useMutation(ADD_COURSES);

  const ctaFormHandler = async (event) => {
    event.preventDefault();
    if (!state.editData?.courseName) {
      ToastWarning('Course name required')
    }
    else if (!state.editData?.courseDesc) {
      ToastWarning('Course description required')
    }
    else if (!state.editData?.courseIntro) {
      ToastWarning('Intro required')
    }
    else if (!state.editData?.coursePrice) {
      ToastWarning('Price required')
    }
    else if (!state.editData?.instructorId) {
      ToastWarning('Instructor Id required')
    }
    else if (!state.editData?.courseCategoryId) {
      ToastWarning('Course category Id required')
    }
    else if (!state.editData?.courseStatus) {
      ToastWarning('Status required')
    }
    else {
      try {
        await CreateCourses({
          variables: {
            data: {
              courseName: state.editData?.courseName,
              courseDesc: state.editData?.courseDesc,
              instructor: {
                connect: {
                  id: state.editData?.instructorId,
                }
              },
              courseIntro: state.editData?.courseIntro,
              courseCategory: {
                connect: {
                  id: state.editData?.courseCategoryId,
                }
              },
              organization: {
                connect: {
                  id: state.user?.id,
                }
              },
              coursePrice: state.editData?.coursePrice,
              createdAt: new Date()
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
            ToastSuccess('Course Added')

          },
          refetchQueries: [{ query: GET_COURSES }],
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

  // let [DeleteCourses, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_COURSE);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //   try {
  //     await DeleteCourses({
  //       variables: {
  //         where: {
  //           id: data.id,
  //         },
  //       },
  //       onCompleted(data) {
  //         ToastSuccess('Course Deleted')
  //       },
  //       refetchQueries: [{ query: GET_COURSES }],
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };





  //Update staff

  let [UpdateCourses, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_COURSE);

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!state.editData?.courseName) {
      ToastWarning('Course name required')
    }
    else if (!state.editData?.courseDesc) {
      ToastWarning('Course description required')
    }
    else if (!state.editData?.courseIntro) {
      ToastWarning('Intro required')
    }
    else if (!state.editData?.coursePrice) {
      ToastWarning('Price required')
    }
    else if (!state.editData?.instructorId) {
      ToastWarning('Instructor Id required')
    }
    else if (!state.editData?.courseCategoryId) {
      ToastWarning('Course category Id required')
    }
    else if (!state.editData?.courseStatus) {
      ToastWarning('Status required')
    }
    else {
      try {
        await UpdateCourses({
          variables: {
            where: {
              id: state.editId
            },
            data: {
              courseName: {
                set: state.editData?.courseName
              },
              courseDesc: {
                set: state.editData?.courseDesc
              },
              courseIntro: {
                set: state.editData?.courseIntro
              },
              instructor: {
                connect: {
                  id: state.editData?.instructorId,
                }
              },
              courseCategory: {
                connect: {
                  id: state.editData?.courseCategoryId,
                }
              },
              organization: {
                connect: {
                  id: state.user?.id
                }
              },
              coursePrice: {
                set: state.editData?.coursePrice
              },
              courseStatus: {
                set: state.editData?.courseStatus
              },
            },
          },

          onCompleted() {
            // dispatch({
            //   type: "setModal",
            //   payload: {
            //     modalUpdateFlag: false,
            //     openFormModal: false,
            //   },
            // });
            openModal(false)
            updateFlag(false)
            ToastSuccess('Course Updated')
          },
          refetchQueries: [{ query: GET_COURSES }],
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
      //,
      ctaUpdateHandler,
      formInputs,
      handleClickOpen
    },
  ];
}
