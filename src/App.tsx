// import { Home } from "@mui/icons-material"
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Articles from "./Pages/Articles"
import Credentials from "./Pages/Credentials"
import Header from "./components/Header"
import { useUserStore } from "./store/userStore"
import SingleArticle from "./components/SingleArticle"
import { useArticleStore } from "./store/articlesStore"
import { useEffect, useState } from "react"
import { blogArticles } from "./api/blog.services"
import EditArticleForm from "./components/EditArticleForm"

function App() {
  /*
  * Use both the sessonStorage & the state to hold the loggedIn user object but pull all state from here and prop drill it down.
  * Still need to find out why it's not showing it consistantly from the store.
  * Get article id when one changes and load the singlearticle shandic
  * 'REMOVE PROP FOR CREDENTIALS SHANDIC'
  */

  const { user, updateUser } = useUserStore((state) => {return state})
  const tokenString = sessionStorage.getItem('user') as string
  const sessionData = JSON.parse(tokenString)
  const [signedIn, setSignedIn] = useState(false)
  const setArticles = useArticleStore((article) => {return article.setArticles})
  const initiallPost = { 
    title:'', type: '', _id: 0, body:'',
    image: '',  author: sessionData?.email, datePublished: Date.now().toLocaleString(),  headline: '',  
    dateModified: Date.now().toLocaleString()
  }

  useEffect(() => {
    blogArticles().then(data => {
      setArticles(data?.data);
  })
  }, [user]);

  // console.log('App: ', user);
  return (
    <div className="App">
      <Header email={sessionData?.email || user?.email} img={sessionData?.img || user?.img} loggedIn={signedIn} />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="articles" element={ <Articles/> } />
        <Route path="about" element={ <About/> } />
        <Route path="login" element={ <Credentials updateUser={() => updateUser} /> } />
        <Route path="logout" element={ <Credentials updateUser={() => updateUser} /> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="view/0" element={ <EditArticleForm newArticle={initiallPost} setEditing={() => console.log()} article={initiallPost}/> } />
        <Route path="view/:id" element={ <SingleArticle/> } />
      </Routes>
    </div>
  )
}

export default App;