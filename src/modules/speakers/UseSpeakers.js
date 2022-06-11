import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    ToastError,
    ToastSuccess,
    ToastWarning,
} from "../../commonComponents/commonFunction/CommonFunction";
import {
    ADD_SPEAKERS,
    // DELETE_SPEAKER,
    UPDATE_SPEAKER
} from "../../lib/mutation/AllMutations";
import { GET_SPEAKERS } from "../../lib/queries/AllQueries";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { AppContext } from "../../State";







export default function UseSpeakers() {

    const formInputs = [
        {
            label: "Speaker Name",
            name: "speakerName",
            type: "text",
        },
        {
            label: "Speaker Desc",
            name: "spkearDesc",
            type: "text",
        },
        {
            label: "Speaker Image",
            name: "spekaerImage",
            type: "upload",
        },

    ]
    const { state, dispatch } = useContext(AppContext);






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_SPEAKERS);
    console.log("error", error);
    const refacteredData = [];
    data?.speakers?.map((item) => {
        refacteredData.push({
            id: item.id,
            speakerName: item.speakerName,
            spkearDesc: item.spkearDesc,
            spekaerImage: item.spekaerImage,
            createdAt: item.createdAt,
            updateAt: item.updateAt,
        });
    });
    console.log("refacteredData", refacteredData);

    const [loader, setLoader] = useState(false);

    //ADD STAFF

    let [CreateSpeaker, { loading: ADD_LOADING }] = useMutation(ADD_SPEAKERS);

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!state.editData?.speakerName) {
            ToastWarning('speakerName required')
        }
        else if (!state.editData?.spkearDesc) {
            ToastWarning('spkearDesc required')
        }
        else if (!state.editData?.spekaerImage) {
            ToastWarning('spekaerImage required')
        }
        else {
            try {
                await CreateSpeaker({
                    variables: {
                        data: {
                            speakerName: state.editData?.speakerName,
                            spkearDesc: state.editData?.spkearDesc,
                            spekaerImage: state?.imageUrl
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
                        ToastSuccess('Speaker Added')

                    },
                    refetchQueries: [{ query: GET_SPEAKERS }],
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

    // let [DeleteSpeaker, { loading: DELETE_LOADING }] = useMutation(DELETE_SPEAKER);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteSpeaker({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Speaker Deleted')
    //             },
    //             refetchQueries: [{ query: GET_SPEAKERS }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [UpdateSpeaker, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SPEAKER);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!state.editData?.speakerName) {
            ToastWarning('Speaker Name required')
        }
        else if (!state.editData?.spkearDesc) {
            ToastWarning('Speaker Desc required')
        }
        else if (!state.editData?.spekaerImage) {
            ToastWarning('Image required')
        }
        else {
            try {
                await UpdateSpeaker({
                    variables: {
                        where: {
                            id: state.editId
                        },
                        data: {
                            speakerName: {
                                set: state.editData?.speakerName,
                            },
                            spkearDesc: {
                                set: state.editData?.spkearDesc,
                            },
                            spekaerImage: {
                                set: state.editData?.spekaerImage
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
                        ToastSuccess('Speaker Updated')
                    },
                    refetchQueries: [{ query: GET_SPEAKERS }],
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
