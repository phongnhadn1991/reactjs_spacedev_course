import Box from "./components/Box"

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
