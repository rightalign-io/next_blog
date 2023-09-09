import React from 'react'
import tw from "tailwind-styled-components";

const Segment = tw.div`flex-grow sm:text-left text-center mt-6 sm:mt-0`;

const About = () => {
    return <div className="text-gray-600 body-font">
    <div className="container px-5 mx-auto an">
    <section>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="page-title py-5">About us</h2>
          </div>
        </div>

        <div className="row mb-5 w-11/12 mx-auto">

          <div className="grid grid-cols-2 gap-1 justify-items-center post-entry-2 ">
            <a href="#" className="me-4 thumbnail">
              <img src="./art1.jpg" alt="" className="img-fluid" />
            </a>
            <div className="ps-md-5 mt-4 mt-md-0">
              <div className="post-meta mt-4">About us</div>
              <h2 className="mb-4 text-2xl">Company History</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
              <p>Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam. Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi.</p>
            </div>
          </div>

          <div className="flex post-entry-2 half mt-5">
            <a href="#" className="me-4 thumbnail order-2">
              <img src="./art1.jpg" alt="" className="img-fluid" />
            </a>
            <div className="pe-md-5 mt-4 mt-md-0">
              <div className="post-meta mt-4">Mission &amp; Vision</div>
              <h2 className="mb-4 text-2xl">Mission &amp; Vision</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
              <p>Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam. Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi.</p>
            </div>
          </div>
        

        </div>

      </div>
    </section>

    <section>
      <div className="container " data-aos="fade-up">
        <div className="row">
          <div className="text-center mb-5">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2 className="display-4">Our Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint sed, fugit distinctio ad eius itaque deserunt doloribus harum excepturi laudantium sit officiis et eaque blanditiis. Dolore natus excepturi recusandae.</p>
              </div>
            </div>
          </div>
         <span className='grid grid-cols-3 gap-4 content-center'>
         <div className="w-5/6 justify-items-center grid  mb-5">
            <img src="./art2.jpg" alt="" className="rounded-full w-24 w-50 mb-4" />
            <h4>Cameron Williamson</h4>
            <span className="d-block mb-3 text-uppercase">Founder &amp; CEO</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
          <div className="w-5/6 justify-items-center grid  mb-5">
            <img src="./art3.jpg" alt="" className="rounded-full w-24 w-50 mb-4" />
            <h4>Wade Warren</h4>
            <span className="d-block mb-3 text-uppercase">Founder, VP</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
          <div className="w-5/6 justify-items-center grid  mb-5">
            <img src="./art3.jpg" alt="" className="rounded-full w-24 w-50 mb-4" />
            <h4>Jane Cooper</h4>
            <span className="d-block mb-3 text-uppercase">Editor Staff</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
          <div className=" justify-items-center grid mb-5">
            <img src="./art3.jpg" alt="" className="rounded-full w-24 w-50 mb-4" />
            <h4>Cameron Williamson</h4>
            <span className="d-block mb-3 text-uppercase">Editor Staff</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
          <div className=" justify-items-center grid  mb-5">
            <img src="./art3.jpg" alt="" className="rounded-full w-24 w-50 mb-4" />
            <h4>Cameron Williamson</h4>
            <span className="d-block mb-3 text-uppercase">Editor Staff</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
          <div className=" justify-items-center grid  mb-5">
            <img src="./art3.jpg" alt="" className="rounded-full w-24 w-50 mb-4" />
            <h4>Cameron Williamson</h4>
            <span className="d-block mb-3 text-uppercase">Editor Staff</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
         </span>
        </div>
      </div>
    </section>
    </div>
  </div>
}

export default About