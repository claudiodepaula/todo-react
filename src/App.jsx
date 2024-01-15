import { useState } from 'react'
import './App.css'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';


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

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [order, setOrder] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      }
    ]

    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    let newTodos = [...todos];
      
    newTodos = newTodos.filter(todo => {
      return todo.id != id;
    })

    setTodos(newTodos);
  }

  const completeTodos = (id) => {
    const newTodos = [...todos];

    newTodos.map(todo => {
      todo.id === id ? todo.isCompleted = true : null
    })

    setTodos(newTodos);
  }

  return <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={ search } setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setOrder={setOrder}/>
      <div className='todo-list'>
        {
          todos
            .filter(
              (todo)=> filter === "all" 
                ? true 
                : filter === "completed" 
                ? todo.isCompleted
                : !todo.isCompleted
            )
            .filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            .sort((a,b) => order ==='Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
            .map((todo, index)=>(
              <Todo todo={todo} removeTodo={removeTodo} completeTodos={completeTodos} key={index}/>
            )
          )
        }
      </div>
      <div className='todo-form'>
        <TodoForm addTodo={addTodo}/>
      </div>
  
  </div>
  
}

export default App
