import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

FilterByCategories.propTypes = {
    categories: PropTypes.array.isRequired,
    onFilter: PropTypes.func,
};

function FilterByCategories({ categories, onFilter }) {

    const handleClickCategory = (catId) => {
        if (onFilter) onFilter({ category: catId });
    }

    return (
        <Box>
            <Typography variant='h3' fontSize={14} fontWeight={700}>Danh Mục Sản Phẩm</Typography>
            <ul>
                {categories.map(cat => (
                    <li key={cat.id} onClick={() => handleClickCategory(cat.id)} >{cat.name}</li>
                ))}
            </ul>
        </Box >
    );
}

export default FilterByCategories;