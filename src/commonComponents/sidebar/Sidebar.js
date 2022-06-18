import * as React from 'react';
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

const drawerWidth = 276;
function Sidebar(props) {
  const [{
    SideBarListItems,
    open,
    ctaLogoutHandler,
    handleDrawer
  }] = UseDrawer()

  const { width } = UseWindowDimensions();
  const { window } = props;
  const location = useLocation();
  const anchorRef = React.useRef(null);
  const { state } = React.useContext(AppContext)
  const container = window !== undefined ? () => window().document.body : undefined;
  //List Item 
  const renderSidebarItems = (item, index) => {
    return (
      <>
        <SidebarStyle.DomLink to={item?.path} key={index}>
          <ListItem
            key={index}
            ref={anchorRef}
            button
            onClick={width < 600 ? handleDrawer : null}
            sx={location?.pathname === item?.path ? { backgroundColor: '#E8F3FF' , borderRadius: 2 } : null}

          >
            <SidebarStyle.ListItemIconTag Active={location?.pathname === item?.path} >{item?.icon}</SidebarStyle.ListItemIconTag>
            <SidebarStyle.ListItemTextTag Active={location?.pathname === item?.path} primary={item?.text} />
          </ListItem>
        </SidebarStyle.DomLink>
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
        <Toolbar sx={{justifyContent: 'space-between'}}>
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

      <SidebarStyle.WebDrawer variant="permanent" container={container} open={open}>
        <SidebarStyle.DrawerHeader>
          <SidebarStyle.Image src={logo} />
        </SidebarStyle.DrawerHeader>
        <Divider />
        {drawer}
        <SidebarStyle.LogoutLink to='/login' onClick={ctaLogoutHandler}>Logout</SidebarStyle.LogoutLink>
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
          <SidebarStyle.LogoutLink to='/login' onClick={ctaLogoutHandler}>Logout</SidebarStyle.LogoutLink>
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
