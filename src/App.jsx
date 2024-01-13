import { useState } from 'react'
import './App.css'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer Compras",
      category: "Casa",
      isCompleted: false
    },
    {
      id: 2,
      text: "Manutenção de Clientes - Correção",
      category: "Trabalho",
      isCompleted: true
    },
    {
      id: 3,
      text: "Manutenção de Colaboradores - Correção",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 4,
      text: "Varrer a casa",
      category: "Casa",
      isCompleted: true
    },
  ]);

  return <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
          {todos.map((todo, index)=>(
            <Todo todo={todo} key={index}/>
          ))}
      </div>
      <div className='todo-form'>
        <TodoForm/>
      </div>
  
  </div>
  
}

export default App
