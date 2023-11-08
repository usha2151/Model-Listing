import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Actions/action';
import { signup } from "../images";
import Navbar from "../common/Navbar";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
 
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate =  useNavigate();

  const user =useSelector(state=>state.authReducer.user)
  console.log("users data", user);

  const handleLogin = async (e) => {
    e.preventDefault(); // Corrected typo here
    dispatch(login({ email, password }));
  };
  useEffect(() => {
    if (user && user.token) {
      // Check if the user object and token property exist
      document.cookie = `token=${user.token}; expires=1h; path=/`;
      const codedToken = document.cookie;
      const token = codedToken.split("=")[1];
      console.log("token", token);
  
      if (token) {
        navigate("/");
      }
    }
  }, [user]);

  return (
    <>
      <div className="relative">
        <div className="w-full h-screen">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-90 z-10"></div>
          <img
            src={signup}
            alt="Background Imaged"
            className="w-full h-screen object-cover"
          />
          <div className="absolute top-6 left-0 w-full z-20">
            <Navbar />
          </div>
          <div className="absolute top-1/2 left-1/2 transform lg:w-[1100px] -translate-x-1/2 -translate-y-1/2 bg-white  rounded-b-lg rounded-r-lg shadow-md z-20">
            <div className="container">
              <div className=" flex">
                <div
                  className="hidden lg:flex w-full lg:w-1/2 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-20  z-0"></div>
                  <div className="w-full mx-auto px-20 flex flex-col items-center mt-48 space-y-6 text-white">
                    <h1 className="text-white font-bold text-h1 font-sora">
                      Model Listing
                    </h1>
                    <p className="text-white mt-1">The simplest model listing to use</p>
                    <div className="flex justify-center lg:justify-start mt-6">
                      <p
                        className="hover:bg-purple hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-purple mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                      >
                        Get Started
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full lg:w-1/2 justify-center h-[550px] items-center bg-white space-y-8">
                  <div className="w-full px-8 md:px-32 lg:px-12">
                    <form className=" rounded-md  p-5">
                      
                        <p className="text-h2 font-sora font-bold text-center">Login</p>

                          <div className="py-12">
                          
                             
                              <div class="relative h-11 w-full min-w-[200px]">
                                <input
                                 type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                  class="peer h-full  w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                                </label>
                              </div>
                              <div class="relative h-11 mt-10 w-full min-w-[200px]">
                                <input
                                 type="password"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                  class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                                </label>
                              </div>
                             
                         
                          </div>
                       
                      <button
                        type="submit"
                        onClick={handleLogin}
                        className="block w-full bg-purple font-sora mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                      >
                        Login
                      </button>
                      <div className="flex justify-between mt-4">
                        <span className="text-sm ml-2 text-h6 font-sora hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                          Forgot Password?
                        </span>
                        <p className="text-sm ml-2 font-sora text-h6 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                        >
                          Don't have an account yet? <span className="text-purple">Register</span>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
