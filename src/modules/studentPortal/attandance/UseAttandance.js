import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    UPDATE_SINGLE_COURSE,
    DELETE_SINGLE_COURSE,
    ADD_ATTANDANCE,
    DELETE_ATTANDANCE,
    UPDATE_ATTANDANCE
} from "../../../lib/mutation/AllMutations";
import { GET_ATTANDANCE } from "../../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../../State";
import FiltredData from "../../../constants/FiltredRoles";







export default function UseAttandance() {
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
    const { state, dispatch } = useContext(AppContext);






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

    //ADD STAFF

    let [CreateAttendence, { loading: ADD_LOADING }] = useMutation(ADD_ATTANDANCE);

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!state.editData?.attendence) {
            ToastWarning('attendence required')
        }
        else if (!state.editData?.user) {
            ToastWarning('user required')
        }
        else {
            try {
                await CreateAttendence({
                    variables: {

                        data: {
                            attendence: state.editData?.attendence,
                            date: new Date().toDateString(),
                            user: {
                                connect: {
                                    id: state.editData?.user
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
                        ToastSuccess('Attandance marked')

                    },
                    refetchQueries: [{ query: GET_ATTANDANCE }],
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

    let [Mutation, { loading: DELETE_LOADING }] = useMutation(DELETE_ATTANDANCE);
    const ctaDeleteHandler = async ({ ...data }) => {
        try {
            await Mutation({
                variables: {
                    where: {
                        id: data.id,
                    },
                },
                onCompleted(data) {
                    ToastSuccess('Attandance Deleted')
                },
                refetchQueries: [{ query: GET_ATTANDANCE }],
            });
        } catch (error) {
            console.log(error.message);
        }
    };





    //Update staff

    let [UpdateAttendence, { loading: UPDATE_LOADING }] = useMutation(UPDATE_ATTANDANCE);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!state.editData?.attendence) {
            ToastWarning('attendence required')
        }
        else if (!state.editData?.user) {
            ToastWarning('user required')
        }
        else {
            try {
                await UpdateAttendence({
                    variables: {
                        where: {
                            id: state.editId
                        },

                        data: {
                            attendence: {
                                set: state.editData?.attendence
                            },
                            date: {
                                set: new Date().toDateString()
                            },
                            user: {
                                connect: {
                                    id: state.editData?.user
                                }
                            }
                        },

                    },
                    onCompleted() {
                        dispatch({
                            type: "setModal",
                            payload: {
                                modalUpdateFlag: false,
                                openFormModal: false,
                            },
                        });
                        ToastSuccess('Attandance Updated')
                    },
                    refetchQueries: [{ query: GET_ATTANDANCE }],
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
