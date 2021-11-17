import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,setTodos, filterTodo }) => {
  return (
    <div>
      <ul className='#'>
        {filterTodo.map(todo => {
          return (
           <Todo 
           todo={todo}
           todos={todos}
           setTodos={setTodos}
           text={todo.text} 
           key={todo.id} />
        )})}
      </ul>
    </div>
  )
}

export default TodoList
