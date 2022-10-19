import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import * as DOMPurify from 'dompurify';

ProductDescription.propTypes = {
    product: PropTypes.object,
};

function ProductDescription({ product = {} }) {

    let productDescSanitize = DOMPurify.sanitize(product.description);
    return (
        <Paper elevation={0} sx={{ p: 2 }}>
            <div dangerouslySetInnerHTML={{ __html: productDescSanitize }} />
        </Paper>
    );
}

export default ProductDescription;