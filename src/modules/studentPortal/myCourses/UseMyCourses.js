import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_MY_COURSES,
    // DELETE_MY_COURSE,
    UPDATE_MY_COURSE
} from "../../../lib/mutation/AllMutations";
import { GET_MY_COURSES } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../../State";
import FiltredData from "../../../constants/FiltredRoles";
import { openModal, updateFlag } from "../../../lib/reactivities/reactiveVarables";







export default function UseMyCourses() {
    const [{ student, COURSE_DATA, courseBatch }] = FiltredData()
    const formInputs = [
        {
            label: "Course",
            name: "coursesId",
            type: "selectCourse",
            dropDown: COURSE_DATA
        },
        {
            label: "Student",
            name: "studentId",
            type: "selectUser",
            dropDown: student
        },
        {
            label: "course Batche",
            name: "courseBatchesId",
            type: "selectBatch",
            dropDown: courseBatch
        },
        {
            label: "Status",
            name: "feeStatus",
            type: "select",
            dropDownContent: ["PAID", "PENDING", "HALFPAID"],
        },
    ]
    const { state, dispatch } = useContext(AppContext);






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_MY_COURSES);
    console.log("error", error);
    const refacteredData = [];
    data?.myCourses?.map((item) => {
        refacteredData.push({
            id: item.id,
            coursesId: item.coursesId,
            studentId: item.studentId,
            courseApproval: item.courseApproval,
            whyReject: item.whyReject,
            feeStatus: item.feeStatus,
            // courseBatchesId: item.courseBatchesId,
            updateAt: item.updateAt,
            createdAt: item.createdAt,
        });
    });
    console.log("refacteredData in useMyCourse", refacteredData);

    const [loader, setLoader] = useState(false);

    //ADD STAFF

    let [Mutation, { loading: ADD_LOADING }] = useMutation(ADD_MY_COURSES);

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!state.editData?.coursesId) {
            ToastWarning('Course required')
        }
        else if (!state.editData?.studentId) {
            ToastWarning('Student  required')
        }
        else if (!state.editData?.courseBatchesId) {
            ToastWarning('Course Batches required')
        }
        else if (!state.editData?.feeStatus) {
            ToastWarning('FeeStatus required')
        }
        else {
            try {
                await Mutation({
                    variables: {
                        data: {
                            courses: {
                                connect: {
                                    id: state.editData?.coursesId
                                }
                            },
                            student: {
                                connect: {
                                    id: state.editData?.studentId
                                }
                            },
                            courseBatches: {
                                connect: {
                                    id: state.editData?.courseBatchesId
                                }
                            },
                            feeStatus: state?.editData?.feeStatus
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
                        ToastSuccess('Course Added')

                    },
                    refetchQueries: [{ query: GET_MY_COURSES }],
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

    // let [DeleteMyCourse, { loading: DELETE_LOADING }] = useMutation(DELETE_MY_COURSE);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteMyCourse({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Course Deleted')
    //             },
    //             refetchQueries: [{ query: GET_MY_COURSES }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [UpdateMyCourse, { loading: UPDATE_LOADING }] = useMutation(UPDATE_MY_COURSE);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!state.editData?.coursesId) {
            ToastWarning('Course required')
        }
        else if (!state.editData?.studentId) {
            ToastWarning('Student  required')
        }
        else if (!state.editData?.courseBatchesId) {
            ToastWarning('Course Batches required')
        }
        else if (!state.editData?.feeStatus) {
            ToastWarning('FeeStatus required')
        }
        else {
            try {
                await UpdateMyCourse({
                    variables: {
                        where: {
                            id: state.editId
                        },

                        data: {
                            courses: {
                                connect: {
                                    id: state.editData?.coursesId
                                }
                            },
                            student: {
                                connect: {
                                    id: state.editData?.studentId
                                }
                            },
                            courseBatches: {
                                connect: {
                                    id: state.editData?.courseBatchesId
                                }
                            },
                            feeStatus: {
                                set: state.editData?.feeStatus
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
                    refetchQueries: [{ query: GET_MY_COURSES }],
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
