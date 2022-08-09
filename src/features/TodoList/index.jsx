import React from 'react';
import PropTypes from 'prop-types';
import './style.sass';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null
};

function TodoList(props) {
    const { todos, onTodoClick } = props;

    const handleOnClickItem = (index, todo) => {
        if (onTodoClick)
            onTodoClick(index, todo);
    }

    return (
        <div className='container'>
            <h1>React hook - Todolist</h1>
            <div className="desc">
                <ol>
                    <li>Render danh sách todo với dữ liệu được truyền từ component cha </li>
                    <li>Khi click lên 1 item thì remote item đó khỏi danh sách</li>
                </ol>
            </div>
            <div className='analysis'>
                <h2>Phân tích</h2>
                <div>
                    <strong>App: Component cha</strong>
                    <ul>
                        <li>Prop: N/A</li>
                        <li>State: todoList</li>
                        <li>Render: {`<TodoList todos={todoList} onTodoClick={HandleTodoClick} />`}</li>
                    </ul>
                </div>
                <div>
                    <strong>TodoList: Component con</strong>
                    <ul>
                        <li>Prop:
                            <ul>
                                <li>{<code>todos</code>}: danh sách todos</li>
                                <li>{<code>onTodoClick</code>}: hàm sẽ được gọi khi một todo được click</li>
                            </ul>
                        </li>
                        <li>State: N/A</li>
                        <li>Render: ul>li>todo.title</li>
                        <li>Handle on Click: gọi hàm props.onTodoClick()</li>
                    </ul>
                </div>
            </div>
            <h2>Kết quả</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={todo.id}
                        onClick={() => handleOnClickItem(index, todo)}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default TodoList;