import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, CircularProgress, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
    onSubmit: null
};

function LoginForm(props) {
    const schema = yup.object({
        identifier: yup
            .string()
            .required("Please enter your email")
            .email("Please enter a valid email address")
        ,
        password: yup
            .string()
            .required("Please enter password")
        ,

    }).required();

    const { control, reset, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            identifier: '',
            password: ''
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
            <Typography className='typography' component="h3" variant="h5" sx={{ textAlign: 'center' }}>Log in</Typography>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <InputField name="identifier" control={control} label="Email" disabled={false} formState={formState} />
                <PasswordField name="password" control={control} label="Password" disabled={false} formState={formState} />
                <Button size="large" disabled={isSubmitting} type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>Sign In</Button>
            </form>
        </Box>
    );
}

export default LoginForm;