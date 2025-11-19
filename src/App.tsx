import { useState } from 'react'
import './App.css'
import { Theme } from './components/userContext'
import Header from './components/Header'
import Button_bar from './components/Button_bar'
import type { dataProps } from './types/data'
import data from "../data.json"
function App() {
  
  const [isDark, setisDark] = useState<boolean>(false)
  const [states, setStates] = useState<"active" | "all" | "inactive">("all")
  const [extension, setExtension] = useState<dataProps[]>(data)
  console.log(extension)
  return (
    <>

    <Theme.Provider value={{isDark, setisDark, states, setStates}}>
      <div className={isDark ? "background b-dark" : "background b-light"}>
        <Header/>
        <Button_bar/>
      </div>
      
    </Theme.Provider>
    </>
  )
}

export default App
