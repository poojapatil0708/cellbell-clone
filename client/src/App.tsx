import { ChakraProvider } from "@chakra-ui/react"
import IndexRouter from "./routes"

function App() {
  return (
   <ChakraProvider>
      <IndexRouter/>
   </ChakraProvider>
  )
}

export default App
