import React, { createContext, useReducer } from "react";
import { EditorState } from "draft-js";
import { logDOM } from "@testing-library/react";

let AppContext = createContext('');

const initialState = {
    authState: false,
    id: {},
    user: {},
    editId: '',
    draftHtml: EditorState.createEmpty(),
    openFormModal: false,
    modalUpdateFlag: false,
    editData: {},
}
let reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "setAuthState": {
            console.log("action", action.payload);
            return { ...state, authState: action.payload.authState, user: action.payload.user }
        }
        case "setModal": {
            return { ...state, modalUpdateFlag: action?.payload?.modalUpdateFlag || false, openFormModal: action?.payload?.openFormModal, editData: {} }
        }
        case "setEditData": {
            return { ...state, editData: action.payload }
        }
        case "setEditId": {
            return { ...state, editId: action.payload, }
        }
    }
    return state;
};

function AppContextProvider(props) {
    const fullInitialState = {
        ...initialState,
    }

    let [state, dispatch] = useReducer(reducer, fullInitialState);
    let value = { state, dispatch };


    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
