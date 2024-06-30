import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
    console.log('todos', todos.map((t) => console.log(t)))
    return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo" key={t.id}> 
           {/* <div> */}
            <p className="todoText">{t.todo.title}</p>
            <p className="todoText">{t.todo.desc}</p>
          {/* </div> */ }
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li >
      ))}
    </ul >
  );
};

export default TodoList;