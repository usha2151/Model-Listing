import React from "react";
import {
  Magazinelogo,
  Careerlogo,
  Calenderlogo,
  Talkshowlogo,
} from "../../images";
import { left_arrow, right_arrow } from "../../images";

const Services = () => {
  return (
    <>
      <div className=" bg-black">
        <div className="container mx-auto px-16 bg-black text-white p-10">
          {/* Services */}
          <div className=" ">
            <div className="flex py-16 items-center justify-center gap-5 space-x-10">
              <span className="">
                <img
                  src={right_arrow}
                  alt="rightarrow"
                  className="rounded-fluid "
                />
              </span>
              <div className="w-100">
                <div className="text-center font-sora text-h5 text-white font-bold  md:text-h4  sm:text-h5 xs:text-h6">
                  Services
                </div>
              </div>
              <div>
                <img
                  src={left_arrow}
                  alt="leftarrow"
                  className="rounded-fluid "
                />
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-4  ">
            {/* Left Side  */}
            {/* Column 1  */}
            <div className="grid md:grid-cols-2 gap-3">
              <div className="">
                <div className="h-64 bg-black  flex justify-center items-center text-h3 border border-white">
                  <img src={Magazinelogo} alt="Magazinelogo" class="" /> &nbsp;
                  Magazine
                </div>
                <div className="bg-white h-64  text-black text-justify p-8 leading-2  font-sora rounded-bl-[30px]">
                  World Model Hunt (WMH) periodically publishes monthly
                  magazines and special editions for our audience. These
                  magazines feature the best upcoming models from around the
                  world..
                </div>
              </div>
              {/* Column 2  */}
              <div className="border bg-white border-white rounded-tr-[30px]  flex md:flex-col flex-col-reverse">
                <div className=" text-black p-8 leading-2  font-sora h-64">
                  World Model Hunt (WMH) periodically publishes monthly
                  magazines and special editions for our audience. These
                  magazines feature the best upcoming models from around the
                  world..
                </div>
                <div className="bg-black  h-64 flex justify-center items-center border border-white rounded-tr-[30px] md:rounded-none text-h3">
                  <img src={Careerlogo} alt="Careerlogo" class="" /> &nbsp;
                  Career
                </div>
              </div>
            </div>

            {/* Risa Side  */}
            {/*  */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="">
                <div className="bg-black h-64 flex justify-center items-center text-h3 border border-white">
                  <img src={Calenderlogo} alt="Magazinelogo" class="" /> &nbsp;
                  Calender
                </div>

                <div className="bg-white text-black h-64 text-justify p-8 leading-2  font-sora rounded-bl-[30px]">
                  World Model Hunt (WMH) presents Model Insights, a Talk show
                  designed for models. Available to watch for free, it’s a
                  one-of-a-kind show providing upcoming models with the struggle
                  stories from uprising models...
                </div>
              </div>
              {/* Column 2  */}
              <div className="flex md:flex-col flex-col-reverse">
                <div className="bg-white text-black text-justify p-8 leading-2 h-64 font-sora md:rounded-tr-[30px] border border-white">
                  World Model Hunt (WMH) periodically publishes monthly
                  magazines and special editions for our audience. These
                  magazines feature the best upcoming models from around the
                  world..
                </div>
                <div className="bg-black h-64 flex justify-center items-center text-h3 border border-white md:rounded-none rounded-tr-[30px] ">
                  <img src={Talkshowlogo} alt="Magazinelogo" class="" /> &nbsp;
                  Talkshow
                </div>
              </div>
            </div>
          </div>
        <div>
            
          </div>
        </div>


      </div>
    </>
  );
};

export default Services;
