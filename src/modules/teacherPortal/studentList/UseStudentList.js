import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_COURSES,
    UPDATE_SINGLE_COURSE,
    // DELETE_SINGLE_COURSE
} from "../../../lib/mutation/AllMutations";
import { GET_COURSES } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../../State";
import { openModal, updateFlag, editData } from "../../../lib/reactivities/reactiveVarables";






export default function UseStudentList() {
    const useEditData = useReactiveVar(editData)
    console.log("Edit data in Student", useEditData);
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
            label: "instructorId",
            name: "instructorId",
            type: "text",
        },
        {
            label: "courseCategoryId",
            name: "courseCategoryId",
            type: "text",
        },
        {
            label: "Status",
            name: "courseStatus",
            type: "select",
            dropDownContent: ["PUBLISH", "UNPUBLISH"],
        },
    ]
    const { state, dispatch } = useContext(AppContext);






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_COURSES);
    console.log("error", error);
    const refacteredData = [
        {
            id: '92739237293729793',
            name: 'test',
            email: 'test@gmail.com',
            status: 'Offline',
        },
        {
            id: '92739237293729793',
            name: 'test',
            email: 'test@gmail.com',
            status: 'Active',
        },
        {
            id: '92739237293729793',
            name: 'test',
            email: 'test@gmail.com',
            status: 'Offline',
        },
    ];
    //   data?.findManyCourses?.map((item) => {
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

    const [loader, setLoader] = useState(false);

    //ADD STAFF

    let [Mutation, { loading: ADD_LOADING }] = useMutation(ADD_COURSES);

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!useEditData?.courseName) {
            ToastWarning('Course name required')
        }
        else if (!useEditData?.courseDesc) {
            ToastWarning('Course description required')
        }
        else if (!useEditData?.courseIntro) {
            ToastWarning('Intro required')
        }
        else if (!useEditData?.coursePrice) {
            ToastWarning('Price required')
        }
        else if (!useEditData?.instructorId) {
            ToastWarning('Instructor Id required')
        }
        else if (!useEditData?.courseCategoryId) {
            ToastWarning('Course category Id required')
        }
        else if (!useEditData?.courseStatus) {
            ToastWarning('Status required')
        }
        else {
            try {
                await Mutation({
                    variables: {
                        data: {
                            courseName: useEditData?.courseName,
                            courseDesc: useEditData?.courseDesc,
                            courseIntro: useEditData?.courseIntro,
                            courseStatus: useEditData?.courseStatus,
                            instructorId: useEditData?.instructorId,
                            courseCategoryId: useEditData?.courseCategoryId,
                            coursePrice: useEditData?.coursePrice,

                            // phone: useEditData?.phone
                        },
                    },
                    onCompleted(data, cache) {
                        // dispatch({
                        //     type: "setModal",
                        //     payload: {
                        //         modalUpdateFlag: false,
                        //         openFormModal: false,
                        //     },
                        // });
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        ToastSuccess('Course Added')

                    },
                    refetchQueries: [{ query: GET_COURSES }],
                });
            } catch (error) {
                // dispatch({
                //     type: "setModal",
                //     payload: {
                //         openFormModal: false,
                //     },
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
    //     try {
    //         await DeleteCourses({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Course Deleted')
    //             },
    //             refetchQueries: [{ query: GET_COURSES }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [UpdateCourses, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_COURSE);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!useEditData?.courseName) {
            ToastWarning('Course name required')
        }
        else if (!useEditData?.courseDesc) {
            ToastWarning('Course description required')
        }
        else if (!useEditData?.courseIntro) {
            ToastWarning('Intro required')
        }
        else if (!useEditData?.coursePrice) {
            ToastWarning('Price required')
        }
        else if (!useEditData?.instructorId) {
            ToastWarning('Instructor Id required')
        }
        else if (!useEditData?.courseCategoryId) {
            ToastWarning('Course category Id required')
        }
        else if (!useEditData?.courseStatus) {
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
                                set: useEditData?.courseName
                            },
                            courseDesc: {
                                set: useEditData?.courseDesc
                            },
                            courseIntro: {
                                set: useEditData?.courseIntro
                            },
                            courseStatus: {
                                set: useEditData?.courseStatus
                            },
                            coursePrice: {
                                set: useEditData?.coursePrice
                            }
                        }
                    },
                    onCompleted() {
                        // dispatch({
                        //     type: "setModal",
                        //     payload: {
                        //         modalUpdateFlag: false,
                        //         openFormModal: false,
                        //     },
                        // });
                        openModal(false)
                        updateFlag(false)
                        editData({})
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
            // ctaDeleteHandler,
            ctaUpdateHandler,
            formInputs,
        },
    ];
}
