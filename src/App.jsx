import Box from "./components/Box"
import "./assets/tailwind.css"

function App() {
  const atrributeBox = {
    background: 'green'
  }

  return (
    <>
      <Box {...atrributeBox}>
        Green
      </Box>
      <Box background="red">
        Red
      </Box>
    </>
  )
}

export default App
