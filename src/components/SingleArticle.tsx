import { Formik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Post } from "../api/types";
import { useArticleStore } from "../store/articlesStore";
import { useUserStore } from "../store/userStore";
import EditArticleForm from "./EditArticleForm";

const SingleArticle = () => {
  const { id } = useParams()
  const tokenString = sessionStorage.getItem('user') as string
  const currentArticle = useArticleStore(state => state.articles).filter(item => item?._id.toString() === id)[0]
  const [editing, setEditing] = useState<boolean>(false);
  const navigate = useNavigate()
  // console.log('current ', tokenString);
  return (
    <section className="text-gray-600 body-font">
      {
        !editing ? <>
          <div className="container px-5 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={currentArticle?.image } />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{currentArticle?.author || 'author'}</h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                    <p className="text-base">{currentArticle?.headline || 'more about author'}.</p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <h1 className="leading-relaxed font-bold capitalize font-mono text-xl mb-4">
                    {currentArticle?.title}
                  </h1>
                  <p className="leading-relaxed text-lg mb-4">
                    {currentArticle?.body}
                  </p>
                  <a href="link.." className="text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                <div className="mt-10 pt-5 flex justify-between border-t-2 w-5/6">
                  { tokenString ? 
                    <button onClick={() => setEditing(!editing)} className="bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Edit
                    </button> :
                    <button onClick={() => navigate('/')} className="bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Back
                    </button>
                  }
                  <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    share
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>        
          </> : <> 
            <EditArticleForm article={currentArticle} setEditing={setEditing}/>
        </>
      }
      
    </section>
  );
}


export default SingleArticle;