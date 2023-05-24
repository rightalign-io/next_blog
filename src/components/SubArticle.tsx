import React from 'react'

interface Props {}

function SubArticle(props: Props) {
    const {} = props
    return <>
      <div className="w-full basis-1/3 px-3">
        <div className="post-entry-1 mx-2">
          <a href="#"><img src="./post-landscape-2.jpg" alt="" className="img-fluid" /></a>
          <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
          <h2><a href="#">Let’s Get Back to Work, New York</a></h2>
        </div>
      </div>
    </>
    
}

export default SubArticle;