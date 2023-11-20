import { useState } from "react"
import "./assets/tailwind.css"
import ToDoList from "./components/ToDoList"

function App() {
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
    console.log(toDoList)
    if (task) {
      if (task.isCompleted == false) {
        onCompleted(id)
      } else {
        onDoing(id)
      }
    }
  }

  return (
    <>
      <ToDoList
        toDoList={toDoList}
        onAdd={onAdd}
        handleStatus={handleStatus}
      ></ToDoList>
    </>
  )
}

export default App
