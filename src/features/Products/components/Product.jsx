import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const productThumb = (product.thumbnail) ? STATIC_HOST + product.thumbnail.formats.thumbnail.url : THUMBNAIL_PLACEHOLDER;
    const productTitle = product.name || 'Post miss title';
    return (
        <Box sx={{ p: 1 }}>
            <img src={productThumb} alt={productTitle} width="100%" />
            <Typography variant='h3' mt={2} mb={1} sx={{ fontSize: '13px' }}>{productTitle}</Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#ff424e' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)} {(product.isPromotion ? ` - ${product.promotionPercent}%` : '')}</Typography>
        </Box>
    );
}

export default Product;