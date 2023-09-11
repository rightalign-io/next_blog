import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { saveArticle } from "../api/blog.services";
import { Post } from "../api/types";
import { useArticleStore } from "../store/articlesStore";

/*
  * when calling this item we will have to check if newArticle exists so we show the other fields that are not usually editable.
  * We do this so we dont break or send in complete data to the api.
*/
interface EditProps {
  setEditing: (editSTate: boolean) => void;
  article: Post;
  newArticle?: Post;
}

const EditArticleForm = (props: EditProps) => {
    const { updateArticle, updatedArticle } = useArticleStore(state => state)
    const navigate = useNavigate();
    const [initialVal, setInitialVal] = useState(props.article || props.newArticle)
    const newItem = props.newArticle;
    console.log('new Item: ', newItem);
    return (<>
      <Formik
          initialValues={{ 
            title: initialVal.title, body: initialVal.body, 
            author: initialVal.author, image: initialVal.image,
            type: initialVal.type, headline:initialVal.headline, 
            dateModified: `${Date.now()}`, datePublished: initialVal.datePublished, _id:initialVal._id}}
          validate={values => {
            // const errors:{email: string} = {email: ''};
            if (!values.body) {
              // errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.body)
            ) {
              // errors.email = 'Invalid email address';
            }
            return {};
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              setSubmitting(false);
              updateArticle(values);
              saveArticle(values);
              navigate('/')
              // console.log(values);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="lg:flex-grow md:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-starts md:text-left items-left text-center" onSubmit={handleSubmit}>
                <div className="md:w-3/4 bg-white flex px-5 flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Editing </h1>
                  {/* <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">We're happy for you to join us,</h2> */}
                  <div className="relative mb-4">
                    <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
                    <input type="text" id="title" name="title" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title} 
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      {/* {errors.email && touched.email && errors.email} */}
                  </div>

                  <div className="relative mb-4">
                    <label htmlFor="author" className="leading-7 text-sm text-gray-600">Author</label>
                    <input type="text" id="author" name="author" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.author} 
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      {/* {errors.email && touched.email && errors.email} */}
                  </div>
                  <div className="relative mb-4">
                    <label htmlFor="headline" className="leading-7 text-sm text-gray-600">Headline</label>
                    <input type="text" id="headline" name="headline" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.headline} 
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      {/* {errors.email && touched.email && errors.email} */}
                  </div>
                  <div className="relative mb-4">
                    <label htmlFor="image" className="leading-7 text-sm text-gray-600">Image</label>
                    <input type="text" id="image" name="image" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image} 
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      {/* {errors.email && touched.email && errors.email} */}
                  </div>
                  <div className="relative mb-4">
                    <label htmlFor="type" className="leading-7 text-sm text-gray-600">Type</label>
                    <input type="text" id="type" name="type" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.type} 
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      {/* {errors.email && touched.email && errors.email} */}
                  </div>

                  
                  <div className="relative mb-4">
                    <label htmlFor="body" className="leading-7 text-sm text-gray-600"> Article Body </label>
                    <textarea id="body" name="body" cols={10} rows={5}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.body}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" >
                    </textarea>
                  </div>
                  <div className="flex justify-between gap-8">
                    <button type="submit" disabled={isSubmitting} 
                      className="w-1/2 mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> 
                      Publish 
                    </button>
                    <button disabled={isSubmitting} onClick={() => {props.setEditing(false)}}
                      className="w-1/2 mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> 
                      Back 
                    </button>

                  </div>
              </div>
            </form>
          )}
      </Formik>
    </>)
  }

  export default EditArticleForm;