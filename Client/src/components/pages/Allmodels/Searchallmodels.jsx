
import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom"; // Updated import
import { searchmodels } from "../../images";
import Filtermodelsdata from "./Filtermodelsdata";
import Navbar from "../../common/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchModels } from "../../../Redux/Actions/action";

const Searchallmodels = () => {
  const {category,keyword}=useParams()

  const navigate = useNavigate(); // Updated hook
  const user = useSelector((state) => state.fetchModelsReducer.models);
  const [searchKeyword, setSearchKeyword] = useState(keyword || "");
  const [selectedCategory, setSelectedCategory] = useState(category || "All");
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch models only if both keyword and category are present in the URL
    if (keyword !== undefined && category !== undefined) {
      // If values are present, set them as initial state
      setSearchKeyword(keyword);
      setSelectedCategory(category);
      dispatch(fetchModels());
    } else {
      // Handle the case when values are not present in the URL
      // You can choose to set default values or perform any other action
      setSearchKeyword("");
      setSelectedCategory("All");
    }
  }, [dispatch, keyword, category]);


  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);

  const handleSearch = () => {
    // Update URL parameters when the search button is clicked
    navigate(`/modeldata/${searchKeyword}/${selectedCategory}`);
  };

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

          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5">
            <p className="xl:text-h3 2xl:text-h2 lg:text-h2 sm:text-h4 font-bold">
              Explore over in the world <span className="text-purple">1000+ models</span>
            </p>

            <div className="mt-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 justify-center">
              <div>
                <label className="text-white lg:text-h6 sm:text-[15px]">
                  What you'd like to find?
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Keyword to Search.....?"
                  className="text-black w-full py-3 mt-2 border-2 border-[#D9D9D9] lg:text-[15px] sm:text-[12px] pl-4"
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>
              <div>
                <label className="text-white lg:text-h6 sm:text-[15px]">
                  In which category?
                </label>
                <br />
                <div className="relative">
                  <input
                    type="text"
                    placeholder="All Categories ....."
                    className="text-black w-full py-3 mt-2 border-2 border-[#D9D9D9] lg:text-[15px] sm:text-[12px] pl-4"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <i className="fa-solid fa-caret-down text-[#6A6A6A] absolute right-4 top-4 lg:text-[30px] sm:text-[30px]"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-end ml-auto mt-7">
              <button
                onClick={handleSearch}
                className="bg-[purple] text-white py-4 sm:text-h6 lg:text-h5 px-10"
              >
                <i className="fa-solid fa-search pr-5 mt-2 sm:pr-5"></i>
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>
      {user.length && (
        <Filtermodelsdata
          user={user}
          searchKeyword={searchKeyword}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </>
  );
};

export default Searchallmodels;
