import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Grid, Skeleton } from '@mui/material';

ProductSkeletonList.propTypes = {
    length: PropTypes.number
};

ProductSkeletonList.defaultProps = {
    length: 6
}

function ProductSkeletonList({ length }) {
    return (
        <Box>
            <Grid container>
                {
                    Array.from(new Array(length)).map((x, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Box sx={{ p: 1 }}>
                                <Skeleton variant="rectangular" width={'100%'} height={265} />
                                <Skeleton></Skeleton>
                                <Skeleton width="60%" />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default ProductSkeletonList;