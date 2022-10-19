import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils/common';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    // let navigate = useNavigate();
    const thumbnailUrl = (product.thumbnail) ? STATIC_HOST + product.thumbnail?.url : THUMBNAIL_PLACEHOLDER;
    const productTitle = product.name || 'Post miss title';

    // const handleClick = () => {
    //     navigate(`/invoices/${product.id}`); // su dung de chuyen huong trang neu khung dung | <link></Link>
    // }

    return (
        <Box sx={{
            p: 1,
            "a": {
                textDecorationLine: 'none'
            }
        }} >
            <Link to={`${product.id}`}>
                <img src={thumbnailUrl} alt={productTitle} width="100%" />
                <Typography component="h3" variant='h3' mt={2} mb={1} sx={{ fontSize: '13px' }}>{productTitle}</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#ff424e' }}>{formatPrice(product.salePrice)} {(product.isPromotion ? ` - ${product.promotionPercent}%` : '')}</Typography>
            </Link>
        </Box >
    );
}

export default Product;