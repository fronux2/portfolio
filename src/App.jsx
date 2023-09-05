import { useState } from "react"
import Anime from "./components/Anime"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
function App() {
  const [darkMode, setDarkMode] = useState('dark')
  const [bgWeb, setBgWeb] = useState('bg-teal-950')
  const buttonDarkMode = () => {
    if(darkMode === 'dark'){
      setDarkMode('')
      setBgWeb('bg-gradient-to-r from-indigo-500 from-10% via-sky-500 to-emerald-500 to-95%')
    }
    if(darkMode === ''){
      setDarkMode('dark')
      setBgWeb('bg-teal-950')
    }
  }
 
  return (        
      <div className={`${bgWeb} ${darkMode}`}>
        <Header darkMode={buttonDarkMode}/>
        <Main/>
        <Footer/>
      </div>
  )
}
export default App