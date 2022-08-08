import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

TodoList.propTypes = {
    lists: PropTypes.array,
};

TodoList.defaultProps = {
    lists: [
        {
            id: 1,
            title: "Eat",
        },
        {
            id: 2,
            title: 'Learn'
        },
        {
            id: 3,
            title: 'Sleep'
        }
    ]
};

function TodoList({ lists }) {
    return (
        <div>
            <h3>Kế hoạch xây dựng nhà cho ba má</h3>
            <ul>
                {lists.map(item => (
                    <TodoItem item={item} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;