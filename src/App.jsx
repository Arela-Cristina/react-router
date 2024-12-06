import { BrowserRouter } from "react-router-dom"
import Nav from "./assets/Components/Menu-Nav/Nav.jsx"
import About from "./assets/Components/Body/About-Us.jsx"
import Footer from "./assets/Components/Footer/Footer.jsx"

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <About />
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
