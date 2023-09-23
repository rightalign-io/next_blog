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
import { credentialsProps, IUser } from "../api/types";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import SignUp from "../components/SignUp";

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
  <div className="container mx-auto flex px-5 py-24 flex-col items-center">

    {
      credential.login && <> <Login  {...credential} stateChange={setCredential} /></>
    }
    {
      credential.forgot && <> <ForgotPassword {...credential} stateChange={setCredential} /></>
    }
    {
      credential.signUp && <> <SignUp {...credential} stateChange={setCredential} /></>
    }
    <span className="flex flex-col w-5/6 md:flex-row md:justify-around md:w-1/2 ">
      <button onClick={ (event) => {event.preventDefault(); setCredential({ login: false, forgot: true, signUp: false, })}} className="w-fit text-xs text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:text-green-400  mt-3">Forgot Password </button>
      <button onClick={(event) => {event.preventDefault(); setCredential({ login: false, forgot: false, signUp: true, })}} className="w-fit text-xs text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:text-green-400 mt-3">Sign Up</button>
    </span>
  </div>
</section>
};

export default Credentials;
