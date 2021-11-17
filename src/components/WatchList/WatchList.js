/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './style.scss';
import Form from './Form';
import TodoList from './TodoList';
import { Link } from 'react-router-dom';

function WatchList() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);

  useEffect(() => {
  getLocalStorage()
  }, [])
  const saveLocalStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalStorage = () => {
    if (localStorage.getItem('todos') ===null ) {
      localStorage.setItem('todos', JSON.stringify([]))
    }else {
    let localstoe = JSON.parse(localStorage.getItem('todos'))
    setTodos(localstoe)
    }
  }
  useEffect(() => {
    filterHandler();
    saveLocalStorage()
  },[todos,status])
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodo(todos.filter(ele => ele.completed === true))
        break;
      case "uncompleted":
      setFilterTodo(todos.filter(ele => ele.completed === false))
        break;
      default:
        setFilterTodo(todos)
    }
  }

  console.log(filterTodo)
  return (
    <div className="App">
      <Link to='/'>
      <header className='App-header'>Watch List Todo </header>
      </Link>
      <Form 
      inputText={inputText} 
      setTodos={setTodos}
      todos={todos}
      setStatus={setStatus}
      setInputText={setInputText} 
      />
      <TodoList 
      filterTodo={filterTodo}
      setTodos={setTodos}
      todos={todos} />
    </div>
  );
}

export default WatchList;
