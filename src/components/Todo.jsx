import React, { useState } from "react";

import TodoCreate from "./TodoCreate";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const onCreateTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const onDeleteTodo = (index) => {
    setTodoList(todoList.filter((todo) => todo !== todoList[index]));
  };

  const onUpdateTodo = (index, value) => {
    setTodoList(
      todoList.map((todo) => (todoList[index] === todo ? value : todo))
    );
  };

  const renderedTodoList = () => {
    return todoList.map((todo, index) => {
      return (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      );
    });
  };

  return (
    <div className="flex justify-center">
      <div className="card w-full md:w-4/5 lg:w-3/4 bg-white-200 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl">
        <div className="card-body items-center max-h-[85vh] overflow-auto">
          <TodoCreate onCreateTodo={onCreateTodo} />
          <div className="mt-8 lg:w-10/12 w-full">{renderedTodoList()}</div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
