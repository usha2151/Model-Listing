import React, { useState } from "react";
import { signup } from "../images";
import Navbar from "../common/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterModel, RegisterUser } from "../../Redux/Actions/action";

const SignUp = () => {

  const [isModel, setIsModel] = useState(true);
  const [isUser, setIsUser] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterAsModel = () => {
    setIsModel(true);
    setIsUser(false);
  };

  const handleRegisterAsUser = () => {
    setIsModel(false);
    setIsUser(true);
  };

   //=============this for models==============
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    specialization: "",
    experience: "",
    file: [], // Add an image property to the user object
    password: "",
    confirm_password: "",
  });

  const setdata = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {    
      setFormData({ ...formData, [name]: e.target.files});   
    } else {  
      setFormData({ ...formData, [name]: value });
    }
  };
 
  
  const handleModelFormSubmit = async (e) => {
    
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }
    dispatch(RegisterModel(formData));
  };


  //===================this for user==============
  const [formUserData, setFormUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
  });

  const setdatas = (e) => {
    const { name, value } = e.target;
    setFormUserData({ ...formUserData, [name]: value });
    
  };
 
  const handleUserFormSubmit = async (e) => {
    e.preventDefault();
    if (formUserData.password !== formUserData.confirm_password) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }
    dispatch(RegisterUser(formUserData));
  };

  return (
    <>
      <div className="relative font-sora">
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
                    <p className="text-white mt-1">
                      The simplest model listing to use
                    </p>
                    <div className="flex justify-center lg:justify-start mt-6">
                      <p className="hover:bg-purple hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-purple mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                      >
                        Get Started
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full lg:w-1/2 justify-center h-[550px] items-center bg-white space-y-8">
                  <div className="w-full px-8 md:px-32 lg:px-12">
                    <form className=" rounded-md  p-5">


                      {isModel && (
                        <>
                          <div className="flex justify-center">
                            <button className="bg-purple px-14 py-3 text-white rounded-l-3xl font-sora" onClick={handleRegisterAsModel}>Model</button>
                            <button className="bg-gray  px-14 py-3 text-purple rounded-r-3xl font-sora" onClick={handleRegisterAsUser}> User</button>
                          </div>

                          <form action="" className="md:h-64" encType="multipart/form-data">
                            <div class="grid md:grid-cols-2 md:gap-6 mt-8">
                              <div class="relative h-11 w-full min-w-[200px]">
                                <input class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdata}
                                  value={formData.name}
                                  name="name"
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Full Name
                                </label>
                              </div>

                              <div class="relative h-11 w-full min-w-[200px]">
                                <input class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdata}
                                  value={formData.email}
                                  name="email"
                                  type="email"
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Email Address
                                </label>
                              </div>

                              <div class="relative h-11 w-full min-w-[200px]">
                                <input class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdata}
                                  value={formData.mobile}
                                  name="mobile"
                                  type="number"
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Mobile
                                </label>
                              </div>

                              <div className="relative h-11 w-full min-w-[200px]">
                                <select
                                onChange={setdata}
                                value={formData.experience}
                                name="experience"
                                className="peer  w-full border-b-2 text-h6 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                  <option value="" className="none h-2"></option>
                                  <option value="Fresher">Fresher</option>
                                  <option value="1 year">1 year</option>
                                  <option value="2 year">2 year</option>
                                  <option value="3 year">3 year</option>
                                  <option value="4 year">4 year</option>
                                  <option value="5 year">5 year</option>
                                  <option value="6 year">6 year</option>
                                </select>
                                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-9 text-black transition-all after:absolute after:-bottom-1.5  after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Experience
                                </label>
                              </div>

                              <div className="relative h-11 w-full min-w-[200px]">
                                <select className="peer h-full w-full text-h6 border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdata}
                                  value={formData.specialization}
                                  name="specialization"
                                  type="text"
                                >
                                  <option value="" className="none h-2"></option>
                                  <option value="Fashion">Fashion</option>
                                  <option value="Commercial">Commercial</option>
                                  <option value="Fitness">Fitness</option>
                                  <option value="Glamour">Glamour</option>
                                  <option value="Runway">Runway</option>
                                  <option value="Plus-Size">Plus-Size</option>
                                  <option value="Alternative">Alternative</option>
                                  <option value="Promotional">Promotional</option>
                                  <option value="Parts">Parts</option>
                                  <option value="Editorial">Editorial</option>
                                </select>
                                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-9 text-black transition-all after:absolute after:-bottom-1.5  after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent ">
                                  Specialization
                                </label>
                              </div>

                              <div class="relative h-11 w-full min-w-[200px]">
                                <input type="file" name="file" onChange={setdata} accept="image/*" multiple class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                />
                             <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Picture
                                </label>
                              </div>

                              <div class="relative h-11 w-full min-w-[200px]">
                                <input  class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdata}
                                  value={formData.password}
                                  name="password"
                                  type="password"
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Password
                                </label>
                              </div>

                              <div class="relative h-11 w-full min-w-[200px]">
                                <input class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdata}
                                  value={formData.confirm_password}
                                  name="confirm_password"
                                  type="password"
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Confirm Password
                                </label>
                              </div>

                            </div>
                          </form>
                        </>
                      )}

                      {isUser && (
                        <>
                          <div className="flex justify-center">
                            <button className="bg-gray px-14 py-3 text-purple rounded-l-3xl font-sora" onClick={handleRegisterAsModel}> Model </button>
                            <button className="bg-purple px-14 py-3 text-white rounded-r-3xl font-bold font-sora" onClick={handleRegisterAsUser}> User</button>
                          </div>

                          <form className="h-64">
                            <div class="grid md:grid-cols-2 md:gap-6 mt-8">

                              <div class="relative h-11 w-full min-w-[200px]">
                                <input class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdatas}
                                  value={formUserData.fname}
                                  name="fname"
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  First Name
                                </label>
                              </div>

                              <div class="relative h-11 w-full min-w-[200px]">
                                <input class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdatas}
                                  value={formUserData.lname}
                                  name="lname"
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Last Name
                                </label>
                              </div>

                              <div class="relative h-11 w-full min-w-[200px]">
                                <input class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdatas}
                                  value={formUserData.mobile}
                                  name="mobile"
                                  type="number"
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Mobile
                                </label>
                              </div>

                              <div class="relative h-11 w-full min-w-[200px]">
                                <input class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdatas}
                                  value={formUserData.email}
                                  name="email"
                                  type="email"
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Email
                                </label>
                              </div>

                              <div class="relative h-11 w-full min-w-[200px]">
                                <input class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdatas}
                                  value={formUserData.password}
                                  name="password"
                                  type="password"
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Password
                                </label>
                              </div>

                              <div class="relative h-11 w-full min-w-[200px]">
                                <input class="peer h-full w-full border-b-2 border-gray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeholder=" "
                                  onChange={setdatas}
                                  value={formUserData.confirm_password}
                                  name="confirm_password"
                                  type="password"
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-purple after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25]  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple peer-focus:after:scale-x-100 peer-focus:after:border-purple peer-disabled:text-transparent">
                                  Confirm Password
                                </label>
                              </div>

                            </div>
                          </form>
                        </>
                      )}


                      <button  type="submit" onClick={isModel ? handleModelFormSubmit : handleUserFormSubmit} className="block w-full text-center bg-purple font-sora mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">
                        Signup
                      </button>
                      <div className="flex justify-between mt-4">
                        <span className="text-sm ml-2 text-h6 font-sora hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                          Forgot Password?
                        </span>
                        <p className="text-sm ml-2 font-sora text-h6 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                          Don't have an account yet?{" "}
                          <span className="text-purple">Login</span>
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

export default SignUp;
