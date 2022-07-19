import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../State';
import { MENU_ITEMS } from '../../constants/Roles';
import WebhookIcon from '@mui/icons-material/Webhook';
import GroupIcon from '@mui/icons-material/Group';
import StorageIcon from '@mui/icons-material/Storage';
export const UseDrawer = () => {
    const [open, setOpen] = React.useState(true);
    const { state, dispatch } = useContext(AppContext);
    const navigate = useNavigate()
    const handleDrawer = () => {
        setOpen(!open);
    };
    const ctaLogoutHandler = () => {
        dispatch({
            type: "setAuthState",
            payload: {
                user: null,
                authState: false
            }
        })
        localStorage.removeItem('token')
        navigate('/login')


    }
  

    return [{
        
        open,
        handleDrawer,
        ctaLogoutHandler,
    }]
}
