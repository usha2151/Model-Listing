import React from "react";
import {
  Arrowr,
  Modelone,
  Modeltwo,
  Modelthree,
  Modelfour,
} from "../../images";

const Model = () => {
  return (
    <>
      <div className="flex justify-end mr-40 mt-8 font-sora">
        <p className="text-[#151515] text-[18px] font-semibold mr-4">
          Show All Models
        </p>
        <img src={Arrowr} alt="model" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-16">
        <div class="relative">
          <img src={Modelone} alt="model" class="w-full" />
          <div class="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
          <div class="absolute bottom-10 left-10 right-0  text-white py-4 px-2">
            <p class="text-h3 w-20  font-semibold leading-8">Dharsha Gupta</p>
            <button class="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
              Art & Creative
            </button>
            <div class="text-white w-12 h-12 border-2  mt-14 rounded-full flex justify-center items-center ml-auto ">
              <i class="fa-solid fa fa-angle-right text-[20px]"></i>
            </div>
          </div>
        </div>

        <div class="relative">
          <img src={Modeltwo} alt="model" class="w-full" />
          <div class="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
          <div class="absolute bottom-10 left-10 right-0  text-white py-4 px-2">
            <p class="text-h3 w-20  font-semibold leading-8">
              Kalyani Priyadarshan
            </p>
            <button class="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
              Fitness & Wellness
            </button>
            <div class="text-white w-12 h-12 border-2  mt-14 rounded-full flex justify-center items-center ml-auto ">
              <i class="fa-solid fa fa-angle-right text-[20px]"></i>
            </div>
          </div>
        </div>

        <div class="relative">
          <img src={Modelthree} alt="model" class="w-full" />
          <div class="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
          <div class="absolute bottom-10 left-10 right-0  text-white py-4 px-2">
            <p class="text-h3 w-20  font-semibold leading-8">Hansika Motwani</p>
            <button class="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
              Glamour & Beauty
            </button>
            <div class="text-white w-12 h-12 border-2  mt-14 rounded-full flex justify-center items-center ml-auto ">
              <i class="fa-solid fa fa-angle-right text-[20px]"></i>
            </div>
          </div>
        </div>

        <div class="relative">
          <img src={Modelfour} alt="model" class="w-full" />
          <div class="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
          <div class="absolute bottom-10 left-10 right-0  text-white py-4 px-2">
            <p class="text-h3 w-20  font-semibold leading-8">
              Aishwarya Lekshmi
            </p>
            <button class="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
              Commercial & Acting
            </button>
            <div class="text-white w-12 h-12 border-2  mt-14 rounded-full flex justify-center items-center ml-auto ">
              <i class="fa-solid fa fa-angle-right text-[20px]"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
