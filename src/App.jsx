import React, { useState,useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState({ title: '', desc: '' });
  // const [description, setDescription] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [editId, setEditId] = useState(0);

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  //   console.log('xx',JSON.parse(localStorage.getItem("todos")))
  //   setTodos(storedTodos);
  // }, []);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) => {
        if (t.id === editId) {
          return { id: t.id, todo: { title: todo.title, desc: todo.desc } }
        }
        else return t;
      }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo({ title: '', desc: '' });
      return;
    }
    if(todo.title === "") alert("Todo Name cannot be empty")
    if (todo.title !== "") {
      setTodos([{ id: `${Date.now()}`, todo }, ...todos]);
      setTodo({ title: '', desc: '' });
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo({ title: editTodo.todo.title, desc: editTodo.todo.desc });
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;