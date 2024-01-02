import React, { useEffect } from "react";
import { searchmodels } from "../../images";
import Filtermodelsdata from "./Filtermodelsdata";
import Navbar from "../../common/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchModels } from "../../../Redux/Actions/action";


const Searchallmodels = () => {
  const user = useSelector(state => state.fetchModelsReducer.models);

  const dispatch = useDispatch();
console.log(user);
  useEffect(() => {
    dispatch(fetchModels());
  }, [user]);

  return (
    <>
      <div className="relative">
        <div
          className="bg-cover bg-center h-[600px] p-6 w-full"
          style={{
            backgroundImage: `url(${searchmodels})`,
          }}
        >
          <div className="bg-black opacity-60 absolute top-0 left-0 h-full w-full"></div>
          <div className="transform ">
            <Navbar />
          </div>
          {/* Black overlay */}

          {/* Text on top of the image */}
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5">
            <p className="xl:text-h3 2xl:text-h2 lg:text-h2 sm:text-h4 font-bold">
              Explore over in the world{" "}
              <span className="text-purple">1000+ models</span>
            </p>

            <div class="mt-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 justify-center">
              <div>
                <label class="text-white lg:text-h6 sm:text-[15px]">
                  What you'd like to find?
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Keyword to Search.....?"
                  class=" text-black w-full py-3  mt-2 border-2  border-[#D9D9D9] lg:text-[15px] sm:text-[12px] pl-4"
                />
              </div>
              <div>
                <label class="text-white lg:text-h6 sm:text-[15px]">
                  In which category?
                </label>
                <br />
                <div class="relative">
                  <input
                    type="text"
                    placeholder="All Categories ....."
                    class="text-black  w-full py-3  mt-2 border-2 border-[#D9D9D9] lg:text-[15px] sm:text-[12px] pl-4"
                  />
                  <i class="fa-solid fa-caret-down text-[#6A6A6A] absolute right-4 top-4 lg:text-[30px] sm:text-[30px]"></i>
                </div>
              </div>
            </div>
            <div class="flex justify-end items-end ml-auto mt-7">
              <button class="bg-[purple] text-white py-4  sm:text-h6  lg:text-h5 px-10">
                <i class="fa-solid fa-search pr-5 mt-2 sm:pr-5"></i>
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>
{
  user.length && 
<Filtermodelsdata user={user}/>
}
    </>
  );
};

export default Searchallmodels;
