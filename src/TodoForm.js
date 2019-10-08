import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  
  const [text, setText] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(text);
    setText('');
  }


  return (
    <form onSubmit={handleSubmit} >
      <div className="form-group">
        <input type="text" onChange={event => setText(event.target.value)} autoFocus className="form-control" id="todo-input" placeholder="Enter a todo" value={text} />
      </div>

    </form>
        )
}

export default TodoForm
