import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../components/form-controls/InputField';
import './style.sass';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const schema = yup.object({
        title: yup.string().required('Please enter title').min(5, 'Min characters is 5')
    }).required();

    const { control, reset, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: ''
        }
    });

    const handleOnSubmit = (data) => {
        const { onSubmit } = props;

        if (onSubmit) {
            onSubmit(data);
        }

        reset();

    };

    return (
        <div className='container'>
            <h3>Add new todolist</h3>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <InputField control={control} name="title" label="Todo" disabled={false} formState={formState} />
            </form>
        </div >
    );
}

export default TodoForm;