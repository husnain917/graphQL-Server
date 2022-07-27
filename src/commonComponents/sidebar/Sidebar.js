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
import { MENU_ITEMS } from '../../constants/Roles'
const drawerWidth = 240;
function Sidebar(props) {
  const [{
    open,
    ctaLogoutHandler,
    handleDrawer,
  }] = UseDrawer()

  const { width } = UseWindowDimensions();
  const { window } = props;
  const location = useLocation();
  const anchorRef = React.useRef(null);
  const { state } = React.useContext(AppContext)
  const [dropDownOpen, setDropDownOpen] = useState(0);
  const container = window !== undefined ? () => window().document.body : undefined;
  //List Item 

  console.log(location?.pathname)

  const renderSidebarItems = (items, index) => {
    return (
      <>
        <SidebarStyle.DomLink to={items.collapse === "true" ? location?.pathname : items.moduleUrl} key={index}>
          <ListItem
            key={index}
            ref={anchorRef}
            button
            onClick={width < 600 ? handleDrawer : null ||
              dropDownOpen === 0 ?
              items.collapse === "true" ?
                () => setDropDownOpen(items.module_id)
                : ''
              : dropDownOpen === items.module_id ?
                () => setDropDownOpen(0)
                : ""
                  || items.collapse === "true" ? () => setDropDownOpen(items.module_id) : ''}
            // Active={location?.pathname === items?.moduleUrl}
            // sx={location?.pathname === items?.moduleName ? { backgroundColor: '#E8F3FF', borderRadius: 2 } : null}

          >
            {
              MENU_ITEMS.map((val) => {
                if (val.text === items.moduleName) {
                  return (
                    <SidebarStyle.ListItemIconTag Active={location?.pathname === items?.moduleUrl} >
                      {val.icon}
                    </SidebarStyle.ListItemIconTag>
                  )
                }
              })
            }
            <SidebarStyle.ListItemTextTag primary={items?.moduleName} Active={location?.pathname === items?.moduleUrl}/>
            {
              items?.collapse === 'true' ?
                dropDownOpen === items.module_id ?
                  <SidebarStyle.ListItemIconTag Active><KeyboardArrowDownIcon /></SidebarStyle.ListItemIconTag>
                  :
                  <SidebarStyle.ListItemIconTag ><KeyboardArrowRightIcon /></SidebarStyle.ListItemIconTag>
                : null
            }
          </ListItem>
        </SidebarStyle.DomLink>
        {
          items.pages.map((item) => {
            return (
              <>
                {
                  items.module_id === dropDownOpen && items.collapse === "true" ?
                    <SidebarStyle.ListItemsContainerForSettings>
                      {
                        // dropDownItems.map((item) => {
                        //   return (
                        <SidebarStyle.DomLink to={item?.pageURL} key={index}>
                          <ListItem
                            ref={anchorRef}
                            onClick={width < 600 ? handleDrawer : null}
                            button
                            // Active={location?.pathname === item?.pageURL}
                            // sx={location?.pathname === item?.pageURL ? { borderRight: 3, borderColor: '#5003b7', borderRightWidth: 2 } : null}
                          >
                            {
                              MENU_ITEMS.map((val) => {
                                if (val.text === item.pageName) {
                                  return (
                                    <SidebarStyle.ListItemIconTag Active={location?.pathname === item?.pageURL} >
                                      {val.icon}
                                    </SidebarStyle.ListItemIconTag>
                                  )
                                }
                              })
                            }
                            <SidebarStyle.ListItemTextTagForDropDown primary={item?.pageName} Active={location?.pathname === item?.pageURL} />
                          </ListItem>
                        </SidebarStyle.DomLink>
                        //   )
                        // })
                      }
                    </SidebarStyle.ListItemsContainerForSettings >
                    : null
                }
                {/* <SidebarStyle.DomLink
                  to={
                    item?.pageURL === '/settings' ?
                      location?.pathname
                      : item?.pageURL
                  }
                  key={index}>
                  <SidebarStyle.ListItem
                    key={index}
                    ref={anchorRef}
                    button
                    onClick={
                      width < 600 ?
                        handleDrawer
                        :
                        null && item?.pageURL !== '/settings' ?
                          handleDrawer
                          :
                          item?.pageURL === '/settings' ?
                            () => setDropDownOpen(!dropDownOpen)
                            :
                            null
                    }
                    Active={location?.pathname === item?.pageURL}
                  // sx={location?.pathname === item?.path ? { backgroundColor: '#E8F3FF' , borderRadius: 2 } : null}

                  >
                    {
                      MENU_ITEMS.map((items) => {
                        if (items.text === item.pageName) {
                          return (
                            <SidebarStyle.ListItemIconTag Active={location?.pathname === item?.pageURL} >
                              {items.icon}
                            </SidebarStyle.ListItemIconTag>
                          )
                        }
                      })
                    }

                    <SidebarStyle.ListItemTextTag Active={location?.pathname === items?.URL} primary={items?.moduleName} />
                    {
                      item?.pageURL === '/settings' ?
                        dropDownOpen ?
                          <SidebarStyle.ListItemIconTag><KeyboardArrowDownIcon /></SidebarStyle.ListItemIconTag>
                          :
                          <SidebarStyle.ListItemIconTag ><KeyboardArrowRightIcon /></SidebarStyle.ListItemIconTag>
                        : null
                    }
                  </SidebarStyle.ListItem>
                </SidebarStyle.DomLink> */}



                {/* {
                  dropDownOpen && item?.pageURL === '/settings' ?
                    <SidebarStyle.ListItemsContainerForSettings>
                      {
                        dropDownItems.map((item) => {
                          return (
                            <SidebarStyle.DomLink to={item?.pageURL} key={index}>
                              <ListItem
                                ref={anchorRef}
                                onClick={width < 600 ? handleDrawer : null}
                                button
                                Active={location?.pathname === item?.pageURL}
                                sx={location?.pathname === item?.pageURL ? { borderRight: 3, borderColor: '#5003b7', borderRightWidth: 2 } : null}
                              >
                                <SidebarStyle.ListItemIconTag >{item?.icon}</SidebarStyle.ListItemIconTag>
                                <SidebarStyle.ListItemTextTagForDropDown primary={item?.pageName} />
                              </ListItem>
                            </SidebarStyle.DomLink>
                          )
                        })
                      }
                    </SidebarStyle.ListItemsContainerForSettings >
                    : null
                } */}
              </>
            )
          })
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
            state?.tabsPersmission.map((items, index) => {
              return renderSidebarItems(items, index)

            })
          }
          {/* {
            SideBarListItems.map((item) => {
              return item.navigationResults.map((items, i) => {
                console.log(items.module_id)
                return (
                  <>
                    <p onClick={items.collapse === "true" ? () => setDropDownOpen(items.module_id) : ''}>
                      {items.moduleName}
                    </p>
                    {
                      items.module_id === dropDownOpen ?
                        items.pages.map((val) => {
                          return (
                            <>
                              {
                                items.module_id === val.page_id ?
                                  <p>{val.pageName}</p>
                                  :
                                  ''
                              }
                            </>
                          )
                        })
                        :
                        ''
                    }
                  </>


                )


              })

            })
          } */}
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
        <SidebarStyle.ButtonContainer>
        <Link to='/login' className='link'><SidebarStyle.LogoutLink onClick={ctaLogoutHandler}>Logout</SidebarStyle.LogoutLink></Link>
        </SidebarStyle.ButtonContainer>
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
          <SidebarStyle.ButtonContainer>
          <Link to='/login' className='link'> <SidebarStyle.LogoutLink onClick={ctaLogoutHandler}>Logout</SidebarStyle.LogoutLink></Link>
          </SidebarStyle.ButtonContainer>
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





//



// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import MenuIcon from '@mui/icons-material/Menu';
// import ListItem from '@mui/material/ListItem';
// import { UseDrawer } from './UseSidebar';
// import { SidebarStyle } from './SidebarStyle';
// import logo from '../../assets/logo.png'
// import { Divider, Grid } from '@mui/material';
// import { Outlet, useLocation } from 'react-router-dom';
// import CommonProfileDropDown from '../commonProfileDropdown/CommonProfileDropDown';
// import { AppContext } from '../../State';
// import UseWindowDimensions from '../../customHooks/UseWindowDimensions';
// import { Hidden } from '@mui/material';

// const drawerWidth = 240;
// function Sidebar(props) {
//   const [{
//     open,
//     ctaLogoutHandler,
//     handleDrawer
//   }] = UseDrawer()

//   const { width } = UseWindowDimensions();
//   const { window } = props;
//   const location = useLocation();
//   const anchorRef = React.useRef(null);
//   const { state } = React.useContext(AppContext)
//   const container = window !== undefined ? () => window().document.body : undefined;
//   //List Item
//   const renderSidebarItems = (items, index) => {
//     return (
//       <>
//         {
//           items?.pages.map((item) => {
//             return (
//               <SidebarStyle.DomLink to={item?.path} key={index}>
//                 <ListItem
//                   key={index}
//                   ref={anchorRef}
//                   button
//                   onClick={width < 600 ? handleDrawer : null}
//                   sx={location?.pathname === item?.pageURL ? { borderRight: 3, borderColor: '#5003b7', borderRightWidth: 2 } : null}

//                 >
//                   <SidebarStyle.ListItemIconTag >{item?.icon}</SidebarStyle.ListItemIconTag>
//                   <SidebarStyle.ListItemTextTag primary={item?.pageName} />
//                 </ListItem>
//               </SidebarStyle.DomLink>
//             )
//           })
//         }
//         <Divider />
//       </>
//     );
//   };
//   //Sidebar Items
//   const drawer = (
//     <div>
//       <List>
//         <>
//           {
//             state.tabsPersmission.map((items, index) => {
//               return renderSidebarItems(items, index)
//             })
//           }
//         </>

//       </List>
//     </div>
//   );
//   return (
//     <SidebarStyle.Box >
//       <CssBaseline />
//       <SidebarStyle.AppBar position="fixed" open={open}>
//         <Toolbar>
//           <SidebarStyle.IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawer}
//             edge="start"
//           >
//             <MenuIcon />
//           </SidebarStyle.IconButton>
//           <Grid container>
//             <Grid item xl={2} lg={2} md={2} sm={4} xs={8}>
//               <SidebarStyle.TypoTraining variant='h6' noWrap component='div'>
//                 Training Portal
//               </SidebarStyle.TypoTraining>
//             </Grid>
//             <Grid item xl={10} lg={10} md={9} sm={0} xs={0}>
//               <CommonProfileDropDown />
//             </Grid>

//           </Grid>
//         </Toolbar>
//       </SidebarStyle.AppBar>

//       <SidebarStyle.WebDrawer variant="permanent" container={container} open={open}>
//         <SidebarStyle.DrawerHeader>
//           <SidebarStyle.Image src={logo} />
//         </SidebarStyle.DrawerHeader>
//         <Divider />
//         {drawer}
//         <SidebarStyle.LogoutLink to='/login' onClick={ctaLogoutHandler}>Logout</SidebarStyle.LogoutLink>
//       </SidebarStyle.WebDrawer>

//       <Hidden smUp>
//         <SidebarStyle.MobileDrawer
//           drawerWidth={drawerWidth}
//           container={container}
//           variant="temporary"
//           open={open}
//           onClose={handleDrawer}
//           ModalProps={{
//             keepMounted: true,
//           }}
//         >
//           <Toolbar />
//           {drawer}
//           <SidebarStyle.LogoutLink to='/login' onClick={ctaLogoutHandler}>Logout</SidebarStyle.LogoutLink>
//         </SidebarStyle.MobileDrawer>
//       </Hidden>

//       <SidebarStyle.MainBox component="main" >
//         <Toolbar />
//         {/* {props.children} */}
//         <Outlet />
//       </SidebarStyle.MainBox>
//     </SidebarStyle.Box>
//   );
// }
// Sidebar.propTypes = {
//   window: PropTypes.func,
// };
// export default Sidebar;