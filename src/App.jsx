import { useState } from 'react'
import '/src/index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Features/Home"
import Navbar from './Features/Navbar'
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
