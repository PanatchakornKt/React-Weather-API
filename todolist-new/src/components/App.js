import React, { useState } from "react";
import AddTask from "./AddTask";
import DisplayBox from "./DisplayTask";

const App = () => {
  const [todos, setTodos] = useState([]);

  const onAddTask = (task) => {
    const id = Math.random() * 1000;
    const newTask = {
      id,
      task,
      completed: false,
    };
    setTodos([...todos, newTask]);
    console.log(todos);
  };

  const onDeleteTask = (task) => {
    setTodos(todos.filter((todo) => todo.id !== task.id));
  };

  const onComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <React.Fragment>
      <AddTask onAddTask={onAddTask} />
      <DisplayBox
        todos={todos}
        onDeleteTask={onDeleteTask}
        onComplete={onComplete}
      />
    </React.Fragment>
  );
};

export default App;
