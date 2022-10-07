import CodeIcon from '@mui/icons-material/Code';
import { IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './style.sass';
import { useState } from 'react';
import Register from 'features/Auth/Register';
import { AddBox, Close } from '@mui/icons-material';
import Login from 'features/Auth/Login';

const MODE = {
    'LOGIN': 'login',
    'REGISTER': 'register'
}

export default function Header() {
    const [open, setOpen] = useState(false);

    const [mode, setMode] = useState(MODE.REGISTER);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== "backdropClick" && reason !== 'escapeKeyDown') {
            setOpen(false);
        }
    };

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

                    <Button color="inherit" onClick={handleClickOpen}>Register</Button>
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