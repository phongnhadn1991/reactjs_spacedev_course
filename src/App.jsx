import { useEffect, useState } from "react"
import "./assets/tailwind.css"
import ToDoList from "./components/ToDoList"

function App() {
  const KEY_TO_DO_AP = 'TO_DO_APP'
  const [toDoList, setToDoList] = useState(() => {
    let list = localStorage.getItem(KEY_TO_DO_AP)
    if (list) {
      return JSON.parse(list)
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem(KEY_TO_DO_AP, JSON.stringify(toDoList))
  }, [toDoList])

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
