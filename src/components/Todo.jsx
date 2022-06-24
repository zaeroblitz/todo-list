import React, { useEffect, useState } from "react";

import TodoCreate from "./TodoCreate";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [chooseList, setChooseList] = useState("ALL_TASK");

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const onCreateTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const onDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onUpdateTodo = (id, value) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: value };
        }

        return todo;
      })
    );

    // setTodoList(todoList.map((todo) => (todo.index === todo ? value : todo)));
  };

  const onCompleteTodo = (id, isComplete) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !isComplete };
        }

        return todo;
      })
    );
  };

  const onChooseList = (event, status) => {
    event.preventDefault();
    setChooseList(status);
  };

  const renderedGroupList = () => {
    switch (chooseList) {
      case "ALL_TASK":
        return renderedTodoList(todoList);

      case "UNCOMPLETED_TASK":
        const unCompletedList = todoList.filter(
          (todo) => todo.isComplete === false
        );
        return renderedTodoList(unCompletedList);

      case "COMPLETED_TASK":
        const completedList = todoList.filter(
          (todo) => todo.isComplete === true
        );
        return renderedTodoList(completedList);

      default:
        return;
    }
  };

  const renderedTodoList = (list) => {
    return list.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
          onCompleteTodo={onCompleteTodo}
        />
      );
    });
  };

  return (
    <div className="flex justify-center">
      <div className="card w-full lg:w-3/4 bg-white-200 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl">
        <div className="card-body items-center max-h-[85vh] overflow-auto">
          <TodoCreate onCreateTodo={onCreateTodo} />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-4">
            <button
              className={`btn btn-primary text-white ${
                chooseList === "ALL_TASK" ? "btn-active" : "btn-ghost"
              }`}
              onClick={(event) => onChooseList(event, "ALL_TASK")}
            >
              All Task
            </button>
            <button
              className={`btn text-white ${
                chooseList === "UNCOMPLETED_TASK"
                  ? "btn-warning btn-active"
                  : "btn-ghost"
              }`}
              onClick={(event) => onChooseList(event, "UNCOMPLETED_TASK")}
            >
              Uncompleted Task
            </button>
            <button
              className={`btn text-white ${
                chooseList === "COMPLETED_TASK"
                  ? "btn-success btn-active"
                  : "btn-ghost"
              }`}
              onClick={(event) => onChooseList(event, "COMPLETED_TASK")}
            >
              Completed Task
            </button>
          </div>
          <div className="mt-8 w-full lg:w-10/12">
            <div className="flex flex-col gap-4">{renderedGroupList()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
