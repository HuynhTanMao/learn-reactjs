import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';

FilterByPrices.propTypes = {
    onFilter: PropTypes.func,
};

function FilterByPrices({ onFilter }) {

    const [priceFilter, setPriceFilter] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    })

    const handleTextFieldChange = (e) => {
        const { name, value } = e.target;
        setPriceFilter(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleClick = (e) => {
        if (onFilter) onFilter(priceFilter);
        setPriceFilter({
            salePrice_gte: 0,
            salePrice_lte: 0,
        })
    }

    return (
        <Box>
            <Typography variant='h3' fontSize={14} fontWeight={700}>Chọn khoảng giá</Typography>
            <Box mt={2} mb={1} sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                '& > span': {
                    marginLeft: 1,
                    marginRight: 1
                }
            }}>
                <TextField name="salePrice_gte" variant="standard" value={priceFilter.salePrice_gte} onChange={handleTextFieldChange} size="small" sx={{ fontSize: '10px' }} />
                <span> - </span>
                <TextField name="salePrice_lte" variant="standard" value={priceFilter.salePrice_lte} onChange={handleTextFieldChange} size="small" sx={{ fontSize: '10px' }} />
            </Box>
            <Button variant="outlined" onClick={handleClick} size="small" >Áp dụng</Button>
        </Box>
    );
}

export default FilterByPrices;