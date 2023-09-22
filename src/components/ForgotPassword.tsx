import { credState } from "../api/types";

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

  export default ForgotPassword;