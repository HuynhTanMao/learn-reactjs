import React, { useState } from "react";
import TodoList from "./features/TodoList";

function App() {
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

  return (
    <div className="App">
      <TodoList todos={todoList} onTodoClick={HandleTodoClick} />
    </div>
  );
}

export default App;
