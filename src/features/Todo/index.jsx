import React, { useState } from 'react';
import TodoListFeature from "./components/TodoListFeature";

function TodoFeature(props) {
    const [ todoList, setTodoList ] = useState([ 
        {
            id: 1,
            title: "Học ReactJS",
            status: "new"
        },
        {
            id: 2,
            title: "Hoàn thiện website BĐS",
            status: "completed"
        },
        {
            id: 3,
            title: "Học thêm nhiều kỹ năng...",
            status: "new"
        }     
    ]);

    const [ filteredTodoList, setFilteredTodoList ] = useState('all');

    const handleTodoClick = (todo, index) => {
        // clone current array to the new one
        const newTodoList = [...todoList];

        // Toogle status
        const newList = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'completed' ? 'new' : 'completed'
        }
        newTodoList[index] = newList;

        // update todo List
        setTodoList(newTodoList);
    };

    const handleFilterAll = () => {
        setFilteredTodoList('all');
    }

    const handleFilterNew = () => {
        setFilteredTodoList('new');
    }

    const handleFilterCompleted = () => {
        setFilteredTodoList('completed');
    }

    const dataFilter = todoList.filter( todo => filteredTodoList === 'all' || todo.status === filteredTodoList );

    return (
        <div className='container'>
            <TodoListFeature todoList={dataFilter} onTodoClick={handleTodoClick} />
            <button onClick={handleFilterAll}>Show All</button>
            <button onClick={handleFilterNew}>Filter New</button>
            <button onClick={handleFilterCompleted}>Filter Completed</button>
        </div>
    );
}

export default TodoFeature;