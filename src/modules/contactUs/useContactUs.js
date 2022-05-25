import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_CONTACT_US,
    DELETE_CONTACT,
    UPDATE_SINGLE_CONTACT,
} from "../../lib/mutation/AllMutations";
import { GET_CONTACT_US } from "../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../State";







export function UseContactUs() {
    const formInputs = [
        {
            label: "Name",
            name: "name",
            type: "text",
        },
        {
            label: "Subject",
            name: "subject",
            type: "text",
        },
        {
            label: "Message",
            name: "message",
            type: "text",
        },
        {
            label: "Reply",
            name: "reply",
            type: "text",
        },
        {
            label: "Status",
            name: "status",
            type: "select",
            dropDownContent: ["CONTACTED", "DECLINE", "UNSEEN", "USEFUL"],
        },
    ]
    const { state, dispatch } = useContext(AppContext);






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_CONTACT_US);
    console.log("error", error);
    const refacteredData = [];
    data?.contactuses?.map((item) => {
        refacteredData.push({
            id: item.id,
            name: item.name,
            subject: item.subject,
            message: item.message,
            status: item.status,
            reply: item.reply,

        });
    });
    console.log("refacteredData", refacteredData);

    const [loader, setLoader] = useState(false);

    //ADD STAFF

    let [CreateManyStudents, { loading: ADD_LOADING }] = useMutation(ADD_CONTACT_US);
    const ctaFormHandler = async (event) => {
        event.preventDefault();
        try {
            await CreateManyStudents({
                variables: {
                    data: {
                        name: state.editData?.name,
                        subject: state.editData?.subject,
                        message: state.editData?.message,
                        status: state.editData?.status,
                        reply: state.editData?.reply,
                    },
                },
                refetchQueries: [{ query: GET_CONTACT_US }],
                onCompleted(data, cache) {
                    dispatch({
                        type: "setModal",
                        payload: {
                            modalUpdateFlag: false,
                            openFormModal: false,
                        },
                    });
                    ToastSuccess('Contact Added')
                },
               
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
    };





    // DELETE STAFF

    let [DeleteMutation, { loading: DELETE_LOADING }] = useMutation(DELETE_CONTACT);
    const ctaDeleteHandler = async ({ ...data }) => {
        try {
            await DeleteMutation({
                variables: {
                    where: {
                        id: data.id,
                    },
                },
                onCompleted(data) {
                    ToastSuccess('Contact Deleted')
                },
                refetchQueries: [{ query: GET_CONTACT_US }],
            });
        } catch (error) {
            console.log(error.message);
        }
    };





    //Update staff

    let [UpdateContactUs, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_CONTACT);
    const [updatedIndex, setUpdatedIndex] = useState('')
    const ctaEditButtonHandler = async (data) => {
        const test = state.editData;
        console.log(data.id);
        setUpdatedIndex(data.id)
        dispatch({
            type: "setModal",
            payload: {
                openFormModal: true,
                modalUpdateFlag: true,
            },
        });
        formInputs.map((item) => {
            test[item.name] = data[item.name];
        });
        dispatch({
            type: "setEditData",
            payload: test,
        });
    };
    const ctaUpdateHandler = async (event) => {
        event.preventDefault()

        try {
            await UpdateContactUs({
                variables: {
                    where: {
                        id: updatedIndex
                    },
                    data: {
                        name: {
                            set: state.editData?.name
                        },
                        subject: {
                            set: state.editData?.subject
                        },
                        message: {
                            set: state.editData?.message
                        },
                        reply: {
                            set: state.editData?.reply
                        },
                        status: {
                            set: state.editData?.status
                        }
                    }
                },
                refetchQueries: [{ query: GET_CONTACT_US }],
                onCompleted() {
                    dispatch({
                        type: "setModal",
                        payload: {
                            modalUpdateFlag: false,
                            openFormModal: false,
                        },
                    });
                    ToastSuccess('Contact Updated')
                },
               
            })

        } catch (error) {
            console.log(error.message);
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
            ctaEditButtonHandler
        },
    ];
}
