import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import { UseDrawer } from './UseSidebar';
import { SidebarStyle } from './SidebarStyle';
import logo from '../../assets/logo.png'
import { Divider, Grid } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import CommonProfileDropDown from '../commonProfileDropdown/CommonProfileDropDown';
import { AppContext } from '../../State';
import UseWindowDimensions from '../../customHooks/UseWindowDimensions';
import { Hidden } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom"
const drawerWidth = 240;
function Sidebar(props) {
  const [{
    SideBarListItems,
    open,
    ctaLogoutHandler,
    handleDrawer,
    dropDownItems
  }] = UseDrawer()

  const { width } = UseWindowDimensions();
  const { window } = props;
  const location = useLocation();
  const anchorRef = React.useRef(null);
  const { state } = React.useContext(AppContext)
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;
  //List Item 
  const renderSidebarItems = (item, index) => {
    return (
      <>
        <SidebarStyle.DomLink to={item?.path === '/settings' ? location?.pathname : item?.path} key={index}>
          <SidebarStyle.ListItem
            key={index}
            ref={anchorRef}
            button
            onClick={width < 600 ? handleDrawer : null && item?.path !== '/settings' ? handleDrawer : item?.path === '/settings' ? () => setDropDownOpen(!dropDownOpen) : null}
            Active={location?.pathname === item?.path}
          // sx={location?.pathname === item?.path ? { backgroundColor: '#E8F3FF' , borderRadius: 2 } : null}

          >
            <SidebarStyle.ListItemIconTag Active={location?.pathname === item?.path} >{item?.icon}</SidebarStyle.ListItemIconTag>
            <SidebarStyle.ListItemTextTag Active={location?.pathname === item?.path} primary={item?.text} />
            {
              item?.path === '/settings' ?
                dropDownOpen ?
                  <SidebarStyle.ListItemIconTag><KeyboardArrowDownIcon /></SidebarStyle.ListItemIconTag>
                  :
                  <SidebarStyle.ListItemIconTag ><KeyboardArrowRightIcon /></SidebarStyle.ListItemIconTag>
                : null
            }
          </SidebarStyle.ListItem>
        </SidebarStyle.DomLink>

        {
          dropDownOpen && item?.path == '/settings' ?
            <SidebarStyle.ListItemsContainerForSettings>
              {
                dropDownItems.map((item) => {
                  return (
                    <SidebarStyle.DomLink to={item?.path} key={index}>
                      <ListItem
                        ref={anchorRef}
                        onClick={width < 600 ? handleDrawer : null}
                        button
                        sx={location?.pathname === item?.path ? { borderRight: 3, borderColor: '#5003b7', borderRightWidth: 2 } : null}
                      >
                        <SidebarStyle.ListItemIconTag >{item?.icon}</SidebarStyle.ListItemIconTag>
                        <SidebarStyle.ListItemTextTagForDropDown primary={item?.text} />
                      </ListItem>
                    </SidebarStyle.DomLink>
                  )
                })
              }
            </SidebarStyle.ListItemsContainerForSettings >
            : null
        }

      </>
    );
  };
  //Sidebar Items
  const drawer = (
    <div>
      <List>
        <>
          {
            SideBarListItems.map((item, index) => {
              return renderSidebarItems(item, index)
            })
          }
        </>

      </List>
    </div>
  );
  return (
    <SidebarStyle.Box >
      <CssBaseline />
      <SidebarStyle.AppBar elevation={0} position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <SidebarStyle.IconButton
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
          >
            <MenuIcon />
          </SidebarStyle.IconButton>

          <CommonProfileDropDown />
        </Toolbar>
      </SidebarStyle.AppBar>

      <SidebarStyle.WebDrawer sx={{ '& .MuiDrawer-paper': { border: 'none' } }} variant="permanent" container={container} open={open}>
        <SidebarStyle.DrawerHeader>
          <SidebarStyle.Image src={logo} />
        </SidebarStyle.DrawerHeader>
        <Divider />
        {drawer}
        <Link to='/login' className='link'><SidebarStyle.LogoutLink onClick={ctaLogoutHandler}>Logout</SidebarStyle.LogoutLink></Link>
      </SidebarStyle.WebDrawer>

      <Hidden mdUp>
        <SidebarStyle.MobileDrawer
          drawerWidth={drawerWidth}
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Toolbar />
          {drawer}
          <Link to='/login' className='link'> <SidebarStyle.LogoutLink onClick={ctaLogoutHandler}>Logout</SidebarStyle.LogoutLink></Link>
        </SidebarStyle.MobileDrawer>
      </Hidden>

      <SidebarStyle.Main component="main" open={open} >
        <SidebarStyle.DrawerHeader />
        {/* {props.children} */}
        <Outlet />
      </SidebarStyle.Main>
    </SidebarStyle.Box>
  );
}
Sidebar.propTypes = {
  window: PropTypes.func,
};
export default Sidebar;
