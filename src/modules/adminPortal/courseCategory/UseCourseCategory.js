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
    ADD_COURSE_CATEGORY,
    // DELETE_COURSE_BATCH,
    UPDATE_COURSE_BATCH,
    UPDATE_SINGLE_COURSE_CATEGORY
} from "../../../lib/mutation/AllMutations";
import { GET_COURSE_BATCH, GET_COURSE_CATEGORY } from "../../../lib/queries/AllQueries";
import { AppContext } from "../../../State";







export default function UseCourseCategory() {
    const [{ COURSE_DATA }] = FiltredData()
    const formInputs = [
        {
            label: "Category Name",
            name: "categoryName",
            type: "text",
        },
        {
            label: "Image Url",
            name: "imageUrl",
            type: "text",
        },
    ]
    const { state, dispatch } = useContext(AppContext);






    //GET STAFF 

    let { data, loading: GET_LOADING, error } = useQuery(GET_COURSE_CATEGORY);
    const refacteredData = [];
    data?.categories?.map((item) => {
        refacteredData.push({
            id: item.id,
            categoryName: item.categoryName,
            imageUrl: item.imageUrl,
            createdAt: item.createdAt,
            updateAt: item.updateAt,
        });
    });


    //ADD STAFF

    let [CreateCategory, { loading: ADD_LOADING }] = useMutation(ADD_COURSE_CATEGORY);

    const ctaFormHandler = async (event) => {
        event.preventDefault();
        if (!state.editData?.categoryName) {
            ToastWarning('categoryName required')
        }
        else {
            try {
                await CreateCategory({
                    variables: {
                        data: {
                            categoryName: state?.editData.categoryName,
                            imageUrl: state?.editData.imageUrl
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
                        ToastSuccess('Category Added')

                    },
                    refetchQueries: [{ query: GET_COURSE_CATEGORY }],
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

    // let [DeleteCourseBatches, { loading: DELETE_LOADING }] = useMutation(DELETE_COURSE_BATCH);
    // const ctaDeleteHandler = async ({ ...data }) => {
    //     try {
    //         await DeleteCourseBatches({
    //             variables: {
    //                 where: {
    //                     id: data.id,
    //                 },
    //             },
    //             onCompleted(data) {
    //                 ToastSuccess('Course Deleted')
    //             },
    //             refetchQueries: [{ query: GET_COURSE_BATCH }],
    //         });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };





    //Update staff

    let [UpdateCategory, { loading: UPDATE_LOADING }] = useMutation(UPDATE_SINGLE_COURSE_CATEGORY);

    const ctaUpdateHandler = async (event) => {
        event.preventDefault()
        if (!state.editData?.name) {
            ToastWarning('name required')
        }
        else if (!state.editData?.coursesId) {
            ToastWarning('Course Id required')
        }
        else if (!state.editData?.courseName) {
            ToastWarning('Course Name required')
        }
        else {
            try {
                await UpdateCategory({
                    variables: {

                        data: {
                            categoryName: {
                                set: state?.editData.categoryName
                            },
                            imageUrl: {
                                set: state?.editData.imageUrl
                            }
                        },
                        where: {
                            id: state?.editId
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
