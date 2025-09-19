import { useState } from 'react'
import '/src/index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Features/Home"
import Contact from './Features/Contact'
import Skills from './Features/Skills'
import Projects from './Features/Projects'
import Experience from './Features/Experience'
function App() {

  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
