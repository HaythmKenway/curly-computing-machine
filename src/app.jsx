import React from 'react'
import Home from './views/homepage';
import Login from './views/Login';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='home' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='curly-computing-machine' element={<Home />}/>
    </Routes>
  )
}

export default App