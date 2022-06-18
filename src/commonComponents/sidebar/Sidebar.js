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
        <SidebarStyle.DomLink to={item?.path == '/settings' ? location?.pathname : item?.path} key={index}>
          <ListItem
            key={index}
            ref={anchorRef}
            button
            onClick={width < 600 && item?.path != '/settings' ? handleDrawer : item?.path == '/settings' ? () => setDropDownOpen(!dropDownOpen) : null}
            sx={location?.pathname === item?.path ? { borderRight: 3, borderColor: '#5003b7', borderRightWidth: 2 } : null}

          >
            <SidebarStyle.ListItemIconTag >{item?.icon}</SidebarStyle.ListItemIconTag>
            <SidebarStyle.ListItemTextTag primary={item?.text} />
            {
              item?.path == '/settings' ?
                dropDownOpen ?
                  <SidebarStyle.ListItemArrowIconTag><KeyboardArrowDownIcon /></SidebarStyle.ListItemArrowIconTag>
                  :
                  <SidebarStyle.ListItemArrowIconTag ><KeyboardArrowRightIcon /></SidebarStyle.ListItemArrowIconTag>
                : null
            }
          </ListItem>
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
        <Divider />
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
      <SidebarStyle.AppBar position="fixed" open={open}>
        <Toolbar>
          <SidebarStyle.IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
          >
            <MenuIcon />
          </SidebarStyle.IconButton>
          <Grid container>
            <Grid item xl={2} lg={2} md={2} sm={4} xs={8}>
              <SidebarStyle.TypoTraining variant='h6' noWrap component='div'>
                Training Portal
              </SidebarStyle.TypoTraining>
            </Grid>
            <Grid item xl={10} lg={10} md={9} sm={0} xs={0}>
              <CommonProfileDropDown />
            </Grid>

          </Grid>
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

      <Hidden smUp>
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

      <SidebarStyle.MainBox component="main" >
        <Toolbar />
        {/* {props.children} */}
        <Outlet />
      </SidebarStyle.MainBox>
    </SidebarStyle.Box>
  );
}
Sidebar.propTypes = {
  window: PropTypes.func,
};
export default Sidebar;
