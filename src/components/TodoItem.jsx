import React from "react";

import TodoUpdate from "./TodoUpdate";
import ic_edit from "../assets/ic_edit.png";
import ic_remove from "../assets/ic_remove.png";

const TodoItem = ({ todo, index, onDeleteTodo, onUpdateTodo }) => {
  const onDeleteButtonClick = (event, index) => {
    event.preventDefault();
    onDeleteTodo(index);
  };

  return (
    <React.Fragment>
      <div className="flex flex-row items-center lg:gap-4 gap-2 w-11/12 lg:w-full">
        <div className="w-full lg:w-2/3 card mx-auto my-2 bg-teal-400 text-primary-content">
          <div className="card-body px-4 py-6">
            <h2 className="card-title">{todo}</h2>
          </div>
        </div>
        <div className="flex flex-row">
          <label
            className="btn btn-info text-white mr-4"
            htmlFor={`modal-${index}`}
          >
            <img
              src={ic_edit}
              className="w-4 h-4 lg:w-6 lg:h-8 object-contain"
              alt="edit"
            />
          </label>
          <button
            className="btn btn-error text-white"
            onClick={(event) => onDeleteButtonClick(event, index)}
          >
            <img
              src={ic_remove}
              className="w-4 h-4 lg:w-8 lg:h-8 object-contain"
              alt="remove"
            />
          </button>
        </div>
      </div>
      <TodoUpdate index={index} todo={todo} onUpdateTodo={onUpdateTodo} />
    </React.Fragment>
  );
};

export default TodoItem;
