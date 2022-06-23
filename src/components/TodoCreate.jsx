import React, { useState } from "react";

const TodoCreate = ({ onCreateTodo }) => {
  const [inputText, setInputText] = useState("");
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
      onCreateTodo(inputText);
      setInputText("");
    }
  };

  return (
    <div className="flex flex-row justify-center gap-2 md:gap-4 lg:gap-8 w-full px-8">
      <div className="flex flex-col w-7/12">
        <input
          type="text"
          value={inputText}
          onChange={(event) => onInputChange(event)}
          placeholder="Add new todo"
          className="input input-lg nput-bordered input-success w-full"
        />
        {isEmptyText ? (
          <span className="text-xl text-rose-500 font-semibold mt-2">
            Input can't be empty!
          </span>
        ) : (
          ""
        )}
      </div>
      <button
        className="btn btn-success btn-lg text-white w-1/5"
        onClick={(event) => onButtonClick(event)}
      >
        Add
      </button>
    </div>
  );
};

export default TodoCreate;
