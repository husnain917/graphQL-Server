import React, { createContext, useReducer } from "react";

let AppContext = createContext('');

const initialState = {
    authState: false,
    user:{}
}

let reducer = (state, action) => {
    switch(action.type) {
        case "setAuthState": {
            return { ...state, authState: action.payload.authState,user:action.payload.user }
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
