import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { UseDrawer } from './UseSidebar';
import { SidebarStyle } from './SidebarStyle';
import logo from '../../assets/logo.png'
import { Divider } from '@mui/material';

const drawerWidth = 240;
function Sidebar(props) {
    const [{
        menuItems,
        open,
        handleDrawer
    }] = UseDrawer()
    const { window } = props;
    const anchorRef = React.useRef(null)
    const container = window !== undefined ? () => window().document.body : undefined;
    //List Item 
    const renderSidebarItems = (item, index) => {
        return (
            <>
                <ListItem
                    key={index}
                    ref={anchorRef}
                    button
                >
                    <ListItemIcon >{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItem>
            </>
        );
    };
    //Sidebar Items
    const drawer = (
        <div>
            <List>
                {menuItems.map((item, index) => renderSidebarItems(item, index))}
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
                    <Typography variant="h6" noWrap component="div">
                        Training Portal
                    </Typography>
                </Toolbar>
            </SidebarStyle.AppBar>

            <SidebarStyle.WebDrawer variant="permanent" open={open}>
                <SidebarStyle.DrawerHeader>
                    <SidebarStyle.Image src={logo} />
                </SidebarStyle.DrawerHeader>
                <Divider />
                {drawer}
            </SidebarStyle.WebDrawer>
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
            </SidebarStyle.MobileDrawer>

            <SidebarStyle.MainBox component="main" >
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
            </SidebarStyle.MainBox>
        </SidebarStyle.Box>
    );
}
Sidebar.propTypes = {
    window: PropTypes.func,
};
export default Sidebar;
