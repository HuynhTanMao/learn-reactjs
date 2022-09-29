import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';


InputField.propTypes = {
    name: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
};

function InputField(props) {
    const { name, control, label, disabled, formState } = props;
    const { errors } = formState;
    const hasError = errors[name];

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <TextField
                    sx={{ width: '100%' }}
                    label={label}
                    {...field}
                    margin="normal"
                    disabled={disabled}
                    variant="outlined"
                    error={!!hasError}
                    helperText={errors[name]?.message}
                />
            )}
        />
    );
}

export default InputField;