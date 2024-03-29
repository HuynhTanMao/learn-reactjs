import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (data) => {
        try {
            // auto set user name 
            data.username = data.email;
            const action = register(data);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // close dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }

            // do something here on register successfully
            console.log('New user:', user);
            enqueueSnackbar('Register successfully', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}></RegisterForm>
        </div>
    );
}

export default Register;