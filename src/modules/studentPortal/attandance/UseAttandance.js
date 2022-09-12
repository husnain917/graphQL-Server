import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_ATTANDANCE,
    // DELETE_ATTANDANCE,
    UPDATE_ATTANDANCE
} from "../../../lib/mutation/AllMutations";
import { GET_ATTANDANCE } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import FiltredData from "../../../constants/FiltredRoles";
import { openModal, updateFlag, editData, editId } from "../../../lib/reactivities/reactiveVarables";








export default function UseAttandance() {
    const useEditId = useReactiveVar(editId)
    const useEditData = useReactiveVar(editData)
    console.log("Edit data in attendance", useEditData);
    const [{ student }] = FiltredData()
    const formInputs = [
        {
            label: "attendence",
            name: "attendence",
            type: "booleanSelection",
            dropDown: ["PRESENT", "ABSENT"]
        },
        {
            label: "user",
            name: "user",
            type: "selectUser",
            dropDown: student
        },

    ]
    console.log("sami", student);






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_ATTANDANCE);
    console.log("error", error);
    const refacteredData = [];
    data?.attendences?.map((item) => {
        refacteredData.push({
            id: item.id,
            attendence: item.attendence,
            date: item.date,
            userId: item.userId
        });
    });
    console.log("refacteredDatanew", refacteredData);

    const [loader, setLoader] = useState(false);

    //ADD Attendance
    const AddAttendenceInCache = (cache, { data }) => {
        const newAttendence = data.createAttendence
        const attendences = cache.readQuery({
            query: GET_ATTANDANCE,
        })

        cache.writeQuery({
            query: GET_ATTANDANCE,
            data: {
                attendences: [
                    ...attendences.attendences,
                    newAttendence
                ]
            }
        })
    };

    let [CreateAttendence, { loading: ADD_LOADING }] = useMutation(ADD_ATTANDANCE, {
        update: AddAttendenceInCache
    });

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!useEditData?.attendence) {
            ToastWarning('attendence required')
        }
        else if (!useEditData?.user) {
            ToastWarning('user required')
        }
        else {
            try {
                await CreateAttendence({
                    variables: {

                        data: {
                            attendence: useEditData?.attendence,
                            date: new Date().toDateString(),
                            user: {
                                connect: {
                                    id: useEditData?.user
                                }
                            }
                        }
                    },
                    onCompleted(data, cache) {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        ToastSuccess('Attandance marked')

                    },
                });
            } catch (error) {
                openModal(false)
                setLoader(false);
                ToastError(error.message);

            }
        }
    };





    // DELETE STAFF

    // let [Mutation, { loading: DELETE_LOADING }] = useMutation(DELETE_ATTANDANCE);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await Mutation({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Attandance Deleted')
    //             },
    //             refetchQueries: [{ query: GET_ATTANDANCE }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [UpdateAttendence, { loading: UPDATE_LOADING }] = useMutation(UPDATE_ATTANDANCE);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!useEditData?.attendence) {
            ToastWarning('attendence required')
        }
        else if (!useEditData?.user) {
            ToastWarning('user required')
        }
        else {
            try {
                await UpdateAttendence({
                    variables: {
                        where: {
                            id: useEditId
                        },

                        data: {
                            attendence: {
                                set: useEditData?.attendence
                            },
                            date: {
                                set: new Date().toDateString()
                            },
                            user: {
                                connect: {
                                    id: useEditData?.user
                                }
                            }
                        },

                    },
                    onCompleted() {
                        openModal(false)
                        updateFlag(false)
                        editData({})
                        ToastSuccess('Attandance Updated')
                    },
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
