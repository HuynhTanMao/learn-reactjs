import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, totalCartItem } from 'features/Cart/selectors';
import style from './style.sass';
import { formatPrice } from 'utils/common';
import CartList from 'features/Cart/CartList';

CartFeature.propTypes = {

};

function CartFeature(props) {

    const numberItemTotal = useSelector(cartItemsCountSelector);
    const cartItemtotal = useSelector(totalCartItem);
    const cartItems = useSelector(state => state.cart.cartItems);
    return (
        <Box className='cart-page' >
            <Grid container spacing={2}>
                <Grid item xs={12}><Typography className='main-title' component="h1" variant='h5' >GIỎ HÀNG <span >{`(${numberItemTotal} sản phẩm)`}</span> </Typography></Grid>

                <Grid item xs={9} className="column-left">
                    <Paper elevation={0} sx={{ p: 1 }}>
                        <CartList data={cartItems} ></CartList>
                    </Paper>
                </Grid>

                <Grid item xs={3} className="column-right">
                    <Paper elevation={0} >
                        <ul className="prices__items">
                            <li className="prices__item">
                                <div className="prices__text">Tạm tính</div>
                                <div className="prices__value">{formatPrice(cartItemtotal)}</div>
                            </li>
                            <li className="prices__item">
                                <div className="prices__text">Giảm giá</div>
                                <div className="prices__value">0 đ</div>
                            </li>
                        </ul>
                        <div className="prices__total">
                            <span className="prices__text">Tổng tiền</span>
                            <div className="prices__content">
                                <div className="prices__value prices__value--final">{formatPrice(cartItemtotal)}</div>
                                <span className="prices__value--noted">(Đã bao gồm VAT nếu có)</span>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
}

export default CartFeature;