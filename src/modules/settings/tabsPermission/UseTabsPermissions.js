import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_QUIZ,
    // DELETE_QUIZ,
    UPDATE_QUIZ
} from "../../../lib/mutation/AllMutations";
import { GET_QUIZ, GET_USERS } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../../State";
import FiltredData from "../../../constants/FiltredRoles";







export function UseTabsPermissions() {
    const [{ courseBatch, COURSE_DATA }] = FiltredData()
    const formInputs = [

        {
            label: "Course Batches",
            name: "courseBatchesId",
            type: "selectBatch",
            dropDown: courseBatch
        },
        {
            label: "Courses",
            name: "coursesId",
            type: "selectCourse",
            dropDown: COURSE_DATA

        },
    ]
    const { state, dispatch } = useContext(AppContext);





    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_USERS);

    const op = data?.users?.map((item) => {
        return item.userGroup.tabsPermission.navigationResults.map((val) => {
            return val.pages.map((val2)=>{
                return val2.pageName
            })
          
        })
    })

  

    console.log("error", error);
    const refacteredData = [];
    data?.users?.forEach((item) => {
        refacteredData.push({
            name: item.name,
            permissions: item.userGroup.tabsPermission.navigationResults.map((val) => {
                return val.pages
              
            }),
            updateAt: item.userGroup.updateAt,
            createdAt: item.userGroup.createdAt,
            role: item.userGroup.userGroupRole,
        });
    })
    console.log("refacteredData", refacteredData);


    //ADD STAFF

    let [CreateCourseQuiz, { loading: ADD_LOADING }] = useMutation(ADD_QUIZ);

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!state.editData?.courseBatchesId) {
            ToastWarning('Course Batches required')
        }
        else if (!state.editData?.coursesId) {
            ToastWarning('Courses required')
        }
        else {
            try {
                await CreateCourseQuiz({
                    variables: {

                        data: {
                            courseBatches: {
                                connect: {
                                    id: state?.editData?.courseBatchesId
                                }
                            },
                            courses: {
                                connect: {
                                    id: state?.editData?.coursesId
                                }
                            },
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
                        ToastSuccess('Quiz Added')

                    },
                    refetchQueries: [{ query: GET_QUIZ }],
                });
            } catch (error) {
                dispatch({
                    type: "setModal",
                    payload: {
                        openFormModal: false,
                    },
                });
                ToastError(error.message);

            }
        }
    };





    // DELETE STAFF

    // let [DeleteCourseQuiz, { loading: DELETE_LOADING }] = useMutation(DELETE_QUIZ);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteCourseQuiz({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Quiz Deleted')
    //             },
    //             refetchQueries: [{ query: GET_QUIZ }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [UpdateCourseQuiz, { loading: UPDATE_LOADING }] = useMutation(UPDATE_QUIZ);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!state.editData?.courseBatchesId) {
            ToastWarning('Course Batches required')
        }
        else if (!state.editData?.coursesId) {
            ToastWarning('Courses required')
        }
        else {
            try {
                await UpdateCourseQuiz({
                    variables: {
                        where: {
                            id: state.editId
                        },

                        data: {
                            courseBatches: {
                                connect: {
                                    id: state?.editData?.courseBatchesId
                                }
                            },
                            courses: {
                                connect: {
                                    id: state?.editData?.coursesId
                                }
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
                        ToastSuccess('Quiz Updated')
                    },
                    refetchQueries: [{ query: GET_QUIZ }],
                })

            } catch (error) {
                console.log(error.message);
            }
        }
    }
    return [
        {
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
