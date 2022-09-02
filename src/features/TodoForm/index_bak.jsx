import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.sass';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            const newFormValues = {
                title: value
            };
            onSubmit(newFormValues);
        }
        setValue('');
    };

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className='container'>
            <h3>Add new todolist</h3>
            <form id="addNewToDo" action="" onSubmit={handleSubmit}>
                <input type="text" name='newTodo' id='newTodo' value={value} onChange={handleValueChange} />
                <input type="submit" value="Submit" className='add-new-todo' />
            </form>
        </div >
    );
}

export default TodoForm;