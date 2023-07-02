import Button from "@mui/material/Button";
import { useState } from "react";
import tw from "tailwind-styled-components";

type credState = {
  login:boolean;
  forgot: boolean;
  signUp: boolean;
  stateChange?: Dispatch<SetStateAction<{ login: boolean; forgot: boolean; signUp: boolean; }>>;
}
const ArticlesContainer = tw.div`container px-5 py-24 mx-auto animate__animated animate__bounceInUp`;
const IntroContainer = tw.div`flex flex-wrap w-full mb-20`;
const ArticlesBody = tw.div`flex flex-wrap -m-4`;
const Credentials = () => {
  // Make login inside here for testing...
  const [credential, setCredential] = useState({login:true, forgot: false, signUp: false});
  return <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded md:w-3/4" alt="hero" src="./login.jpg" />
    </div>
    {
      credential.login && <> <Login {...credential} stateChange={setCredential} /></>
    }
    {
      credential.forgot && <> <ForgotPassword {...credential} stateChange={setCredential} /></>
    }
    {
      credential.signUp && <> <SignUp {...credential} stateChange={setCredential} /></>
    }
  </div>
</section>
  
};

export default Credentials;

const Login = (credential: credState) => {
  
  return <div className="lg:flex-grow md:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Login</h1>
  <div className="md:w-3/4 bg-white flex px-5 flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0">
    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">We're happy for you to join us,</h2>
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">User Name</label>
      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
    <div className="relative mb-4">
      <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
      <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
   
    <button className="w-1/2 mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login </button>
    <span className="flex justify-between">
      <button onClick={() => credential.stateChange({ login: false, forgot: true, signUp: false, })} className="text-xs hover:text-green-400 text-blue-500 mt-3">Forgot Password </button>
      <button onClick={() => credential.stateChange({ login: false, forgot: false, signUp: true, })} className="text-xs hover:text-green-400 text-blue-500 mt-3">Sign Up</button>
    </span>
</div>
</div>
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
  
  return <div className="lg:flex-grow md:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Sign Up</h1>
  <div className="md:w-3/4 bg-white flex px-5 flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0">
    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">We're happy for you to join us,</h2>
    <div className="relative mb-4">
      <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
      <input type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
    <div className="relative mb-4">
      <label htmlFor="surname" className="leading-7 text-sm text-gray-600">Surname</label>
      <input type="surname" id="surname" name="surname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
    <div className="relative mb-4">
      <label htmlFor="town" className="leading-7 text-sm text-gray-600">Town</label>
      <input type="town" id="town" name="town" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
    <div className="relative mb-4">
      <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
      <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
   
    <button className="w-1/2 mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up </button>
    <span className="flex justify-between">
    <button onClick={() => credential.stateChange({ login: true, forgot: false, signUp: false, })} className="text-xs hover:text-green-400 text-blue-500 mt-3">Back </button>
    </span>
</div>
</div>
}