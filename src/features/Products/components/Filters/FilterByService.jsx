import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

FilterByService.propTypes = {
    filters: PropTypes.object,
    onFilter: PropTypes.func,
};

function FilterByService({ filters = {}, onFilter = null }) {
    const [values, setValues] = useState({
        isFreeShip: false,
        isPromotion: false,
    })

    useEffect(() => {
        setValues({
            isFreeShip: filters.isFreeShip,
            isPromotion: filters.isPromotion,
        })
    }, [filters])

    const handleChange = (event) => {

        const { name, checked } = event.target;

        setValues(prevState => ({
            ...prevState,
            [name]: checked
        }));

        if (onFilter) onFilter({ [name]: checked });

    }

    return (
        <Box mt={2} sx={{
            "ul": {
                paddingLeft: 0
            },
            "ul li": {
                listStyleType: 'none',
            }
        }}>
            <Typography variant='h3' fontSize={14} fontWeight={700}>Dịch vụ</Typography>
            <ul>
                {[
                    { value: 'isPromotion', label: 'Có khuyến mãi' },
                    { value: 'isFreeShip', label: 'Miễn phí ship' }
                ].map(service => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={values[service.value]} onChange={handleChange} name={service.value} />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;