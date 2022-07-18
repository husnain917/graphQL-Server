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
    const SideBarListItems = [
        {
            "userName": "techloset",
            "userGroupRole": "",
            "navigationResults": [
              {
                "moduleName": "Dashboard",
                "module_id": "1",
                "AddToJson": false,
                "pages": [
                  {
                    "pageName": "Dashboard",
                    "pageID": "1",
                    "pageURL": "/",
                    "page_id": "1",
                    "AddPermission": false,
                    "DelPermission": false,
                    "EditPermission": false,
                    "ViewPermission": false,
                    "FullAccess": false
                  },
                  {
                    "pageName": "Dashboard",
                    "pageID": "1",
                    "pageURL": "/",
                    "page_id": "1",
                    "AddPermission": false,
                    "DelPermission": false,
                    "EditPermission": false,
                    "ViewPermission": false,
                    "FullAccess": false
                  }
                ]
              },
              {
                "moduleName": "staff",
                "module_id": "1",
                "AddToJson": false,
                "pages": [
                  {
                    "pageName": "staff",
                    "pageID": "1",
                    "pageURL": "/",
                    "page_id": "1",
                    "AddPermission": false,
                    "DelPermission": false,
                    "EditPermission": false,
                    "ViewPermission": false,
                    "FullAccess": false
                  },
                  {
                    "pageName": "staff",
                    "pageID": "1",
                    "pageURL": "/",
                    "page_id": "1",
                    "AddPermission": false,
                    "DelPermission": false,
                    "EditPermission": false,
                    "ViewPermission": false,
                    "FullAccess": false
                  }
                ]
              },
            ]
            }
    ]
   
    
    // var sideBarMenu = state?.tabsPersmission.map((item) => {
        //  MENU_ITEMS.filter((item) => {
        // if (item.role === state.user?.role)
        // if (item.role === state.user?.organizationLogin?.role) 

        // {
        //     return SideBarListItems.push(item)
        // }

        // console.log("sami item", item.pages.map((items) => {
        //     return items.pageName
        // }));
        // return SideBarListItems.push(item.pages.map((items) => {
        //     return items
        // }))
    // });
    // console.log(SideBarListItems);
    // console.log(state.user?.organizationLogin?.userGroup);
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
    const dropDownItems = [
        // {
        //     pageName: 'Tabs Permission',
        //     icon: <StorageIcon />,
        //     pageURL: '/tabs-permission',
        // },
        // {
        //     pageName: 'API Permissions',
        //     icon: <WebhookIcon />,
        //     pageURL: '/api-permissions',
        // },
        {
            pageName: 'User Groups',
            icon: <GroupIcon />,
            pageURL: '/user-groups',
        },
    ]

    return [{
        SideBarListItems,
        open,
        handleDrawer,
        ctaLogoutHandler,
        dropDownItems
    }]
}
