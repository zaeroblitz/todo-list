import React, { useState } from "react";

const TodoUpdate = ({ todo, id, onUpdateTodo }) => {
  const [inputText, setInputText] = useState(todo.text);
  const [isEmptyText, setIsEmptyText] = useState(false);

  const onInputChange = (event) => {
    setInputText(event.target.value);
  };

  const onButtonClick = (event) => {
    event.preventDefault();

    if (!inputText) {
      setIsEmptyText(true);
    } else {
      setIsEmptyText(false);
      onUpdateTodo(id, inputText);
    }
  };

  return (
    <div>
      <input type="checkbox" id={`modal-${id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Todo</h3>
          <input
            type="text"
            placeholder="Update todo"
            value={inputText}
            onChange={(event) => onInputChange(event)}
            className="input input-lg input-bordered w-full mt-4"
          />
          {isEmptyText ? (
            <p className="text-xl text-rose-500 font-semibold mt-2">
              Input can't be empty!
            </p>
          ) : (
            ""
          )}
          <div className="modal-action">
            <label
              htmlFor={`modal-${id}`}
              onClick={(event) => onButtonClick(event)}
              className="btn btn-primary text-white"
            >
              Submit
            </label>
            <label htmlFor={`modal-${id}`} className="btn btn-error text-white">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoUpdate;
