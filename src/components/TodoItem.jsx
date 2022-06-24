import React from "react";

import TodoUpdate from "./TodoUpdate";
import ic_edit from "../assets/ic_edit.png";
import ic_check from "../assets/ic_check.png";
import ic_cancel from "../assets/ic_cancel.png";
import ic_remove from "../assets/ic_remove.png";

const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo, onCompleteTodo }) => {
  const { id, isComplete, text } = todo;

  const onDeleteButtonClick = (event, id) => {
    event.preventDefault();
    onDeleteTodo(id);
  };

  const onCompleteButtonClick = (event, id, isComplete) => {
    event.preventDefault();
    onCompleteTodo(id, isComplete);
  };

  return (
    <React.Fragment>
      <div className="flex flex-row justify-center items-center lg:gap-4 gap-2">
        <div
          className={`w-3/4 card mx-auto my-2  text-primary-content ${
            isComplete ? "bg-teal-400" : "bg-amber-400"
          }`}
        >
          <div className="card-body px-4 py-6">
            <h2 className="card-title">
              {isComplete ? `[COMPLETED] ${text}` : text}
            </h2>
          </div>
        </div>
        <div className="w-1/4 flex flex-col lg:flex-row justify-center  items-center gap-2">
          {/* Check */}
          <label
            className="bg-blue-400 hover:bg-blue-500 cursor-pointer px-2 md:px-3 py-2 rounded-xl"
            htmlFor={`modal-${id}`}
            onClick={(event) => onCompleteButtonClick(event, id, isComplete)}
          >
            <img
              src={isComplete ? ic_cancel : ic_check}
              className="w-6 h-6"
              alt="edit"
            />
          </label>

          {/* Edit */}
          {!isComplete ? (
            <label
              className="bg-lime-400 hover:bg-lime-500 cursor-pointer px-2 md:px-3 py-2 rounded-xl"
              htmlFor={`modal-${id}`}
            >
              <img src={ic_edit} className="w-6 h-6" alt="edit" />
            </label>
          ) : (
            ""
          )}

          {/* Delete */}
          <label
            className="bg-rose-400 hover:bg-rose-500 cursor-pointer px-2 md:px-3 py-2 rounded-xl"
            onClick={(event) => onDeleteButtonClick(event, id)}
          >
            <img src={ic_remove} className="w-6 h-6" alt="remove" />
          </label>
        </div>
      </div>
      <TodoUpdate id={id} todo={todo} onUpdateTodo={onUpdateTodo} />
    </React.Fragment>
  );
};

export default TodoItem;
