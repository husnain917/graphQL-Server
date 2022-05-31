import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../State';
import { MENU_ITEMS } from '../../constants/Roles'
export const UseDrawer = () => {
    const [open, setOpen] = React.useState(false);
    const { state, dispatch } = useContext(AppContext);
    const navigate = useNavigate()
    const SideBarListItems = []
    var sideBarMenu = MENU_ITEMS.filter((item) => {
        if (item.role === state.user?.role) {
            return SideBarListItems.push(item)
        }
    });
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
        SideBarListItems,
        open,
        handleDrawer,
        ctaLogoutHandler
    }]
}
