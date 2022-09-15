import './App.scss';
import { useState } from 'react'
import TodoItem from './components/TodoItem/TodoItem';
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const { register, handleSubmit } = useForm()
  const [ todos, setTodos ] = useState([])

  const addTodo = data => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text: data.todoText
      }
    ])

    console.log(todos)
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="todo">
      <div className="todo-input">
        <input
          {...register('todoText')}
          className="input"
          placeholder="Add todo..."
          type="text"
        />
        <button
          className="btn"
          onClick={handleSubmit(addTodo)}
        >
          Добавить
        </button>
      </div>
      <div className="todo-content">
        {
          todos.length
            ? todos.map((todo, index) => 
                <TodoItem
                  key={index}
                  todo={todo}
                  deleteTodo={deleteTodo}
                />
              )
            : 'Нет данных'
        }
      </div>
    </div>
  );
}

export default App;
