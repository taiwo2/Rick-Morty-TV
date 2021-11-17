import React from 'react'
import './style.scss'
const  Form = ({setInputText, todos, setTodos, inputText, setStatus })  => {

  const inputTextHandler = (e) => {
    // console.log(e.target.value)
    setInputText(e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false , id: Math.random() * 1000}
    ]);
    setInputText("")
  }

  const statushandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <div>
      <form className='flex'>
        <input value={inputText} onChange={inputTextHandler} type='text' className='input' />
        <button onClick={submitHandler} className='tod-button'> ADD TODO</button>
          <select onClick={statushandler}>
            <option value='all'>All</option>
            <option value='completed'>COMPLETED</option>
            <option value='uncompleted'>UNCOMPLETED</option>
          </select>
      </form>
    </div>
  )
}

export default Form
