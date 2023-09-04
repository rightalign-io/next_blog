import { Paper, styled } from "@mui/material";
import { Link } from "react-router-dom";
import MainComp from "../components/MainComp";
import LeadArticle from "../components/LeadArticle";
import SubArticle from "../components/SubArticle";
import HomeSlider from "../components/HomeSlider";
import Trending from "../components/Trending";
import { blogArticles } from "../api/blog.services";

function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  blogArticles()
  return (
    // <MainComp />
    <div className="">
      <HomeSlider />
      <div className="text-gray-600 body-font overflow-hidden flex space-between">
        {/* create the first side shandic  */}
        <span className="w-1/2">
        <LeadArticle />
        </span>
        
        <div className="w-1/4 grid mt-5">
          {[1,2].map((todo, index) =>
            // Only do this if items have no stable IDs
            <span key={index}>
              <SubArticle />
            </span>
          )}       
        </div>
        <div className="w-1/4 grid mt-5">
          {[1,2].map((todo, index) =>
            // Only do this if items have no stable IDs
            <span key={index}>
              <SubArticle />
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
