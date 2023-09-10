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
import { useEffect } from "react"
import { blogArticles } from "./api/blog.services"

function App() {
  /*
  * Use both the sessonStorage & the state to hold the loggedIn user object but pull all state from here and prop drill it down.
  * Still need to find out why it's not showing it consistantly from the store.
  * Get article id when one changes and load the singlearticle shandic
  * 'REMOVE PROP FOR CREDENTIALS SHANDIC'
  */

  const { email, loggedIn, img, updateUser } = useUserStore((state) => {return state})
  const tokenString = sessionStorage.getItem('user') as string
  const sessionData = JSON.parse(tokenString)
  const currentArticle = useArticleStore(state => state.updatedArticle)

  const setArticles = useArticleStore((article) => {return article.setArticles})
    useEffect(() => {
      blogArticles().then(data => {
        setArticles(data?.data);
        // setInitialArticles(data?.data);
        // setLeadArticle(data?.data[0])
        return {}
    })
    }, []);

  console.log('articles: ', );
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
        <Route path="view/:id" element={ <SingleArticle/> } />
      </Routes>
    </div>
  )
}

export default App;