import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo  }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
     <input
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({...todo, title: e.target.value})}
        placeholder="Todo Name*"
      />
      <br/>
      <input
        type="text"
        value={todo.desc}
        onChange={(e) => setTodo({...todo, desc: e.target.value})}
        placeholder="Description (optional)"
      />
      <button type="submit"> {editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default TodoForm;