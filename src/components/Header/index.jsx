import { AccountCircle, Close, Logout, Settings, ShoppingCart } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { Badge, Divider, IconButton, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/system';
import Login from 'features/Auth/Login';
import Register from 'features/Auth/Register';
import { logout } from 'features/Auth/userSlice';
import { hideMiniCart } from 'features/Cart/cartSlice';
import { cartItemsCountSelector } from 'features/Cart/selectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from "react-router-dom";
import './style.sass';

const MODE = {
    'LOGIN': 'login',
    'REGISTER': 'register'
}

export default function Header() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.user.current);
    const cartItemCount = useSelector(cartItemsCountSelector);
    const showMiniCart = useSelector(state => state.cart.showMiniCart);

    const navigate = useNavigate();

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

    const handleCartClick = (e) => {
        navigate('cart');
    }

    const handleCloseCartNotification = (e) => {
        dispatch(hideMiniCart());
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
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
                        <NavLink to="/products" className="MenuItem">
                            <Button color="inherit">Products</Button>
                        </NavLink >
                        <NavLink to="/tools" className="MenuItem">
                            <Button color="inherit">Tools</Button>
                        </NavLink>
                        {!isUserLoggedIn && (
                            <>
                                <Button color="inherit" onClick={handleClickOpen}>Login</Button>
                            </>
                        )}

                        <Box className='CartItem' component="div" sx={{
                            position: 'relative',
                            ".CartNotification": {
                                position: 'absolute',
                                bottom: '-15px',
                                right: '0px',
                                padding: '16px',
                                transform: 'translateY(100%)',
                                backgroundColor: 'rgb(255, 255, 255)',
                                borderRadius: '6px',
                                boxShadow: 'rgb(179 179 179) 1px 1px 15px',
                                "&:before": {
                                    content: "''",
                                    position: 'absolute',
                                    bottom: '100%',
                                    right: '15px',
                                    borderWidth: '8px',
                                    borderStyle: 'solid',
                                    borderColor: 'transparent transparent rgb(255, 255, 255)',
                                    borderImage: 'initial'
                                }
                            },
                            ".btn-close": {
                                cursor: 'pointer',
                                position: 'absolute',
                                top: '6px',
                                right: '6px',
                                padding: '4px',
                                color: 'rgb(155, 155, 155)',
                                fontSize: '11px',
                            },
                            ".status": {
                                display: 'flex',
                                webkitBoxAlign: 'center',
                                alignItems: 'center',
                                margin: '0px',
                                color: 'rgb(51, 51, 51)',
                                fontSize: '13px',
                                whiteSpace: 'nowrap',
                                'svg': {
                                    marginRight: '4px',
                                    color: 'rgb(76, 175, 80)',
                                    fontSize: '19px'
                                }
                            },
                            ".btn-view-cart": {
                                display: 'block',
                                marginTop: '16px',
                                padding: '10px 0px',
                                width: '240px',
                                color: 'rgb(255, 255, 255)',
                                fontSize: '14px',
                                fontWeight: '400',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                                backgroundColor: 'rgb(255, 57, 69)',
                                borderRadius: '4px',
                                textDecoration: 'none',
                            }
                        }}>
                            <IconButton className='cart-total' size="large" aria-label={`Hiện có ${cartItemCount} sản phẩm trong giỏ hàng`} color="inherit" onClick={handleCartClick}>
                                <Badge badgeContent={cartItemCount} color="error">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                            {showMiniCart && (
                                <>
                                    <div class="CartNotification">
                                        <span className="btn-close" onClick={handleCloseCartNotification}> <Close></Close> </span>
                                        <p className="status"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>Thêm vào giỏ hàng thành công!</p>
                                        <Link to="/cart" className='btn-view-cart'>Xem giỏ hàng và thanh toán</Link>
                                    </div>
                                </>
                            )}
                        </Box>

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
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) -20px 20px 40px -4px',
                                            mt: 1.5,
                                            width: '200px',
                                            borderRadius: '12px',
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                            'hr': {
                                                borderColor: 'rgba(145, 158, 171, 0.24)',
                                                borderStyle: 'dashed'
                                            }
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                        Profile
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMenu}>
                                        My account
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleLogOutClick}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </Toolbar>
                </Container>
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