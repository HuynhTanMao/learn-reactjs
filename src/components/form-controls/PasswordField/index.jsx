import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';


PasswordField.propTypes = {
    name: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
};

function PasswordField(props) {
    const { name, control, label, disabled, formState } = props;
    const { errors } = formState;
    const hasError = errors[name];

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <FormControl margin="normal" sx={{ width: '100%' }} variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <OutlinedInput
                        {...field}
                        id={name}
                        type={showPassword ? 'text' : 'password'}
                        label={label}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={toggleShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        disabled={disabled}
                    />
                )}
            />
            <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default PasswordField;