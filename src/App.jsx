import React from 'react'
import './App.css'
import Homep from './components/Pages/Homep.jsx'
import ShowDetails from './components/ShowDetails/ShowDetails.jsx'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider.jsx'

function App() {    
  return (
    <>
    <ThemeProvider>
    <Routes>
      <Route path="/" element={<Homep/>}/>
      <Route path="/:id" element={<ShowDetails/>}/>
      
    </Routes>
    </ThemeProvider>
     {/* <Homep/> */}
    </>
  )
}

export default App
