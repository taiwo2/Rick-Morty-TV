import React from 'react'
import './style.scss'
const Todo = ({text, todo, todos, setTodos}) => {

  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }
  const completedHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed,
        }
      }
      return item
    }))
  }
  return (
    <div className="todo">
      <li>{text}</li>
      {/* <lable>check</lable> */}
      <input onChange={completedHandler} className="check" type='checkbox' />
      <button onClick={deleteHandler}  className="trash">Remove</button>
    </div>
  )
}

export default Todo;
