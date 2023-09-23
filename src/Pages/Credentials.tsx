import { useState } from "react";
import tw from "tailwind-styled-components";
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
  <div className="container mx-auto flex px-5 flex-col items-center md:py-24 ">

    {
      credential.login && <> <Login  {...credential} stateChange={setCredential} /></>
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
