import { useMutation, useQuery } from "@apollo/client";
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
    DELETE_SINGLE_COURSE,
    ADD_MY_COURSES
} from "../../../lib/mutation/AllMutations";
import { GET_MY_COURSES } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../../State";







export default function UseMyCourses() {
    const formInputs = [
        {
            label: "coursesId",
            name: "coursesId",
            type: "text",
        },
        {
            label: "studentId",
            name: "studentId",
            type: "text",
        },
        {
            label: "updateAt",
            name: "updateAt",
            type: "text",
        },
        {
            label: "createdAt",
            name: "createdAt",
            type: "text",
        },
        {
            label: "courseApproval",
            name: "courseApproval",
            type: "text",
        },
        {
            label: "whyReject",
            name: "whyReject",
            type: "text",
        },
        {
            label: "course Batche",
            name: "courseBatches",
            type: "text",
        },
        {
            label: "Status",
            name: "feeStatus",
            type: "select",
            dropDownContent: ["PAID", "PENDING","HALFPAID"],
        },
    ]
    const { state, dispatch } = useContext(AppContext);






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_MY_COURSES);
    console.log("error", error);
    const refacteredData = [];
    data?.findManyCourses?.map((item) => {
        refacteredData.push({
            id: item.id,
            coursesId: item.coursesId,
            studentId: item.studentId,
            updateAt: item.updateAt,
            createdAt: item.createdAt,
            courseApproval: item.courseApproval,
            whyReject: item.whyReject,
            feeStatus: item.feeStatus,
            courseBatchesId: item.courseBatchesId,
            courseBatches: item.courseBatches.name,
            courses: item.courses.name,
            student: item.student.name,
        });
    });
    console.log("refacteredData", refacteredData);

    const [loader, setLoader] = useState(false);

    //ADD STAFF

    let [Mutation, { loading: ADD_LOADING }] = useMutation(ADD_MY_COURSES);

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
                await Mutation({
                    variables: {

                        data: {
                            id: null,
                            courses: {
                                connect: {
                                    id: null
                                }
                            },
                            student: {
                                connect: {
                                    id: null
                                }
                            },
                            createdAt: null,
                            updateAt: null,
                            courseApproval: null,
                            whyReject: null,
                            feeStatus: null,
                            courseBatches: {
                                connect: {
                                    id: null
                                }
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
                        ToastSuccess('Course Added')

                    },
                    refetchQueries: [{ query: GET_MY_COURSES }],
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

    let [DeleteCourses, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_COURSE);
    const ctaDeleteHandler = async ({ ...data }) => {
        try {
            await DeleteCourses({
                variables: {
                    where: {
                        id: data.id,
                    },
                },
                onCompleted(data) {
                    ToastSuccess('Course Deleted')
                },
                refetchQueries: [{ query: GET_MY_COURSES }],
            });
        } catch (error) {
            console.log(error.message);
        }
    };





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
                            courseStatus: {
                                set: state.editData?.courseStatus
                            },
                            coursePrice: {
                                set: state.editData?.coursePrice
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
