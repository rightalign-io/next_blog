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
*/

const ArticlesContainer = tw.div`container px-5 py-24 mx-auto animate__animated animate__bounceInUp`;
const IntroContainer = tw.div`flex flex-wrap w-full mb-20`;
const ArticlesBody = tw.div`flex flex-wrap -m-4`;


const Credentials = (props: credentialsProps) => {
  const {email, img } = useUserStore(state => state)
  console.log('credentials: ', email, img);
  const [credential, setCredential] = useState({login:true, forgot: false, signUp: false });
  
  return <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded md:w-3/4" alt="hero" src="./login.jpg" />
    </div>
    
    {
      credential.login && <> <Login  {...credential} stateChange={() => {props.updateUser}} /></>
    }
    {
      credential.forgot && <> <ForgotPassword {...credential} stateChange={() => setCredential} /></>
    }
    {
      credential.signUp && <> <SignUp {...credential} stateChange={() => setCredential} /></>
    }
  </div>
    <span className="flex justify-between md:w-1/2 md: mx-auto">
      <button onClick={ (event) => {event.preventDefault(); setCredential({ login: false, forgot: true, signUp: false, })}} className="text-xs hover:text-green-400 text-blue-500 mt-3">Forgot Password </button>
      <button onClick={(event) => {event.preventDefault(); setCredential({ login: false, forgot: false, signUp: true, })}} className="text-xs hover:text-green-400 text-blue-500 mt-3">Sign Up</button>
    </span>
</section>
  
};

export default Credentials;

const Login = (credential: credState) => {
  
  const LoginUser = credential.stateChange
  
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
            const loginResponse = userLogin(values).then(items => {return items}).then((user)=> {
              user.loggedIn = true
              credential.stateChange(user)
              sessionStorage.setItem('user', JSON.stringify(user))
              navigate('/')
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
                  className="w-1/2 mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login </button>
                
            </div>
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
      <button onClick={() => credential.stateChange({ login: true, forgot: false, signUp: false, })} className="text-xs hover:text-green-400 text-blue-500 mt-3">Back </button>
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
  const [user, setUser] = useState({email: '', password:'', logedIn: false});
  const navigate = useNavigate()
  const LoginUser = useUserStore(state => state.updateUser)
  
  return <>
   <Formik
      initialValues={{ email: '', password: '', firstName: '', lastName:'', loggedIn: false }}
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
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          userRegistration(values).then(items => {return items}).then((user)=> {
            LoginUser(user)
            navigate('/')
            console.log(user);
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
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Sign Up</h1>

            <div className="md:w-3/4 bg-white flex px-5 flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0">
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
              <span className="flex justify-between">
              <button onClick={() => {;credential.stateChange({ login: true, forgot: false, signUp: false,user:user })}} className="text-xs hover:text-green-400 text-blue-500 mt-3">Back </button>
              </span>
          </div>
          
        </form>
      )}
  </Formik>
  
</>
}
