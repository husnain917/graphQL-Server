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
import {  GET_QUIZ } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../../State";







export default function UseQuiz() {
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
    console.log("refacteredData", refacteredData);

    const [loader, setLoader] = useState(false);

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
                                    id: null
                                }
                            },
                            courses: {
                                connect: {
                                    id: null
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
                setLoader(false);
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
                                    id: null
                                }
                            },
                            courses: {
                                connect: {
                                    id: null
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
                        ToastSuccess('Course Updated')
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
