import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { useState, useContext } from "react";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_CONTACT_US,
    // DELETE_CONTACT,
    UPDATE_SINGLE_CONTACT,
} from "../../../lib/mutation/AllMutations";
import { GET_CONTACT_US } from "../../../lib/queries/AllQueries";
import { openModal, updateFlag, editData, editId } from "../../../lib/reactivities/reactiveVarables";







export function UseContactUs() {
    const useEditId = useReactiveVar(editId)
    const useEditData = useReactiveVar(editData)
    console.log("Edit data in contact", useEditData);
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
        // if (!state.editData?.name) {
        if (!useEditData?.name) {
            ToastWarning('Name required')
        }
        // else if (!state.editData?.subject) {
        else if (!useEditData?.subject) {
            ToastWarning('Subject  required')
        }
        // else if (!state.editData?.message) {
        else if (!useEditData?.message) {
            ToastWarning('Message required')
        }
        // else if (!state.editData?.reply) {
        else if (!useEditData?.reply) {
            ToastWarning('Reply required')
        }
        // else if (!state.editData?.status) {
        else if (!useEditData?.status) {
            ToastWarning('Status required')
        }
        else {
            try {
                await CreateContactUs({
                    variables: {
                        data: {
                            // name: state.editData?.name,
                            name: useEditData?.name,
                            // subject: state.editData?.subject,
                            subject: useEditData?.subject,
                            // message: state.editData?.message,
                            message: useEditData?.message,
                            // status: state.editData?.status,
                            status: useEditData?.status,
                            // reply: state.editData?.reply,
                            reply: useEditData?.reply,
                        },
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
                        editData({})
                        ToastSuccess('Contact Added')
                    },
                    refetchQueries: [{ query: GET_CONTACT_US }],

                });
            } catch (error) {
                // dispatch({
                //     type: "setModal",
                //     payload: {
                //         openFormModal: false,
                //     },
                // });
                openModal(false)
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
        event.preventDefault();
        // if (!state.editData?.name) {
        if (!useEditData?.name) {
            ToastWarning('Name required')
        }
        // else if (!state.editData?.subject) {
        else if (!useEditData?.subject) {
            ToastWarning('Subject  required')
        }
        // else if (!state.editData?.message) {
        else if (!useEditData?.message) {
            ToastWarning('Message required')
        }
        // else if (!state.editData?.reply) {
        else if (!useEditData?.reply) {
            ToastWarning('Reply required')
        }
        // else if (!state.editData?.status) {
        else if (!useEditData?.status) {
            ToastWarning('Status required')
        }
        else {
            try {
                await UpdateContactUs({
                    variables: {
                        where: {
                            id: useEditId
                        },
                        data: {
                            name: {
                                // set: state.editData?.name
                                set: useEditData?.name
                            },
                            subject: {
                                // set: state.editData?.subject
                                set: useEditData?.subject
                            },
                            message: {
                                // set: state.editData?.message
                                set: useEditData?.message
                            },
                            reply: {
                                // set: state.editData?.reply
                                set: useEditData?.reply
                            },
                            status: {
                                // set: state.editData?.status
                                set: useEditData?.status
                            }
                        }
                    },
                    refetchQueries: [{ query: GET_CONTACT_US }],
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
                        editData({})
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
