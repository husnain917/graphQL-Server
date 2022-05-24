import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_EVENTS,
    DELETE_SINGLE_EVENT,
    UPDATE_SINGLE_EVENT,
} from "../../lib/mutation/AllMutations";
import { GET_EVENTS } from "../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { Slide, toast } from "react-toastify";
import { AppContext } from "../../State";







export function UseEvents() {
    const formInputs = [
        {
            label: "Name",
            name: "eventName",
            type: "text",
        },
        {
            label: "Description",
            name: "eventDesc",
            type: "email",
        },
        {
            label: "Speaker Id",
            name: "speakerId",
            type: "email",
        },
        {
            label: "Image",
            name: "eventImage",
            type: "email",
        },
        {
            label: "Status",
            name: "eventStatus",
            type: "select",
            dropDownContent: ["PAST", "UPCOMING"],
        },
    ]
    const { state, dispatch } = useContext(AppContext);






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_EVENTS);
    console.log("error", error);
    const refacteredData = [];
    data?.findManyEvents?.map((item) => {
        refacteredData.push({
            id: item.id,
            eventName: item.eventName,
            eventDesc: item.eventDesc,
            eventImage: item.eventImage,
            eventDate: item.eventDate,
            speakerId: item.speakerId,
            eventStatus: item.eventStatus,


        });
    });
    console.log("refacteredData", refacteredData);

    const [loader, setLoader] = useState(false);

    //ADD STAFF

    let [CreateManyEvents, { loading: ADD_LOADING }] = useMutation(ADD_EVENTS);


    const ctaFormHandler = async (event) => {
        event.preventDefault();
        try {
            await CreateManyEvents({
                variables: {
                    data: {
                        eventName: state.editData?.eventName,
                        eventDesc: state.editData?.eventDesc,
                        eventImage: state.editData?.eventImage,
                        eventDate: new Date(),
                        speakerId: state.editData?.speakerId,
                        eventStatus: state.editData?.eventStatus,

                    },
                },
                onCompleted(data, cache) {
                    dispatch({
                        type: "setModal",
                        payload: {
                            modalUpdateFlag: false,
                            openFormModal: false,
                        },
                    });
                    ToastSuccess('Event Added')
                },
                refetchQueries: [{ query: GET_EVENTS }],
            });
            console.log(state.editData);
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

    let [DeleteEvents, { loading: DELETE_LOADING }] = useMutation(DELETE_SINGLE_EVENT);
    const ctaDeleteHandler = async ({ ...data }) => {
        try {
            await DeleteEvents({
                variables: {
                    where: {
                        id: data.id,
                    },
                },
                onCompleted(data) {
                    ToastSuccess('Event Deleted')
                },
                refetchQueries: [{ query: GET_EVENTS }],
            });
        } catch (error) {
            console.log(error.message);
        }
    };





    //Update staff

    let [UpdateEvents, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_EVENT);
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
            await UpdateEvents({
                variables: {
                    where: {
                        id: updatedIndex
                    },
                    data: {
                        eventName: {
                            set: state.editData?.eventName
                        },
                        eventDesc: {
                            set: state.editData?.eventDesc
                        },
                        eventImage: {
                            set: state.editData?.eventImage
                        },
                        eventDate: {
                            set: new Date()
                        },
                        speakerId: {
                            set: state.editData?.speakerId
                        },
                        eventStatus: {
                            set: state.editData?.eventStatus
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
                    ToastSuccess('Event Updated')
                },
                refetchQueries: [{ query: GET_EVENTS }],
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
