import React from 'react'
import { Post } from '../api/types';

interface LeadArticleProps {
  article: Post;
}

function LeadArticle(props: LeadArticleProps) {

  return (
      <div className="ml-20 mt-5">
      <div className="w-1/3 grid md:w-11/12">
        <div className="post-entry-1 lg px-5">
          <a href="#">
            <img src={props.article.image || "./p1.jpg"} alt="" className="img-fluid"/>
          </a>
          <div className="post-meta">
            <span className="date">{props.article.type}</span> <span className="mx-1">•</span> <span>{props.article.datePublished}</span>
            </div>
          <h2>
            <a href="#" className="leading-3 text-lg">{props.article.headline}</a>
          </h2>
          <p className="">
            {props.article.body}
            </p>
          <div className="author flex ">
            <div className="photo">
              <img src="./person-1.jpg" alt="" className="img-fluid"/>
              </div>
            <div className="name">
              <h3 className="m-0 p-0">Cameron Williamson</h3>
            </div>
          </div>
        </div>      
      </div>
  
    </div>
  )
}

export default LeadArticle;
