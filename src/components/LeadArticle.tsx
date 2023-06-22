import React from 'react'

interface Props {}

function LeadArticle() {

    return (
        <div className="ml-20 mt-5">
        <div className="w-1/3 grid md:w-11/12">
          <div className="post-entry-1 lg px-5">
            <a href="#">
              <img src="./p1.jpg" alt="" className="img-fluid"/>
            </a>
            <div className="post-meta">
              <span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span>
              </div>
            <h2>
              <a href="#" className="leading-3 text-lg">11 Work From Home Part-Time Jobs You Can Do Now</a>
            </h2>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos</p>
    
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
