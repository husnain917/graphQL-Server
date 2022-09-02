import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../State';
export const UseDrawer = () => {
    const [open, setOpen] = React.useState(true);
    const { state, dispatch } = useContext(AppContext);
    const navigate = useNavigate()
    const handleDrawer = () => {
        setOpen(!open);
    };
    const ctaLogoutHandler = async () => {
        await localStorage.clear()
        dispatch({
            type: "setAuthState",
            payload: {
                user: null,
                authState: false
            }
        })
        dispatch({
            type: "ORGlogin",
            payload: false
        })
        navigate('/login')
    }



    return [{

        open,
        handleDrawer,
        ctaLogoutHandler,
    }]
}
