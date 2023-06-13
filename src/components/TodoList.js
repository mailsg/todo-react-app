/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const TodoList = ({
  todos, handleChange, delTodo, setUpdate,
}) => (
  <div>
    {todos.map((todo) => (
      <ul key={todo.id}>

        <TodoItem
          key={todo.id}
          item={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      </ul>
    ))}
  </div>
);
export default TodoList;
