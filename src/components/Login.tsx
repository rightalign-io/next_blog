import { Formik } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router"
import { userLogin } from "../api/blog.services"
import { credState } from "../api/types"
import { useUserStore } from "../store/userStore"

const Login = (credential: credState) => {
    const [error, setError] = useState({message: ''})
    const { updateUser } = useUserStore((state) => {return state})
    const navigate = useNavigate()
    return <>
      <Formik
          initialValues={{ email: '', password: '', loggedIn: false }}
          validate={values => {
            // const errors:{email: string} = {email: ''};
            if (!values.email) {
              // errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              // errors.email = 'Invalid email address';
            }
            return {};
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              setSubmitting(false);
              await userLogin(values).then(items => {return items}).then((user)=> {
                if(user.status === 200){
                  navigate('/')
                  updateUser(user.data)
                  sessionStorage.setItem('user', JSON.stringify(user.data))
                } else {
                  setError({message: 'Login Error'})
                }              
              });
              
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
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Login</h1>
                  <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">We're happy for you to join us,</h2>
                  <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">User Name</label>
                    <input type="email" name="email" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email} 
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      {errors.email && touched.email && errors.email}
                  </div>
                  <div className="relative mb-4">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input type="password" id="password" name="password" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                                  
                  <span className="md:grid justiify-between">
                  <button type="submit" disabled={isSubmitting} 
                    className="w-full md:w-11/12 mx-auto py-2 px-6 text-xs text-white bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3">
                      Submit 
                  </button>
                  
                    <button onClick={ (event) => {event.preventDefault(); credential.stateChange({ login: false, forgot: true, signUp: false, })}} className="w-full md:w-11/12 place-self-center text-xs text-white bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                        Forgot Password
                    </button>
                    <button onClick={(event) => {event.preventDefault(); credential.stateChange({ login: false, forgot: false, signUp: true, })}} className="w-full md:w-11/12 place-self-center text-xs text-white bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                        Sign Up
                    </button>
                </span>
              </div>
              { error.message != '' && 
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Sorry,</strong>
                  <span className="block sm:inline"> {error.message}!!.</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                      </svg>
                  </span>
                </div>
              }
            </form>
          )}
      </Formik>
    </>
}

export default Login;