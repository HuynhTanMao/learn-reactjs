import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (data) => {
        try {
            // auto set user name 
            data.username = data.email;
            const action = login(data);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // close dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }

            // do something here on register successfully
            console.log('New user:', user);
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit}></LoginForm>
        </div>
    );
}

export default Login;