import Navbar from "./Components/NavBar"
import Write from "./pages/Write"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Footer from "./Components/Footer"
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Login" element={<Login />}/>
          <Route path="/about" element={<About />} />
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
