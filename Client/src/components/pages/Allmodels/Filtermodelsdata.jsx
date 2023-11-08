import React from "react";
import { Modelone, Modeltwo, Modelthree } from "../../images";
import ModelingMade from "../Home/ModelingMade";
const Filtermodelsdata = () => {
  return (
    <>
      <div className="bg-black">
        <div className="container px-16 mx-auto py-12">
          <div className="grid grid-cols-12">
            <div className="md:col-span-4 col-span-12">
              <p className="text-purple">Categories</p>
            </div>
            <div className="md:col-span-8 col-span-12">
              <div className="grid md:grid-cols-2 grid-cols-1  gap-60">
                <div>
                  <p className="text-white text-h5 text-bold">All Modals</p>
                  <p className="text-white">Showing 5 results</p>
                </div>

                <div class="flex  items-center text-h6">
                  <span class=" bg-purple text-white py-[3.88%] px-6">
                    Sort by:
                  </span>
                  <select id="inputState" class="form-select px-4 w-56 py-4">
                    <option selected>Most relevant</option>
                    <option value="Full Day">Full Day</option>
                    <option value="Half Day">Half Day</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-4 py-16">
                <div class="relative">
                  <img src={Modelone} alt="modelone" class="w-full" />
                  <div class="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
                  <div class="absolute bottom-10 left-10 right-0  text-white py-4 px-2">
                    <p class="text-h3 w-20  font-semibold leading-8">
                      Dharsha Gupta
                    </p>
                    <button class="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
                      Art & Creative
                    </button>
                    <div class="text-white w-12 h-12 border-2  mt-14 rounded-full flex justify-center items-center ml-auto">
                      <i class="fa-solid fa fa-angle-right text-[20px]"></i>
                    </div>
                  </div>
                </div>

                <div class="relative">
                  <img src={Modeltwo} alt="modeltwo" class="w-full" />
                  <div class="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
                  <div class="absolute bottom-10 left-10 right-0  text-white py-4 px-2">
                    <p class="text-h3 w-20  font-semibold leading-8">
                      Kalyani Priyadarshan
                    </p>
                    <button class="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
                      Fitness & Wellness
                    </button>
                    <div class="text-white w-12 h-12 border-2  mt-14 rounded-full flex justify-center items-center ml-auto">
                      <i class="fa-solid fa fa-angle-right text-[20px]"></i>
                    </div>
                  </div>
                </div>

                <div class="relative">
                  <img src={Modelthree} alt="modelthree" class="w-full" />
                  <div class="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
                  <div class="absolute bottom-10 left-10 right-0  text-white py-4 px-2">
                    <p class="text-h3 w-20  font-semibold leading-8">
                      Hansika Motwani
                    </p>
                    <button class="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
                      Glamour & Beauty
                    </button>
                    <div class="text-white w-12 h-12 border-2  mt-14 rounded-full flex justify-center items-center ml-auto">
                      <i class="fa-solid fa fa-angle-right text-[20px]"></i>
                    </div>
                  </div>
                </div>

                <div class="relative">
                  <img src={Modelthree} alt="modelthree" class="w-full" />
                  <div class="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
                  <div class="absolute bottom-10 left-10 right-0  text-white py-4 px-2">
                    <p class="text-h3 w-20  font-semibold leading-8">
                      Hansika Motwani
                    </p>
                    <button class="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
                      Glamour & Beauty
                    </button>
                    <div class="text-white w-12 h-12 border-2  mt-14 rounded-full flex justify-center items-center ml-auto">
                      <i class="fa-solid fa fa-angle-right text-[20px]"></i>
                    </div>
                  </div>
                </div>


                <div class="relative">
                  <img src={Modeltwo} alt="modeltwo" class="w-full" />
                  <div class="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
                  <div class="absolute bottom-10 left-10 right-0  text-white py-4 px-2">
                    <p class="text-h3 w-20  font-semibold leading-8">
                      Kalyani Priyadarshan
                    </p>
                    <button class="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
                      Fitness & Wellness
                    </button>
                    <div class="text-white w-12 h-12 border-2  mt-14 rounded-full flex justify-center items-center ml-auto">
                      <i class="fa-solid fa fa-angle-right text-[20px]"></i>
                    </div>
                  </div>
                </div>

                <div class="relative">
                  <img src={Modelone} alt="model" class="w-full" />
                  <div class="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
                  <div class="absolute bottom-10 left-10 right-0  text-white py-4 px-2">
                    <p class="text-h3 w-20  font-semibold leading-8">
                      Dharsha Gupta
                    </p>
                    <button class="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
                      Art & Creative
                    </button>
                    <div class="text-white w-12 h-12 border-2  mt-14 rounded-full flex justify-center items-center ml-auto">
                      <i class="fa-solid fa fa-angle-right text-[20px]"></i>
                    </div>
                  </div>
                </div>

              </div>


              <div class="flex justify-center items-center ml-auto mt-7">
              <button class="bg-[purple] text-white py-4  sm:text-h4 lg:text-h5 px-10">
                <i class="fa-solid fa-search pr-5 mt-2 sm:pr-5"></i>
                Load More
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="transform ">
            <ModelingMade />
          </div>
    </>
  );
};

export default Filtermodelsdata;
