import { useState } from "react"
import { Header } from "./components/Header"

function App() {
  const [imageUrl, setImageUrl] = useState("")

  return (
    <>
     <Header/>
    </>
  )
}

export default App
