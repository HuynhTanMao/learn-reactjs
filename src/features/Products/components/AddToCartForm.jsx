import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import QuantityField from 'components/form-controls/QuantityField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {

    const schema = yup.object().shape({
        quantity: yup
            .number()
            .required('Please enter quantity')
            .min(1, 'Minimum value is 1')
            .typeError('Please enter a number')
    });

    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            quantity: 1
        }
    });

    const { handleSubmit, reset } = form;

    const handleOnSubmit = (data) => {

        if (!onSubmit) return;

        onSubmit(data);

        reset();

    }

    return (
        <Box>
            <Box component="form" onSubmit={handleSubmit(handleOnSubmit)} noValidate sx={{ mt: 1 }}>
                <QuantityField name="quantity" label="Quantity" form={form} />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2, width: 250 }}>Add to cart</Button>
            </Box>
        </Box>
    );
}

export default AddToCartForm;