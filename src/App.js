import React, { useEffect, useState } from "react";
import * as queryString from "query-string";
import PostFiltersForm from "./features/PostFiltersForm";
import Pagination from "./features/Pagination";
import PostList from "./features/PostList";
import TodoForm from "./features/TodoForm";
import TodoList from "./features/TodoList";
import Clock from "./features/Clock";

function App() {
  const [todoList, setTodoList] = useState(
    [
      { id: 1, title: 'I love FrontEnd! 😍' },
      { id: 2, title: 'We love Frontend! 🥰' },
      { id: 3, title: 'They love Frontend! 🚀' }
    ]
  );

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        console.log(responseJSON);
        setPostList(data);
        setPagination(pagination);

      } catch (error) {
        console.log("Failed to fetch post list:", error.message);
      }
    }
    fetchPostList();
  }, [filters]);

  const HandleOnPageChange = (page) => {
    setFilters({
      ...filters,
      _page: page,
    });
  }

  const HandleFiltersChange = (newFilters) => {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm
    })
  }

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
    <div className="App">
      {/* <TodoList todos={todoList} onTodoClick={HandleTodoClick} />
      <TodoForm onSubmit={HandleOnFormSubmit} /> */}
      <div className="container">
        <h1>React hook - useEffect - clean up</h1>
        {/* <PostFiltersForm onSubmit={HandleFiltersChange} />
        <PostList posts={postList} />
        <Pagination pagination={pagination} onPageChange={HandleOnPageChange} /> */}
        {showClock && <Clock />}

        <button onClick={() => { setShowClock(false) }} >Hide Clock</button>
        <button onClick={() => { setShowClock(true) }} >Show Clock</button>
      </div>
    </div>
  );
}

export default App;
