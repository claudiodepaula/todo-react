import React from 'react';
import todoType from '../data/data.js';

const TodoForm = () => {
  return (
    <div className='todoForm'>
      <h2>Criar Tarefa:</h2>
      <form>
        <input type='text' placeholder='Digite o Título'></input>
        <select>
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

export default TodoForm