import { AccountCircle, Close } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Login from 'features/Auth/Login';
import Register from 'features/Auth/Register';
import { logout } from 'features/Auth/userSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import './style.sass';

const MODE = {
    'LOGIN': 'login',
    'REGISTER': 'register'
}

export default function Header() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.user.current);
    const isUserLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== "backdropClick" && reason !== 'escapeKeyDown') {
            setOpen(false);
        }
    };

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleLogOutClick = () => {
        const action = logout();
        dispatch(action);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon sx={{ mr: 1 }}></CodeIcon>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TM DEV
                    </Typography>

                    <NavLink to="/" className="MenuItem">
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink to="/todos" className="MenuItem">
                        <Button color="inherit">Todo</Button>
                    </NavLink >
                    <NavLink to="/news" className="MenuItem">
                        <Button color="inherit">Post List</Button>
                    </NavLink >
                    <NavLink to="/tools" className="MenuItem">
                        <Button color="inherit">Tools</Button>
                    </NavLink>
                    {!isUserLoggedIn && (
                        <>
                            <Button color="inherit" onClick={handleClickOpen}>Login</Button>
                        </>
                    )}
                    {isUserLoggedIn && (
                        <>
                            <IconButton color="inherit" onClick={handleUserClick}>
                                <AccountCircle></AccountCircle>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                                <MenuItem onClick={handleLogOutClick}>Logout</MenuItem>
                            </Menu>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <IconButton sx={{ position: 'absolute', top: 10, right: 10 }} onClick={handleClose}>
                        <Close />
                    </IconButton>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />

                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>Already have an account. Login here</Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>Dont hav an account. Register Now</Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </Box >
    );
}