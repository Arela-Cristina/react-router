import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./assets/Components/Body/Home-Page.jsx"
import Nav from "./assets/Components/Menu-Nav/Nav.jsx"
import About from "./assets/Components/Body/About-Us.jsx"
import Posts from "./assets/Components/Body/Posts-List.jsx"
import Footer from "./assets/Components/Footer/Footer.jsx"

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Posts" element={<Posts />} />
        </Routes >
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
