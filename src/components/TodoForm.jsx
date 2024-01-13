import { useState } from 'react';
import todoType from '../data/data.js';



const TodoForm = ({addTodo}) => {
  const [text, setTitle] = useState('');
  const [category, setCategory] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(text, category)
    setTitle('');
    setCategory('');
  }

  return (
    <div className='todoForm'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Digite o Título' value={text} onChange={(e)=> setTitle(e.target.value)}></input>
        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
          { 
            todoType.map ((item) => 
              (
                <option key={item.value} value={item.value}> {item.title} </option>
              )
            )
          }
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
    

  )
}

export default TodoForm;