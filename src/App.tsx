// import { Home } from "@mui/icons-material"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Articles from "./Pages/Articles"
import Credentials from "./Pages/Credentials"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="articles" element={ <Articles/> } />
        <Route path="about" element={ <About/> } />
        <Route path="login" element={ <Credentials/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App