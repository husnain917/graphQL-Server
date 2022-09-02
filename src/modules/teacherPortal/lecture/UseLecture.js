import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_LECTURES,
    // DELETE_LECTURE,
    UPDATE_LECTURES
} from "../../../lib/mutation/AllMutations";
import { GET_COURSES, GET_LECTURES } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../../State";
import FiltredData from "../../../constants/FiltredRoles";
import { openModal, updateFlag } from "../../../commonComponents/newTable/NewTable";







export default function UseLecture() {
    const [{ COURSE_DATA }] = FiltredData()
    const formInputs = [
        {
            label: "Lecture Title",
            name: "lectureTitle",
            type: "text",
        },
        {
            label: "Lecture Video",
            name: "lectureVideo",
            type: "text",
        },
        {
            label: "Course",
            name: "coursesId",
            type: "selectCourse",
            dropDown: COURSE_DATA
        },
    ]
    const { state, dispatch } = useContext(AppContext);






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_LECTURES);
    console.log("error", error);
    const refacteredData = [];
    data?.findManyLectures?.map((item) => {
        refacteredData.push({
            id: item.id,
            coursesId: item.coursesId,
            lectureTitle: item.lectureTitle,
            lectureVideo: item.lectureVideo,
            createdAt: item.createdAt,
            updateAt: item.updateAt,
        });
    });
    console.log("refacteredData", refacteredData);

    const [loader, setLoader] = useState(false);

    //ADD STAFF

    let [CreateLectures, { loading: ADD_LOADING }] = useMutation(ADD_LECTURES);

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!state.editData?.lectureTitle) {
            ToastWarning('Lecture Title required')
        }
        else if (!state.editData?.lectureVideo) {
            ToastWarning('Lecture Video required')
        }
        else if (!state.editData?.coursesId) {
            ToastWarning('Course required')
        }
        else {
            try {
                await CreateLectures({
                    variables: {

                        data: {
                            lectureTitle: state.editData?.lectureTitle,
                            lectureVideo: state.editData?.lectureVideo,
                            courses: {
                                connect: {
                                    id: state.editData?.coursesId
                                }
                            }
                        }

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
                        ToastSuccess('Lecture Added')

                    },
                    refetchQueries: [{ query: GET_LECTURES }],
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

    // let [DeleteLectures, { loading: DELETE_LOADING }] = useMutation(DELETE_LECTURE);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteLectures({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Course Deleted')
    //             },
    //             refetchQueries: [{ query: GET_LECTURES }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [UpdateLectures, { loading: UPDATE_LOADING }] = useMutation(UPDATE_LECTURES);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!state.editData?.lectureTitle) {
            ToastWarning('Lecture Title required')
        }
        else if (!state.editData?.lectureVideo) {
            ToastWarning('Lecture Video required')
        }
        else if (!state.editData?.coursesId) {
            ToastWarning('Course required')
        }
        else {
            try {
                await UpdateLectures({
                    variables: {
                        where: {
                            id: state.editId
                        },
                        data: {
                            lectureTitle: {
                                set: state.editData?.lectureTitle
                            },
                            lectureVideo: {
                                set: state.editData?.lectureVideo
                            },
                            courses: {
                                connect: {
                                    id: state.editData?.coursesId
                                }
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
