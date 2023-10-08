import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Post } from '../api/types';
import { useUserStore } from '../store/userStore';
import EditArticleForm from './EditArticleForm';
import MarkdownBody from './MarkdownBody';
import SingleArticle from './SingleArticle';

interface LeadArticleProps {
  article: Post;
}

function LeadArticle(props: LeadArticleProps) {
  const [editing, setEditing] = useState<boolean>(false);
  const { user } = useUserStore((state) => {return state})
  const navigate = useNavigate()
  console.log('user: ', user)
  const createArticle = () => {
    if(user && user.token != ''){
      navigate(`/view/0`);
    } else {
      alert('Please Login.')
    }
  }
  return <>
    {
      !editing ? <div className="md:flex md:flex-col grid md:ml-20 mt-5">
        <div className="w-11/12 md:w-11/12">
          <div className="post-entry-1 lg px-5">
            <a href="#" className='w-fit'>
              <img src={props.article.image || "./p1.jpg"} alt="" className="img-fluid"/>
            </a>
            <div className="post-meta">
              <span className="date">{props.article.type}</span> <span className="mx-1">•</span> <span>{props.article.datePublished}</span>
              </div>
            <h2>
              <a href="#" className="leading-3 font-bold text-lg">{props.article.title}</a>
            </h2>
            <p className="">
              <MarkdownBody markdown= {props.article.headline} />
              </p>
            <div className="author flex mt-5 items-center">
              <div className="photo">
                <img src="./person-1.jpg" alt="" className="img-fluid"/>
              </div>
              <div className="name">
                <h3 className="mt-5 p-0">{props.article.author}</h3>
              </div>
            </div>
          </div>      
        </div>
        <button onClick={()=> navigate(`/view/${props.article._id}`)} className="mx-5 md:w-5/6 h-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          view
        </button>
        <button onClick={()=> createArticle()} className="mx-5 md:w-5/6 mt-5 h-10 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
          New
        </button>
      
    </div> : <>
      <EditArticleForm article={props.article} setEditing={setEditing}/>
    </>
    }
  </>
}

export default LeadArticle; 

