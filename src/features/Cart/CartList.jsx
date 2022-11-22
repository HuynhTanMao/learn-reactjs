import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import CartItem from './CartItem';

CartList.propTypes = {
    data: PropTypes.array,
};

function CartList({ data = [] }) {
    return (
        <Box>
            <Grid container>
                {
                    data.map((product, index) => (
                        <Grid item key={product.id} xs={12}>
                            <CartItem product={product}></CartItem>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default CartList;