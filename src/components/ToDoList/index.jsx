import { Button, Col, Divider, Input, Row, Space, Switch, message } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const ToDoListStyle = styled.div`
  .todoResult {
    padding: 2em 0;
  }
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
    message.success(`Todo: ${value} is added !`, 1);
  };

  return (
    <ToDoListStyle className="px-4 py-4">
      <div className="w-full mb-5">
        <div className="flex items-center border-b border-teal-500 py-2">
          <Space.Compact style={{ width: '100%', borderRadius: 0 }}>
            <Input size="large"
              style={{ width: '90%', borderRadius: 0 }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            />
            <Button
              style={{ width: '10%', borderRadius: 0 }}
              size="large"
              type="primary"
              disabled={!value.trim()}
              onClick={_onAdd}
            >Submit</Button>
          </Space.Compact>
        </div>
      </div>
      <div className="todoResult">
        <Row gutter={24}>
          <Col className="gutter-row" span={12}>
            <Divider orientation="center">DOING</Divider>
            <div className="items">
              {listDoing.map((todo) => (
                <ToDoItem key={todo.id} handleStatus={handleStatus} {...todo} />
              ))}
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <Divider orientation="center">DONE</Divider>
            <div className="items">
              {listDone.map((todo) => (
                <ToDoItem key={todo.id} handleStatus={handleStatus} {...todo} />
              ))}
            </div>
          </Col>
        </Row>
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
        <Switch defaultChecked={isCompleted}
          onChange={() => {
            setTimeout(() => {
              handleStatus(id)
            }, 300);
          }} />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" />
      </label>
    </ToDoItemStyle>
  );
};
