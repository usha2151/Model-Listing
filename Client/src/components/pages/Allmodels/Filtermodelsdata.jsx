import React, { useState } from "react";
import ModelingMade from "../Home/ModelingMade";
import { useDispatch, useSelector } from "react-redux";
import { filterModelsById } from "../../../Redux/Actions/action";
import { Link } from "react-router-dom";
const Filtermodelsdata = () => {
  const user = useSelector((state) => state.fetchModelsReducer.models);
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");  
  const dispatch = useDispatch();

  const handleModelData = (id) => {
    const filterModelData = user.filter(item => item._id === id);
    if (filterModelData.length > 0) { // Check if there's any matching data
      dispatch(filterModelsById(filterModelData[0])); // Pass the first matching item
    }
    
  }

  // Filter users based on selected specialization
  const filteredUsers =
    selectedSpecialization === "All"
      ? user
      : user.filter((userData) => userData.specialization === selectedSpecialization);

  const allSpecializations = ["All", ...new Set(user.map((userData) => userData.specialization))];


  return (
    <>
      <div className="bg-black">
        <div className="container px-16 mx-auto py-12">
          <div className="grid grid-cols-12">
            <div className="md:col-span-4 col-span-12">
              <p className="text-purple">Categories</p>
            </div>
            <div className="md:col-span-8 col-span-12">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-60">
                <div>
                  <p className="text-white text-h5 text-bold">All Modals</p>
                  <p className="text-white">
                    Showing {filteredUsers.length} results
                  </p>
                </div>

                <div className="flex items-center text-h6">
                  <span className="bg-purple text-white py-[3.88%] px-6">
                    Sort by:
                  </span>
                  <select
                    id="inputState"
                    className="form-select px-4 w-56 py-4"
                    onChange={(e) => setSelectedSpecialization(e.target.value)}
                    value={selectedSpecialization}
                  >
                    {allSpecializations.map((specialization) => (
                      <option key={specialization} value={specialization}>
                        {specialization}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-4 py-16">
                {filteredUsers.map((userData, index) => (
                  <div key={index} className="relative">
                    <img
                      src={`http://localhost:8080/public/upload/${userData.images[0]}`}
                      alt={`model-${index}`}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
                    <div className="absolute bottom-10 left-10 right-0 text-white py-4 px-2">
                      <p className="text-h3 w-20 font-semibold leading-8">
                        {userData.name}
                      </p>
                      <button className="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
                        {userData.specialization}
                      </button>
                      <div className="text-white w-12 h-12 border-2 mt-14 rounded-full flex justify-center items-center ml-auto">
  <Link to={`/model_profile/${userData._id}`}>
    <i
      className="fa-solid fa fa-angle-right text-[20px] cursor-pointer"
      onClick={() => handleModelData(userData._id)} // Add onClick event
    ></i>
  </Link>
</div>

                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex justify-center items-center ml-auto mt-7"
                style={{ marginTop: "10px" }}
              >
                <button className="bg-[purple] text-white py-4 sm:text-h4 lg:text-h5 px-10">
                  <i className="fa-solid fa-search pr-5 mt-2 sm:pr-5"></i>
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="transform">
        <ModelingMade />
      </div>
    </>
  );
};

export default Filtermodelsdata;
