import React, { useState } from "react";

const mockTodoList = [
  { id: "task1", todo: "task1" },
  { id: "task2", todo: "task2" },
  { id: "task3", todo: "task3" }
];

const Todo = () => {
  const [val, setVal] = useState("");
  const [editId, setEditId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [todoList, setTodoList] = useState(mockTodoList);

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const updateTodo = () => {
    todoList.forEach((item) => {
      if (item.id === editId) {
        if (todoList.some((item) => item.todo === val && item.id !== editId)) {
          alert("The name already exists");
          return;
        }
        item.id = val;
        item.todo = val;
        setVal("");
        setEditId("");
        setEditMode(false);
      }
    });
  };

  const addTodo = () => {
    if (todoList.some((item) => item.todo === val)) {
      alert("The name already exists");
      setVal("");
      return;
    }
    const temp = [...todoList];
    temp.push({ id: val, todo: val });
    setTodoList(temp);
    setVal("");
  };

  const handleClick = () => {
    if (editMode) {
      updateTodo();
    } else {
      addTodo();
    }
  };

  const handleEditClick = (id) => {
    setEditId(id);
    setEditMode(true);
    setVal(todoList.find((item) => item.id === id).todo);
  };

  const deleteTodo = (deleteId) => {
    const newTodoList = todoList.filter((item) => item.id !== deleteId);
    setTodoList(newTodoList);
  };

  const handleDeleteClick = (deleteId) => {
    if (window.confirm("Are you sure to delete?") === true) {
      deleteTodo(deleteId);
    }
  };

  return (
    <div>
      <h2>Todo</h2>
      <input value={val} onChange={handleChange} />
      <button onClick={handleClick} disabled={!val}>
        {editMode ? "Update" : "Add"}
      </button>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item) => (
            <tr key={item.id}>
              <td>{item.todo}</td>
              <td>
                <button onClick={() => handleEditClick(item.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDeleteClick(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
