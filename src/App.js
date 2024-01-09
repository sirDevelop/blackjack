import React from 'react'
import Navigation from './Components/Navigation'
import { Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import Home from './Pages/Home'
import About from './Pages/About'
import Strategies from './Pages/Strategies'
import Rules from './Pages/Rules'
import History from './Pages/History'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <>
      <Navigation />
      <Container className="my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/history" element={<History />} />
            <Route path="/strategies" element={<Strategies />} />
          </Routes>
      </Container>
      <Footer />

    </>
  )
}

export default App