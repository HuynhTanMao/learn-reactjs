import React, { useState } from "react";
import TodoForm from "../../features/TodoForm";
import TodoList from "../../features/TodoList";
// import './style.sass';

function Todos() {
    const [todoList, setTodoList] = useState(
        [
            { id: 1, title: 'I love FrontEnd! 😍' },
            { id: 2, title: 'We love Frontend! 🥰' },
            { id: 3, title: 'They love Frontend! 🚀' }
        ]
    );

    const HandleTodoClick = (index, todo) => {
        if (index < 0) return;
        let newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    };

    const HandleOnFormSubmit = (formValues) => {
        const newTodo = {
            id: todoList.length + 1,
            ...formValues
        };
        let newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    };

    return (
        <div className="todos-wrap">
            <TodoList todos={todoList} onTodoClick={HandleTodoClick} />
            <TodoForm onSubmit={HandleOnFormSubmit} />
        </div>
    );
}

export default Todos;
