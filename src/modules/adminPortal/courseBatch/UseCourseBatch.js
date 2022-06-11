import { useMutation, useQuery } from "@apollo/client";
import { useState, useContext } from "react";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import FiltredData from "../../../constants/FiltredRoles";
import {
    ADD_COURSE_BATCH,
    DELETE_COURSE_BATCH,
    UPDATE_COURSE_BATCH
} from "../../../lib/mutation/AllMutations";
import { GET_COURSE_BATCH } from "../../../lib/queries/AllQueries";
import { AppContext } from "../../../State";







export default function UseCourseBatch() {
    const [{ COURSE_DATA }] = FiltredData()
    const formInputs = [
        {
            label: "Name",
            name: "name",
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

    let { data, loading: GET_LOADING, error } = useQuery(GET_COURSE_BATCH);
    const refacteredData = [];
    data?.findManyCourseBatches?.map((item) => {
        refacteredData.push({
            id: item.id,
            name: item.name,
            coursesId: item.coursesId,
            courseName: item.courseName,
            createdAt: item.createdAt,
            updateAt: item.updateAt,
        });
    });


    //ADD STAFF

    let [CreateCourseBatches, { loading: ADD_LOADING }] = useMutation(ADD_COURSE_BATCH);

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!state.editData?.name) {
            ToastWarning('name required')
        }
        else if (!state.editData?.coursesId) {
            ToastWarning('Course Id required')
        }
        // else if (!state.editData?.assignmentId) {
        //     ToastWarning('assignmentId required')
        // }
        // else if (!state.editData?.quizId) {
        //     ToastWarning('quizId required')
        // }
        else {
            try {
                await CreateCourseBatches({
                    variables: {
                        data: {
                            name: state.editData?.name,
                            // assignment: {
                            //     connect: [
                            //         {
                            //             id: state.editData?.assignmentId
                            //         }
                            //     ]
                            // },
                            // quiz: {
                            //     connect: [
                            //         {
                            //             id: state.editData?.quizId
                            //         }
                            //     ]
                            // },
                            courses: {
                                connect: {
                                    id: state.editData?.coursesId
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
                        ToastSuccess('Lecture Added')

                    },
                    refetchQueries: [{ query: GET_COURSE_BATCH }],
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

    let [DeleteCourseBatches, { loading: DELETE_LOADING }] = useMutation(DELETE_COURSE_BATCH);
    const ctaDeleteHandler = async ({ ...data }) => {
        try {
            await DeleteCourseBatches({
                variables: {
                    where: {
                        id: data.id,
                    },
                },
                onCompleted(data) {
                    ToastSuccess('Course Deleted')
                },
                refetchQueries: [{ query: GET_COURSE_BATCH }],
            });
        } catch (error) {
            console.log(error.message);
        }
    };





    //Update staff

    let [UpdateCourseBatches, { loading: UPDATE_LOADING }] = useMutation(UPDATE_COURSE_BATCH);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!state.editData?.name) {
            ToastWarning('name required')
        }
        else if (!state.editData?.coursesId) {
            ToastWarning('Course Id required')
        }
        else {
            try {
                await UpdateCourseBatches({
                    variables: {
                        where: {
                            id: state.editId
                        },

                        data: {
                            name: {
                                set: state.editData?.name
                            },
                            courses: {
                                connect: {
                                    id: state.editData?.coursesId
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
                    refetchQueries: [{ query: GET_COURSE_BATCH }],
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
