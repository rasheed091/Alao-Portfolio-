import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './page/NavBar'
import Mypage from './page/Mypage'
import About from './page/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resume from './page/resume'
import Portfo from './page/Portfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route element={<Mypage/>} path='/'/>
            <Route element={<About/>} path='/about'/>
            <Route element={<Resume/>} path='/resume'/>
            <Route element={<Portfo/>} path='/portfo'/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
