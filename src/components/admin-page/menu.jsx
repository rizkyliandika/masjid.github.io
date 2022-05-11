import { AppBar, Box, CssBaseline, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import React, { useEffect, useState } from 'react';
import { Table } from './table';

const drawerWidth = 240;

export const Menu = (props) => {
    const [title, setTitle] = useState('User');
    const [userData, setUserData] = useState({});


    useEffect(() => {
        setUserData(props.userData)
    }, [])

    const icon = (text) => {
        switch (text) {
            case 'User':
                return <PersonRoundedIcon />
                break;
            case 'Post':
                return <PostAddRoundedIcon />
                break;
            default:
                break;
        }
    }


    const handleClickMenu = (text) => {

    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position='fixed' sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }} variant="permanent"
                anchor="left">
                <List>
                    {['User', 'Post'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {icon(text)}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer><Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >

                {/* <Typography paragraph>
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
                </Typography> */}
                <Table data={userData} />
            </Box>
        </Box>
    )
}