import React, { useState } from "react";
import styled from "styled-components";

const ToDoListStyle = styled.div`
  .items {
    display: flex;
    flex-flow: column;
    gap: 15px;
  }
`;

export default function ToDoList({ toDoList, onAdd, handleStatus }) {
  const listDoing = toDoList.filter((e) => !e.isCompleted);
  const listDone = toDoList.filter((e) => e.isCompleted);

  const [value, setValue] = useState("");
  const _onAdd = () => {
    onAdd(value.trim());
    setValue("");
  };

  const _onKeyUp = (ev) => {
    if (ev.key === 'Enter') {
      _onAdd()
    }
  }

  return (
    <ToDoListStyle className="px-4 py-4">
      <div className="w-full mb-5">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter todo"
            onKeyUp={_onKeyUp}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700  text-white py-3 px-4 rounded hover:border-teal-700 text-sm font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed "
            type="button"
            disabled={!value.trim()}
            onClick={_onAdd}
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-full ml-auto h-12">
          <h4 className="text-xl font-semibold mb-4">Doing</h4>
          <div className="items">
            {listDoing.map((todo) => (
              <ToDoItem key={todo.id} handleStatus={handleStatus} {...todo} />
            ))}
          </div>
        </div>
        <div className="w-full ml-auto h-12">
          <h4 className="text-xl font-semibold mb-4">Done</h4>
          <div className="items">
            {listDone.map((todo) => (
              <ToDoItem key={todo.id} handleStatus={handleStatus} {...todo} />
            ))}
          </div>
        </div>
      </div>
    </ToDoListStyle>
  );
}

const ToDoItemStyle = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 10px 15px;
  background: #f3f3f3;
  &.isCompleted {
    background: #dcdcdc;
    .name {
      text-decoration: line-through;
    }
  }
`;

export const ToDoItem = (props) => {
  const { id, name, isCompleted, handleStatus } = props;
  return (
    <ToDoItemStyle className={isCompleted ? "isCompleted" : ""}>
      <div className="name">{name}</div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          defaultValue
          className="sr-only peer"
          defaultChecked={isCompleted}
          onClick={() => handleStatus(id)}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" />
      </label>
    </ToDoItemStyle>
  );
};
