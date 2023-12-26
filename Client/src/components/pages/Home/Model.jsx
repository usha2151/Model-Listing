import React, { useEffect } from "react";
import {
  Arrowr,
  Modelone,
  Modeltwo,
  Modelthree,
  Modelfour,
} from "../../images";
import { useDispatch, useSelector } from 'react-redux';
import { fetchModels, filterModelsById } from "../../../Redux/Actions/action";
import { Link } from "react-router-dom";

const Model = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.fetchModelsReducer.models);

  useEffect(() => {
    dispatch(fetchModels());
  }, []);

  const handleModelData = (id) => {
    const filterModelData = user.filter(item => item._id === id);
    if (filterModelData.length > 0) { // Check if there's any matching data
      dispatch(filterModelsById(filterModelData[0])); // Pass the first matching item
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className="flex justify-end mr-40 mt-8 font-sora">
        <p className="text-[#151515] text-[18px] font-semibold mr-4">
          Show All Models
        </p>
        <img src={Arrowr} alt="model" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-16">
        {user.length > 0 && user.map((data, index) => (
          <Link to={`/model_profile/${data._id}`} key={index}>
            <div className="relative">
              <img src={`http://localhost:8080/public/upload/${data.images[0]}`} alt="model" className="w-full h-[460px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white to-[#000] mix-blend-multiply"></div>
              <div className="absolute bottom-10 left-10 right-0  text-white py-4 px-2">
                <p className="text-h3 w-20 font-semibold leading-8">{data.name}</p>
                <button className="text-white bg-gradient-to-b from-[#941196] to-black px-5 py-2 text-p mt-5 rounded-full">
                  {data.specialization}
                </button>
                <div onClick={() => handleModelData(data._id)} className="text-white w-12 h-12 border-2 mt-14 rounded-full flex justify-center items-center ml-auto ">
                  <i className="fa-solid fa fa-angle-right text-[20px]"></i>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Model;
