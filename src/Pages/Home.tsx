import { Paper, styled } from "@mui/material";
import { Link } from "react-router-dom";
import MainComp from "../components/MainComp";
import LeadArticle from "../components/LeadArticle";
import SubArticle from "../components/SubArticle";
import HomeSlider from "../components/HomeSlider";
import Trending from "../components/Trending";
import { blogArticles } from "../api/blog.services";
import { useUserStore } from "../store/userStore";
import { Post } from "../api/types";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleArticle from "../components/SingleArticle";
import { useArticleStore } from "../store/articlesStore";

interface HomeProps {
  articles: Post[];
}

function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const initiallPost = { 
    title:'', type: '', _id: 0, body:'',
    image: '',  author: '', datePublished: '',  headline: '',  dateModified: ''
  }
  const [initialArticles, setInitialArticles] = useState<Post[]>([initiallPost])
  const articles = useArticleStore((state) => state.articles)
  const [leadArticle, setLeadArticle] = useState(initiallPost)
  /*
  * cut the array in half then show the 
  */
 const midpoint = Math.ceil(initialArticles.length / 2);
 const row1 = initialArticles.splice(initialArticles.length/2, 0)
  // console.log('rows: ', {r1: useArticleStore(state => state.articles), a1: initialArticles});
  useEffect(()=> {
    setLeadArticle(articles[0])
  }, [articles])

  return (
    <div className="">
      <HomeSlider />
      {/* <MainComp /> */}
      <div className="text-gray-600 body-font overflow-hidden flex flex-wrap space-between">
        {/* create the first side shandic  */}
        <span className="w-1/3 flec">
          {leadArticle && <LeadArticle article={leadArticle} />}
           
        </span>
        
        <div className="w-1/2 flex flex-wrap mt-5">
          {articles && articles.map((article, index) =>
            // Only do this if items have no stable IDs
            <span className="w-1/2" key={index}>
              <SubArticle article={article} />
            </span>
          )}       
        </div>
         
        {/* < Trending /> */}
      </div>
    </div>
  );
}

export default Home;

const Drip = () => {
  return (
    <>
      <div className="loader">
        <div className="loader-bg">
          <span>
            <img
              src="https://raw.githubusercontent.com/kleberbaum/theme/main/wg-logo.svg"
              alt="Flowers in Chania"
              className="kuhl"
            />
          </span>
        </div>
        <div className="drops">
          <div className="drop1"></div>
          <div className="drop2"></div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="liquid">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="liquid"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};
