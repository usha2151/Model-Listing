import React from "react";
import { footerlogo } from "../images";
import { Link } from "react-router-dom";
import axios from "axios";
const Footer = () => {
  const handleSubscription = async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;

    // Perform client-side validation
    if (!email.trim()) {
      // Check if the email is empty or contains only whitespaces
      alert("Please fill in your email address.");
      return;
    }

    // Send subscription request to the server using Axios
    try {
      const response = await axios.post("http://localhost:8080/models/sentmail", {
        email: email,
      });

      console.log(response.data); // Handle server response as needed
    } catch (error) {
      console.error("Error sending subscription request:", error);
    }
  };
  return (
    <>
      <div className="bg-black container-fluid mx-auto font-sora py-5">
        <div className="bg-black container mx-auto px-16">
          <img
            src={footerlogo}
            alt=""
            className="rounded-fluid mx-auto pb-2"
          ></img>
          <div className="bg-black grid gap-6 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-12 2xl:grid-cols-12">
            <div className="bg-black md:col-span-8">
              <div className="bg-black grid md:grid-flow-col gap-x-6 md:w-6/7 lg:w-6/5 2xl:w-100">
                <div className="bg-black text-white text-justify w-100 xl:w-80">
                  <p className="md:text-h4 sm:text-sm my-5">WMHMODELS</p>
                  <p className="text-p text-gray font-sora">
         
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when anLorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book.
                  </p>
                </div>
                <div className="text-white bg-black">
                  <p className="text-h5 my-5 font-semibold">Quick links</p>
                  <ul className="text-gray text-h6 font-semibold">
                    <li className="my-2">
                      <Link to="#">Contact</Link>
                    </li>
                    <li className="my-2">
                      <Link to="#">About</Link>
                    </li>
                    <li className="my-2">
                      <Link to="#">All Models</Link>
                    </li>
                    <li className="my-2">
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li className="my-2">
                      <Link to="#">Terms and Condition</Link>
                    </li>
                  </ul>
                </div>
                <div className="text-white bg-black">
                  <p className="text-h5 my-5 font-semibold">DIFM Group</p>
                  <ul className="text-gray text-h6 font-semibold">
                    <li className="my-2">
                      <Link to="#">wmhindia.com</Link>
                    </li>
                    <li className="my-2">
                      <Link to="#">worldmodalhunt.com</Link>
                    </li>
                    <li className="my-2">
                      <Link to="#">ahealthplace.com</Link>
                    </li>
                    <li className="my-2">
                      <Link to="#">aeroway.com</Link>
                    </li>
                    <li className="my-2">
                      <Link to="#">earthbyhumans.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 lg:col-span-4 lg:w-100 lg:ml-auto my-5  bg-black">
              <div className="flex lg:justify-end space-x-5 ">
                <Link to="#" className="text-white">
                  <i className="fab fa-linkedin text-2xl border border-white rounded-full p-3"></i>
                </Link>
                <Link to="#" className="text-white">
                  <i className="far fa-envelope text-2xl border border-white rounded-full p-3"></i>
                </Link>
                <Link to="#" className="text-white">
                  <i className="fab fa-twitter text-2xl border border-white rounded-full p-3"></i>
                </Link>
                <Link to="#" className="text-white">
                  <i className="fab fa-facebook text-2xl border border-white rounded-full p-3"></i>
                </Link>
              </div>

              <div className="mt-4 md:mt-0 py-9 relative">
                <input
                  type="text"
                  id="emailInput"
                  placeholder="Enter your email"
                  className=" bg-gray-700 text-black border border-gray-600 py-4 px-4 pr-10 focus:outline-none focus:border-pink-500  md:w-auto"
                />
                <span className="text-purple-500 absolute right-3 top-14">
                  <i onClick={handleSubscription}
                    className="fa fa-bell fa-xl text-purple"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
          </div>

          <div className="text-white text-xs md:text-base sm:text-left md:text-center lg:text-p">
            <span className="text-white">@</span> DIFM.LLC,{" "}
            <span className="text-purple">2023,</span> All rights reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
