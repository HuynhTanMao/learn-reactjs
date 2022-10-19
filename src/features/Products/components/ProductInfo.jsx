import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { formatPrice } from 'utils/common';

ProductInfo.propTypes = {
    product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
    return (
        <Box>
            <Typography component="h1" variant="h5">
                {product.name}
            </Typography>
            <Box className="product-price has-discount">
                <Box component="span" className="product-price__sale-price">
                    {formatPrice(product.salePrice)}
                </Box>
                <Box component="span" className="product-price__original-price">
                    {formatPrice(product.originalPrice)}
                </Box>
                <Box component="span" className="product-price__discount-rate">
                    {` - ${product.promotionPercent}%`}
                </Box>
            </Box>
            <Typography mt={2}>
                {product.shortDescription}
            </Typography>

        </Box>
    );
}

export default ProductInfo;