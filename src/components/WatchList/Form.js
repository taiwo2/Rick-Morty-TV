import React from 'react'
// import '../App.css'
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
        <input value={inputText} onChange={inputTextHandler} type='text' className='todo' />
        <button onClick={submitHandler} className='tod-button'> +</button>
        <div className='select'>
          <select onClick={statushandler}>
            <option value='all'>all</option>
            <option value='completed'>complete</option>
            <option value='uncompleted'>uncomplete</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form
