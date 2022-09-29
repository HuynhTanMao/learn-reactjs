import CodeIcon from '@mui/icons-material/Code';
import { Typography } from '@mui/material';
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


export default function Header() {
    const [open, setOpen] = useState(false);

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
                    <DialogContentText>
                        <Register />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}