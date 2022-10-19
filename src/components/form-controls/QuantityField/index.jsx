import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { FormControl, FormHelperText, IconButton, OutlinedInput, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string,

    label: PropTypes.string
};

function QuantityField(props) {

    const { form, name, label } = props;
    const { control, setValue, formState: { errors } } = form;
    const hasError = !!errors[name];

    return (
        <FormControl>
            <Typography mb={1}>{label}</Typography>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, onBlur, value, name } }) => (
                    <Box className="box-quantity">
                        <IconButton onClick={() => { return setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1) }} >
                            <RemoveCircleOutline></RemoveCircleOutline>
                        </IconButton>
                        <OutlinedInput
                            id={name}
                            type="number"
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            size="small"
                            sx={{ width: 90 }}
                        />
                        <IconButton onClick={() => { return setValue(name, Number.parseInt(value) > 0 ? Number.parseInt(value) + 1 : 1) }} >
                            <AddCircleOutline></AddCircleOutline>
                        </IconButton>
                    </Box>
                )}
            />
            <FormHelperText error={hasError}>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default QuantityField;