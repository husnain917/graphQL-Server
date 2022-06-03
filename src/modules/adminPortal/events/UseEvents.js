import { useMutation, useQuery } from "@apollo/client";
import { useState, useContext } from "react";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_EVENTS,
    DELETE_SINGLE_EVENT,
    UPDATE_SINGLE_EVENT,
} from "../../../lib/mutation/AllMutations";
import { GET_EVENTS } from "../../../lib/queries/AllQueries";
import { AppContext } from "../../../State";







export function UseEvents() {
    const [date, setDate] = useState(new Date());

    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
    }
    const formInputs = [
        {
            label: "Name",
            name: "eventName",
            type: "text",
        },
        {
            label: "Description",
            name: "eventDesc",
            type: "text",
        },
        {
            label: "Speaker Id",
            name: "speakerId",
            type: "selectMember",
        },
        {
            label: "Status",
            name: "eventStatus",
            type: "select",
            dropDownContent: ["PAST", "UPCOMING"],
        },
        {
            label: "Event Date",
            name: "eventDate",
            type: "calender",
        },
        {
            label: "Image",
            name: "eventImage",
            type: "upload",
        },
    ]
    const { state, dispatch } = useContext(AppContext);



    var fileName;
    var File;
    const handleChange = (e) => {
        fileName = e.target.files
        console.log("sami", fileName);
        var filesArray = [].slice.call(fileName);
        filesArray.forEach(e => {
            console.log(e.name);
            File = e.name
            console.log(File);
            //   console.log(e.size);
            //   console.log(e.type);
            //   console.log(e.lastModifiedDate);
        });


    }

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

    let [CreateEvents, { loading: ADD_LOADING }] = useMutation(ADD_EVENTS);


    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!state.editData?.eventName) {
            ToastWarning('Event name required')
        }
        else if (!state.editData?.eventDesc) {
            ToastWarning('Event description  required')
        }
        // else if (!state.editData?.speakerId) {
        //     ToastWarning('Speaker Id required')
        // }
        else if (!state.editData?.eventStatus) {
            ToastWarning('Status required')
        }
        else {
            try {
                await CreateEvents({
                    variables: {

                        data: {
                            eventName: state.editData?.eventName,
                            eventDesc: state.editData?.eventDesc,
                            eventImage: File ? File : 'no file',
                            eventDate: date,
                            Speaker: {
                                connect: {
                                    id: ''
                                }
                            },
                            eventStatus: state.editData?.eventStatus
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

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!state.editData?.eventName) {
            ToastWarning('Event name required')
        }
        else if (!state.editData?.eventDesc) {
            ToastWarning('Event description  required')
        }
        else if (!state.editData?.speakerId) {
            ToastWarning('Speaker Id required')
        }
        else if (!state.editData?.eventStatus) {
            ToastWarning('Status required')
        }
        else {
            try {
                await UpdateEvents({
                    variables: {
                        where: {
                            id: state.editId
                        },
                        // data: {
                        //     eventName: {
                        //         set: state.editData?.eventName
                        //     },
                        //     eventDesc: {
                        //         set: state.editData?.eventDesc
                        //     },
                        //     eventImage: {
                        //         set: File ? File : 'no file'
                        //     },
                        //     eventDate: {
                        //         set: new Date()
                        //     },
                        //     eventStatus: {
                        //         set: state.editData?.eventStatus
                        //     }
                        // }

                        data: {
                            eventName: {
                                set: null
                            },
                            eventDesc: {
                                set: null
                            },
                            eventImage: {
                                set: null
                            },
                            eventDate: {
                                set: null
                            },
                            Speaker: {
                                update: {
                                    speakerName: {
                                        set: null
                                    },
                                    spkearDesc: {
                                        set: null
                                    }
                                }
                            },
                            eventStatus: {
                                set: null
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
            onDateChange,
            formInputs,
            handleChange,
            date
        },
    ];
}
