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
    const { control, name, label, disabled, formState } = props;
    const { errors, touchedFields } = formState;
    const hasError = touchedFields[name] && errors[name];
    return (
        <>
            <Controller
                name={name}
                defaultValue={control._defaultValues}
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field }) => <TextField {...field} disabled={disabled} label={label} error={!!hasError} helperText={errors[name]?.message} variant="standard" />}
            />
            {/* <span>{errors.name?.message}</span> */}
        </>
    );
}

export default InputField;