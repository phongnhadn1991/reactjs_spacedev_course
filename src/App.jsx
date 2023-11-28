// import "./assets/tailwind.css"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Common/header"
import Todo from "./pages/todo"
import Course from "./pages/course"
import Home from "./pages"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </>
  )
}

export default App
