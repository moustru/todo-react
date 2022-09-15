import './TodoItem.scss';

export default function TodoItem(props) {
  const deleteTodo = () => {
    props.deleteTodo(props.todo.id)
  }

  return (
    <div className="todo-item">
      <div className="todo-item-text">{ props.todo.text }</div>
      <button
        className="btn btn-close"
        onClick={deleteTodo}
      >
        х
      </button>
    </div>
  )
}