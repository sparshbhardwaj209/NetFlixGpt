import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 text-white my-36 space-y-4 rounded-lg bg-opacity-85">
        <h1 className="font-bold py-4 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-3 py-2 w-full bg-transparent border rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="px-3 py-2 w-full bg-transparent border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-3 py-2 w-full bg-transparent border rounded-md"
        />
        <button className="px-3 py-2 font-medium bg-[#e50914] w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-[#b5b5b4]">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span
            className="text-white font-medium cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now." : "Sign In Now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
