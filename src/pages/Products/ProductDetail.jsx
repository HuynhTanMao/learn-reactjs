import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Paper } from '@mui/material';

ProductDetail.propTypes = {

};

function ProductDetail(props) {
    return (
        <Box>
            <Grid container>
                <Paper>
                    <Grid item xs={3} className="product-thumbnail-wrap">Product thumbnail</Grid>
                    <Grid item xs={9} className="product-info-wrap">Product info</Grid>
                </Paper>
            </Grid>
        </Box>
    );
}

export default ProductDetail;