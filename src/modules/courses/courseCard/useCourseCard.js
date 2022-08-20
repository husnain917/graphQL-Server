import React from 'react'
import { UseCourses } from '../useCourses';
import { AppContext } from '../../../State';

export default function useCourseCard() {
    const [{ formInputs }] = UseCourses()
    const { state, dispatch } = React.useContext(AppContext);
    const ctaEditButtonHandler = (data) => {
        console.log("id in course card editButtonHandler", data.id);
        const test = state.editData;
        dispatch({
            type: "setEditId",
            payload: data.id,
        });
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
    }
    return (
        { ctaEditButtonHandler }
    )
}
