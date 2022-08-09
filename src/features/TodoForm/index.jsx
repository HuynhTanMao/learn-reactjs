import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const { onSubmit } = props;

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let newTodo = document.getElementById("newTodo");
        if (onSubmit) {
            onSubmit(newTodo.value);
        }
        newTodo.value = '';
    };

    return (
        <div className='container'>
            <h3>Add new todolist</h3>
            <form id="addNewToDo" action="" onSubmit={(e) => handleOnSubmit(e)}>
                <input type="text" name='newTodo' id='newTodo' />
                <input type="submit" value="Submit" />
            </form>
        </div >
    );
}

export default TodoForm;