import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
    activeSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({ activeSort, onChange }) {

    const [value, setValue] = React.useState(activeSort);

    const handleChange = (event, newValue) => {
        setValue(newValue);

        if (onChange) onChange(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
            >
                <Tab value="salePrice:ASC" label="Giá thấp đến cao" />
                <Tab value="salePrice:DESC" label="Giá cao xuống thấp" />
            </Tabs>
        </Box>
    );
}

export default ProductSort;