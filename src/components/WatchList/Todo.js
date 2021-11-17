import React from 'react'

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
      <button onClick={completedHandler} className="trash">check</button>
      <button onClick={deleteHandler} className="trash">trash</button>
    </div>
  )
}

export default Todo;
