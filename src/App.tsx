// import { Home } from "@mui/icons-material"
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Articles from "./Pages/Articles"
import Credentials from "./Pages/Credentials"
import Header from "./components/Header"
import { useUserStore } from "./store/userStore"

function App() {
  /*
  * Use both the sessonStorage & the state to hold the loggedIn user object.
  * Still need to find out why it's not showing it consistantly from the store.  
  */
  const { email, loggedIn, img, updateUser } = useUserStore((state) => {return state})
  const tokenString = sessionStorage.getItem('user') as string
  const sessionData = JSON.parse(tokenString)
  // console.log('App: ', email, img);
  return (
    <div className="App">
      <Header email={sessionData?.email || email} img={sessionData?.img || img} loggedIn={sessionData?.logged || loggedIn} />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="articles" element={ <Articles/> } />
        <Route path="about" element={ <About/> } />
        <Route path="login" element={ <Credentials updateUser={() => updateUser} /> } />
        <Route path="logout" element={ <Credentials updateUser={() => updateUser} /> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App;