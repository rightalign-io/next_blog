import Button from "@mui/material/Button";
import { convertLength } from "@mui/material/styles/cssUtils";
import { Formik } from "formik";
import {  Dispatch, SetStateAction, useState } from "react";
import { useNavigate, useParams } from "react-router";
import tw from "tailwind-styled-components";
import { userLogin, userRegistration } from "../api/blog.services";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { IUser } from "../api/types";

type credState = {
  login:boolean;
  forgot: boolean;
  signUp: boolean;
  user?:string;
  stateChange: Dispatch<SetStateAction<{ login: boolean; forgot: boolean; signUp: boolean; }>>;
}

type credentialsProps = {
  updateUser: (user: IUser) => void;
  // login:boolean;
  // signUp: boolean;
  // stateChange?: Dispatch<SetStateAction<{ login: boolean; forgot: boolean; signUp: boolean; }>>;
}
/*
  ~ To seperate the styling & the logic we:
  ~ Here we're adding the style classes.
  ~ Prolly add the states * variables here.
  ~ use the stateChange function to change the user logined or registered state
*/

const ArticlesContainer = tw.div`container px-5 py-24 mx-auto animate__animated animate__bounceInUp`;
const IntroContainer = tw.div`flex flex-wrap w-full mb-20`;
const ArticlesBody = tw.div`flex flex-wrap -m-4`;


const Credentials = (props: credentialsProps) => {

  const [credential, setCredential] = useState({login:true, forgot: false, signUp: false });
  
  return <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-col flex-col items-center">

    {
      credential.login && <> <Login  {...credential} stateChange={setCredential} /></>
    }
    {
      credential.forgot && <> <ForgotPassword {...credential} stateChange={setCredential} /></>
    }
    {
      credential.signUp && <> <SignUp {...credential} stateChange={setCredential} /></>
    }
    <span className="flex justify-between md:w-1/2 md: mx-auto">
      <button onClick={ (event) => {event.preventDefault(); setCredential({ login: false, forgot: true, signUp: false, })}} className="text-xs hover:text-green-400 text-blue-500 mt-3">Forgot Password </button>
      <button onClick={(event) => {event.preventDefault(); setCredential({ login: false, forgot: false, signUp: true, })}} className="text-xs hover:text-green-400 text-blue-500 mt-3">Sign Up</button>
    </span>
  </div>
</section>
};

export default Credentials;

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
                user.loggedIn = true
                updateUser(user.data)
                sessionStorage.setItem('user', JSON.stringify(user.data))
              } else {
                setError({...user.data})
                console.log('login Response: ', user.data);
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
              
                <button type="submit" disabled={isSubmitting} 
                  className="w-1/2 mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Login 
                </button>
            </div>
            { error.message != '' && 
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error.message}.</span>
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

const ForgotPassword = (credential: credState) => {

  return <div className="lg:flex-grow md:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Forgot Password</h1>
  <div className="md:w-3/4 bg-white flex px-5 flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0">
    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">We're happy for you to join us,</h2>
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">User Name</label>
      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
   
    <button className="w-1/2 mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Reset Password </button>
    <span className="flex justify-between">
      <button onClick={() => credential.stateChange({ login: true, forgot: false, signUp: false })} className="text-xs hover:text-green-400 text-blue-500 mt-3">Back </button>
    </span>
</div>
</div>
}

const SignUp = (credential: credState) => {
  type FormInputProps = {
  label: string;
  name: string;
  type?: string;
};
  
  const navigate = useNavigate()
  const [error, setError] = useState({message: ''})
  const { updateUser } = useUserStore(state => state)
  
  return <>
   <Formik
      initialValues={{ email: '', password: '', firstName: '', lastName:'', loggedIn: false }}
      validate={values => {
        const errors:{email: string} = {email: ''};
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
          userRegistration(values).then((user)=> {
            if(user?.status === 200){
              updateUser(user.data)
              navigate('/')
            } else {
              setError({...user?.data})
            }
          })
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
        <form className="lg:flex-grow md:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" onSubmit={handleSubmit}>
            <div className="md:w-3/4 bg-white flex px-5 flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Sign Up</h1>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">We're happy for you to join us,</h2>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" name="email" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email} 
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  {errors.email && touched.email && errors.email}
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">First Name</label>
                <input type="firstName" name="firstName" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName} 
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  {errors.firstName && touched.firstName && errors.firstName}
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Last Name</label>
                <input type="lastName" name="lastName" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName} 
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
            
              <button type="submit" disabled={isSubmitting} 
              className="w-1/2 mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up </button>
              
          </div>
          { error.message != '' && 
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error.message}.</span>
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
