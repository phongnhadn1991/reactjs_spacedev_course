import React from 'react'
import ToDoList from '../../components/ToDoList'
import { useState } from "react"
import { message } from 'antd'

export default function Todo() {
  const defaultToDoList = [
    {
      id: 1,
      name: 'Công Việc A',
      isCompleted: false
    },
    {
      id: 2,
      name: 'Công Việc B',
      isCompleted: false
    },
    {
      id: 3,
      name: 'Công Việc C',
      isCompleted: true
    },
  ]
  const [toDoList, setToDoList] = useState(defaultToDoList)

  const onAdd = (name) => {
    const task = {
      id: Date.now(),
      name,
      isCompleted: false
    }
    setToDoList([...toDoList, task])
  }

  const onCompleted = (id) => {
    let task = toDoList.find(e => e.id === id)
    if (task) {
      task.isCompleted = true
      setToDoList([...toDoList])
    }
  }

  const onDoing = (id) => {
    let task = toDoList.find(e => e.id === id)
    if (task) {
      task.isCompleted = false
      setToDoList([...toDoList])
    }
  }

  const handleStatus = (id) => {
    let task = toDoList.find(e => e.id === id)
    if (task) {
      message.success('Status is changed !');
      if (task.isCompleted == false) {
        onCompleted(id)
      } else {
        onDoing(id)
      }
    }
  }

  return (
    <ToDoList
      toDoList={toDoList}
      onAdd={onAdd}
      handleStatus={handleStatus}>
    </ToDoList>
  )
}
