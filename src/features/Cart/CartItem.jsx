import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { THUMBNAIL_PLACEHOLDER } from 'constants';
import { STATIC_HOST } from 'constants';
import { formatPrice } from 'utils/common';

CartItem.propTypes = {
    product: PropTypes.object,
};

function CartItem({ product = {} }) {
    // let navigate = useNavigate();
    const thumbnailUrl = (product.thumbnail) ? STATIC_HOST + product.thumbnail?.url : THUMBNAIL_PLACEHOLDER;

    return (
        <Box sx={{
            p: 1,
            "a": {
                textDecorationLine: 'none'
            }
        }} >
            <div className='col-1'>
                <div className='product__images'>
                    <Link to={`${product.id}`}>
                        <img src={thumbnailUrl} alt={product.name} width="100%" />
                    </Link>
                </div>
                <div className='product__content'>
                    <Link to={`${product.id}`}>
                        <Typography component="h3" variant='h3' mt={2} mb={1} sx={{ fontSize: '13px' }}>{product.name}</Typography>
                    </Link>
                </div>
            </div>
            <div className='col-2'>
                <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#ff424e' }}>{formatPrice(product.salePrice)} {(product.isPromotion ? ` - ${product.promotionPercent}%` : '')}</Typography>
            </div>
            <div className='col-3'>
                <div className="product-qty">
                    <div className="styles__StyledQuantity-sc-18gisz0-0 gEpOC">
                        <span data-view-id="cart_main_quantity.decrease" data-view-index="0fef75a0-520c-11ed-ac24-5a49435b317c" className="qty-decrease ">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" alt="decrease" />
                        </span>
                        <input type="tel" className="qty-input" value="3" />
                        <span data-view-id="cart_main_quantity.increase" data-view-index="0fef75a0-520c-11ed-ac24-5a49435b317c" className="qty-increase qty-disable" >
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" alt="increase" />
                        </span>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <span className="product__final-prices">84.150 ₫</span>
            </div>
            <div className="col-5">
                <span className="product__delete" data-view-id="cart_main_remove.product">
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="deleted" /></span>
            </div>
            <Link to={`${product.id}`}>
                <img src={thumbnailUrl} alt={product.name} width="100%" />
                <Typography component="h3" variant='h3' mt={2} mb={1} sx={{ fontSize: '13px' }}>{product.name}</Typography>

            </Link>
        </Box>
    );
}

export default CartItem;