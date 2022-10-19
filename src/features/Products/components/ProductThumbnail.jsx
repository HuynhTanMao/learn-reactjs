import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({ product = {} }) {
    const productThumb = (product.thumbnail) ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
    return (
        <Box>
            <img src={productThumb} alt="" />
        </Box>
    );
}

export default ProductThumbnail;