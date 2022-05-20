import React, { createContext, useReducer } from "react";
import { EditorState } from "draft-js";

let AppContext = createContext('');

const initialState = {
    authState: true,
    user:{},
    draftHtml: EditorState.createEmpty(),
    openFormModal:false,
    modalUpdateFlag:false,
    editData:{},
    student:{},
    teacher:{},
    admins:{},
    successStory:{},
    events:{},
    courses:{}


}
let reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case "setAuthState": {
            return { ...state, authState: action.payload.authState,user:action.payload.user }
        }
        case "setModal": {
            return { ...state, modalUpdateFlag:action?.payload?.modalUpdateFlag || false, openFormModal: action?.payload?.openFormModal }
        }        
        case "setEditData": {
            return { ...state,editData:action.payload}
        } 
        case "setStudent":{
            return{...state,student:action.payload}
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
