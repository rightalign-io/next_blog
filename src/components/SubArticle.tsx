import React from 'react'
import { useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';
import { Post } from '../api/types';
import { useArticleStore } from '../store/articlesStore';

interface SubArticleProps {
  article: Post;
}

const SubArticle = ( article: SubArticleProps) => {
    const SelectArticle = (id: number) => {
      /*
      * record which id to view then edit.
      * make get request for that article id.
      */
     
    }
    
    const navigate = useNavigate()
    // console.log('article ', SelectArticle);
    return <>
      <div className=" m-5 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="./art1.jpg" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{article.article.title}</div>
          <p className="text-gray-700 text-base">
          {article.article.headline}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button onClick={() => { navigate(`/view/${article.article._id}`)}} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View</button>
          {/* <button onClick={() => console.log(' ')} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Edit</button> */}
          <button onClick={() => console.log(' ')} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Share</button>
        </div>
      </div>
    </>
    
}

export default SubArticle;