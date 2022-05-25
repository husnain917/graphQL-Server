import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { colors } from '../../constants/Color';
import { Link } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(0)} + 1px)`,
  },
})
export const SidebarStyle = {
  //Main Body
  Box: styled(Box)(() => ({
    display: 'flex'
  })),
  //Appbar 
  AppBar: styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    backgroundColor: colors.lightBlue,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('sm')]: {
      ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    },
  })),
  //Web Drawer
  WebDrawer: styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),

  ),
  //Mobile Drawer
  MobileDrawer: styled(MuiDrawer)(({ theme, drawerWidth }) => ({
    height: '100%',
    minHeight: '100vh',
    [theme.breakpoints.up('xs')]: {
      display: 'block'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
  })),
  //IconButton 
  IconButton: styled(IconButton)(({ theme }) => ({
    marginRight: 30,
  })),
  //Drawer + Image Wrapper
  DrawerHeader: styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  })),
  //Image
  Image: styled('img')(({ theme }) => ({
    height: 50,
    width: 180,
    marginTop: 4
  })),
  //Childrens Render
  MainBox: styled(Box)(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: colors.black + 10,
    minHeight: '100vh',
    height: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
    },
  })),
  // ===================== Sidebar Links =====================

  DomLink: styled(Link)(() => ({
    display: 'flex',
    textDecoration: 'none'
  })),
  ListItemIconTag: styled(ListItemIcon)(() => ({
    color: '#145DA0'
  })),
  ListItemTextTag: styled(ListItemText)(() => ({
    color: colors.black + 90,
    marginLeft: -2
  })),

  TypoTraining: styled(Typography)(() => ({
    marginTop: '12px ',
    "@media (max-width:900px)": {
      marginTop: '0px',
      float: 'left'
    }
  })),
  LogoutLink: styled(Link)(() => ({
    textDecoration: 'none',
    color: colors.lightBlue,
    marginTop: '-7.8px',
    padding: '10px',
    border: '1px solid ' + colors.lightBlue,
    textAlign: 'center',
    transition: '0.5s',
    '&:hover': {
      backgroundColor: colors.lightBlue,
      color: "white"
    }
  }))


};
