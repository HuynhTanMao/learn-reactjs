import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style.sass';

TodoListFeature.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
}

TodoListFeature.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoListFeature({ todoList, onTodoClick }) {
    
    const handleTodoClick = ( todo, index ) => {
        if(!onTodoClick) return;

        onTodoClick( todo, index );
    }
    
    return (
        <div>
            <h3>List task</h3>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={todo.id}
                        className={classNames({
                            'todo-item': true,
                            completed: todo.status === 'completed'
                        })}
                        onClick={ () => { handleTodoClick( todo, index ) }}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListFeature;