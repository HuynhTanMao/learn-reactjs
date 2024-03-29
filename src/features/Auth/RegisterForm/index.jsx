import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, CircularProgress, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
    onSubmit: null
}

function RegisterForm(props) {
    const schema = yup.object({
        fullName: yup
            .string()
            .required('Please enter full name')
            .test('should has at least two words', 'Please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            })
        ,
        email: yup
            .string()
            .required("Please enter your email")
            .email("Please enter a valid email address")
        ,
        password: yup
            .string()
            .required("Please enter password")
            .min(6)
        // .matches(
        //     /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        //     "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        // )
        ,
        retypePassword: yup
            .string()
            .required("Please confirm your password")
            .oneOf([yup.ref('password'), null], "Passwords don't match.")

    }).required();

    const { control, reset, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: ''
        }
    });

    const handleOnSubmit = async (data) => {
        const { onSubmit } = props;

        if (onSubmit) {
            await onSubmit(data);
        }

        reset();

    };

    const { isSubmitting } = formState;

    return (
        <Box sx={{ width: '100%', marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {isSubmitting && <CircularProgress disableShrink />}
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className='typography' component="h3" variant="h5" sx={{ textAlign: 'center' }}>Create An Account</Typography>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <InputField name="fullName" control={control} label="Full name" disabled={false} formState={formState} />
                <InputField name="email" control={control} label="Email" disabled={false} formState={formState} />
                <PasswordField name="password" control={control} label="Password" disabled={false} formState={formState} />
                <PasswordField name="retypePassword" control={control} label="Retype Password" disabled={false} formState={formState} />
                <Button size="large" disabled={isSubmitting} type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>Create An Account</Button>
            </form>
        </Box>
    );
}

export default RegisterForm;