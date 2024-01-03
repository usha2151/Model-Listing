import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { underline, purpleline } from "../../images";

const Discovermodelbyexpertise = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.fetchModelsReducer.models);

  // Create an object to store the latest update date for each specialization
  const latestUpdateBySpecialization = {};
  // Create an object to store the latest index for each specialization
  const latestIndexBySpecialization = {};

  // Filter the latest data for each specialization
  const latestData = user.reduce((acc, current, index) => {
    const currentDate = new Date(current.updated_at);
    const accDate = acc ? new Date(acc.updated_at) : null;

    if (!accDate || currentDate > accDate) {
      // Update the latest update date for the specialization
      latestUpdateBySpecialization[current.specialization] = current.updated_at;
      // Update the latest index for the specialization
      latestIndexBySpecialization[current.specialization] = index;
      return current;
    } else {
      return acc;
    }
  }, null);

  


  return (
    <>
      <div className="container mx-auto px-16 font-sora">
        <div className="container py-16 mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.keys(latestIndexBySpecialization).map((specialization) => {
            const index = latestIndexBySpecialization[specialization];
            const item = user[index];

            let imageSizeClass = 'h-[300px]'; // Default size

            if (index === 0) {
              imageSizeClass = 'h-[400px]';
            } else if (index === 1) {
              imageSizeClass = 'h-[500px]';
            }

            return (
              <div key={index} className="relative">
                <img
                  src={`http://localhost:8080/public/upload/${item.images[0]}`}
                  alt={`girl_${index + 1}`}
                  className={`rounded-fluid bg-cover object-cover ${imageSizeClass}`}
                />
                <div className="absolute inset-0 bg-opacity-80 flex justify-center items-center text-white">
                  <p className="2xl:text-xl lg:text-h5 font-Graphik">
                    {item.specialization}
                    <img
                      src={underline}
                      alt="underline"
                      className="justify-center items-center w-3/4 mx-auto"
                    />
                    <img
                      src={purpleline}
                      alt="purpleline"
                      className="justify-center items-center w-3/6 mx-auto"
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Discovermodelbyexpertise;
