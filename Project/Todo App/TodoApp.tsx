import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");  // <-- add this

  // Add Task
  const addTask = () => {
    const trimmed = task.trim();
    if (trimmed === "") return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask(""); // clear input after adding
  };

  // Delete Task by ID
  const deleteTask = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  // Enter key support
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Filter todos based on filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Madara's ToDo List 📝</h2>

      <div style={styles.inputBox}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      <div style={{ marginTop: 10 }}>
        <button onClick={() => setFilter("all")} disabled={filter === "all"}>
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          disabled={filter === "active"}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          disabled={filter === "completed"}
        >
          Completed
        </button>
      </div>

      <ul style={styles.list}>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            style={{
              ...styles.listItem,
              textDecoration: todo.completed ? "line-through" : "none",
              opacity: todo.completed ? 0.6 : 1,
            }}
          >
            <span onClick={() => toggleComplete(todo.id)} style={{ cursor: "pointer", flex: 1 }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTask(todo.id)} style={styles.delBtn}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    fontFamily: "sans-serif",
    maxWidth: 400,
    margin: "auto",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
  },
  inputBox: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "10px 15px",
    backgroundColor: "#6b00b6",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#2a2a2a",
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
  },
  delBtn: {
    background: "transparent",
    border: "none",
    fontSize: 18,
    cursor: "pointer",
    color: "#ff5c5c",
  },
};

export default TodoApp;
