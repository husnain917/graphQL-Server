import { useMutation, useQuery } from "@apollo/client";
import { useState, useContext } from "react";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import { openModal, updateFlag } from "../../../commonComponents/newTable/NewTable";
import {
    ADD_CONTACT_US,
    // DELETE_CONTACT,
    UPDATE_SINGLE_CONTACT,
} from "../../../lib/mutation/AllMutations";
import { GET_CONTACT_US } from "../../../lib/queries/AllQueries";
import { AppContext } from "../../../State";







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
            dropDownContent: [
                "CONTACTED",
                "DECLINE",
                "UNSEEN",
                "USEFUL"
            ],
        },
    ]
    const { state, dispatch } = useContext(AppContext);






    //GET STAFF 

    let {
        data,
        loading: GET_LOADING,
    } = useQuery(GET_CONTACT_US);
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


    //ADD STAFF

    let [
        CreateContactUs,
        {
            loading: ADD_LOADING
        }] = useMutation(ADD_CONTACT_US);
    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!state.editData?.name) {
            ToastWarning('Name required')
        }
        else if (!state.editData?.subject) {
            ToastWarning('Subject  required')
        }
        else if (!state.editData?.message) {
            ToastWarning('Message required')
        }
        else if (!state.editData?.reply) {
            ToastWarning('Reply required')
        }
        else if (!state.editData?.status) {
            ToastWarning('Status required')
        }
        else {
            try {
                await CreateContactUs({
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
                        // dispatch({
                        //     type: "setModal",
                        //     payload: {
                        //         modalUpdateFlag: false,
                        //         openFormModal: false,
                        //     },
                        // });
                        openModal(false)
                        updateFlag(false)
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
                ToastError("Contact not added");

            }
        }
    };





    // DELETE STAFF

    // let [
    //     DeleteMutation,
    //     {
    //         loading: DELETE_LOADING
    //     }] = useMutation(DELETE_CONTACT);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteMutation({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Contact Deleted')
    //             },
    //             refetchQueries: [{ query: GET_CONTACT_US }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [
        UpdateContactUs,
        {
            loading: UPDATE_LOADING
        }] = useMutation(UPDATE_SINGLE_CONTACT);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!state.editData?.name) {
            ToastWarning('Name required')
        }
        else if (!state.editData?.subject) {
            ToastWarning('Subject  required')
        }
        else if (!state.editData?.message) {
            ToastWarning('Message required')
        }
        else if (!state.editData?.reply) {
            ToastWarning('Reply required')
        }
        else if (!state.editData?.status) {
            ToastWarning('Status required')
        }
        else {
            try {
                await UpdateContactUs({
                    variables: {
                        where: {
                            id: state.editId
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
                    // onCompleted() {
                    //     dispatch({
                    //         type: "setModal",
                    //         payload: {
                    //             modalUpdateFlag: false,
                    //             openFormModal: false,
                    //         },
                    //     });
                    //     ToastSuccess('Contact Updated')
                    // },
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
                        ToastSuccess('Contact Updated')

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
