import { Box } from '@mui/system';
import categoryApi from 'api/categoryApi';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import FilterByCategories from './Filters/FilterByCategories';
import FilterByPrices from './Filters/FilterByPrices';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function ProductFilters({ filters = {}, onChange = null }) {

    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await categoryApi.getAll();
                const dataCategories = response.map(data => ({ id: data.id, name: data.name }));
                setListCategory(dataCategories);

            } catch (error) {
                console.log('Failed to fetch Categories Product: ', error);
            }
        })();
    }, []);

    const handFilter = (value) => {
        if (onChange) onChange(value);
    }

    return (
        <Box>
            <FilterByCategories categories={listCategory} onFilter={handFilter} />
            <FilterByPrices onFilter={handFilter} />
            <FilterByService filters={filters} onFilter={handFilter} />
        </Box>
    );
}

export default ProductFilters;