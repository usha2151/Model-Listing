import React, { useState } from "react";
import {
  HeroVideo,
  worldmodelhuntlogo,
  User,
  Right,
  Search,
  Meassage,
} from "../../images";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(true);
  }

  const leaveout = () => {
    setIsExpanded(false);
  }


  return (
    <>
      <div class="relative w-full h-screen font-sora">
        <video
          src={HeroVideo}
          autoPlay
          muted
          loop
          class="w-full h-screen object-cover absolute inset-0"
        />
         
      <div class="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-80 text-white"> 
        <div className="container mx-auto px-6 md:px-16">
        <div className="flex justify-center">
      <div
        onMouseLeave={leaveout}
        onMouseEnter={toggleExpansion}
        className={`relative text-white w-[290px] h-[65px] rounded-full top-6 bg-opacity-70 items-center flex px-1 bg-white ${
          isExpanded ? "w-[70%]" : ""
        } transition-width duration-1000 ease-in-out`}
      >
        <img src={worldmodelhuntlogo} alt="World Model Hunt Logo" />
        
        <div
          className={`absolute h-14 w-14 rounded-full  ${
            isExpanded ? "hidden" : "right-1"
          } bg-purple bg-opacity-50 p-1`}
        >
          <div
            className={`h-12 w-12 rounded-full ${
              isExpanded ? "right-3" : "left-3"
            } bg-purple text-center p-[13px]`}
            
          >
            <i className="fa-solid fa-bars text-[20px] "></i>
          </div>
        </div>
        {isExpanded && (
          <div className="text-center py-3 ml-auto mr-6 flex gap-10">
            <a href="/all_models" className="text-black">
              All Models
            </a>
            <a href="/about_us" className="text-black">
              About us
            </a>
            <a href="/model_profile" className="text-black">
              Contact us
            </a>
            <a href="/model_profile" className="text-black">
            About Us
            </a>
            <a href="/model_profile" className="text-black">
            Login 
            </a>
            <a href="/model_profile" className="text-black">
            Register 
            </a>
          </div>
        )}
      </div>
    </div>

            <div class="text-h2 md:text-h1 lg:text-[80px] text-purple font-bold lg:mt-96 sm:mt-72">
              Find Perfect Models
            </div>
            <p class="text-[20px] md:text-[25px] lg:text-[40px] md:-mt-4">
              Start Your Modeling Journey Now!
            </p>
            <div class="mt-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 justify-center">
              <div>
                <label class="text-white lg:text-h6 sm:text-[20px] md:text-[15px]">
                  What you'd like to find?
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Keyword to Search.....?"
                  class="w-full py-3  mt-2 border-2 border-[#D9D9D9] lg:text-[15px] sm:text-[20px] md:text-[15px] pl-4"
                />
              </div>
              <div>
                <label class="text-white lg:text-h6 sm:text-[20px] md:text-[15px]">
                  In which category?
                </label>
                <br />
                <div class="relative">
                  <input
                    type="text"
                    placeholder="All Categories ....."
                    class="w-full py-3  mt-2 border-2 border-[#D9D9D9] lg:text-[15px] sm:text-[20px] md:text-[15px] pl-4"
                  />
                  <i class="fa-solid fa-caret-down text-[#6A6A6A] absolute right-4 top-4 lg:text-[30px] sm:text-[40px]"></i>
                </div>
              </div>
            </div>
            <div class="flex justify-end items-end ml-auto mt-7">
              <button class="bg-[purple] text-white py-4  sm:text-h4 lg:text-h5 md:text-h6 px-10">
                <i class="fa-solid fa-search pr-5 mt-2 sm:pr-5"></i>
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-black ">
        <div className="container mx-auto px-12 py-6">
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-8  text-white">
          <div className="flex">
            <img src={User} alt="model" />
            <div className="mt-4">
              <h1 className="text-[14px] font-bold">Portfolio Management</h1> 
                <p className="text-[13px] mt-2 text-[#D9D9D9]">
                  Craft a stunning profile to display your portfolio and
                  expertise.
                </p>
             
            </div>
          </div>
          <div className="flex">
            <img src={Right} alt="model" />
            <div className="mt-4">
              <h1 className="text-[14px] font-bold">Easy Coordination</h1>
                <p className="text-[13px] mt-2 text-[#D9D9D9]">
                  Easily organize schedules for seamless coordination.
                </p>
            </div>
          </div>
          <div className="flex">
            <img src={Search} alt="model" />
            <div className="mt-4">
              <h1 className="text-[14px] font-bold">Search and Discoveryt</h1>       
                <p className="text-[13px] mt-2 text-[#D9D9D9]">
                  Find the perfect talent with advanced search filters.
                </p>
            </div>
          </div>
          <div className="flex">
            <img src={Meassage} alt="model" />
            <div className="mt-4">
              <h1 className="text-[14px] font-bold">Real-time Messaging</h1>
                <p className="text-[13px] mt-2 text-[#D9D9D9]">
                  Connect and communicate directly for smooth collaborations.
                </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
