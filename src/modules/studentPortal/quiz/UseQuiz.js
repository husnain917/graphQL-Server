import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
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
import { GET_QUIZ } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import FiltredData from "../../../constants/FiltredRoles";
import { openModal, updateFlag, editData, editId } from "../../../lib/reactivities/reactiveVarables";









export default function UseQuiz() {
    const useEditId = useReactiveVar(editId)
    const useEditData = useReactiveVar(editData)
    console.log("Edit data in Quiz", useEditData);
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






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_QUIZ);
    console.log("error", error);
    const refacteredData = [];
    data?.courseQuizs?.map((item) => {
        refacteredData.push({
            id: item.id,
            courseBatchesId: item.courseBatchesId,
            coursesId: item.coursesId,
            createdAt: item.createdAt,
            updateAt: item.updateAt
        });
    });
    console.log("refacteredData in quiz section", refacteredData);


    //ADD Quiz
    const AddQuizInCache = (cache, { data }) => {
        const newQuiz = data.createCourseQuiz
        const quizs = cache.readQuery({
            query: GET_QUIZ,
        })

        cache.writeQuery({
            query: GET_QUIZ,
            data: {
                courseQuizs: [
                    ...quizs.courseQuizs,
                    newQuiz
                ]
            }
        })
    };

    let [CreateCourseQuiz, { loading: ADD_LOADING }] = useMutation(ADD_QUIZ, {
        update: AddQuizInCache
    });

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!useEditData?.courseBatchesId) {
            ToastWarning('Course Batches required')
        }
        else if (!useEditData?.coursesId) {
            ToastWarning('Courses required')
        }
        else {
            try {
                await CreateCourseQuiz({
                    variables: {

                        data: {
                            courseBatches: {
                                connect: {
                                    id: useEditData?.courseBatchesId
                                }
                            },
                            courses: {
                                connect: {
                                    id: useEditData?.coursesId
                                }
                            },
                        }

                    },
                    onCompleted(data, cache) {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        ToastSuccess('Quiz Added')

                    },
                });
            } catch (error) {
                openModal(false)
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
        if (!useEditData?.courseBatchesId) {
            ToastWarning('Course Batches required')
        }
        else if (!useEditData?.coursesId) {
            ToastWarning('Courses required')
        }
        else {
            try {
                await UpdateCourseQuiz({
                    variables: {
                        where: {
                            id: useEditId
                        },

                        data: {
                            courseBatches: {
                                connect: {
                                    id: useEditData?.courseBatchesId
                                }
                            },
                            courses: {
                                connect: {
                                    id: useEditData?.coursesId
                                }
                            }
                        }

                    },
                    onCompleted() {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        ToastSuccess('Quiz Updated')
                    },
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
