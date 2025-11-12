import { useState } from 'react'
import './App.css'
import { Theme } from './components/userContext'
import Header from './components/Header'
function App() {
  
  const [isDark, setisDark] = useState<boolean>(false)
  return (
    <>

    <Theme.Provider value={{isDark, setisDark}}>
      <div className='background'>
        <Header/>
      </div>
      
    </Theme.Provider>
    </>
  )
}

export default App
