import React from "react";

import {
  modelimage1,
  modelimage2,
  modelimage3,
  modelimage4,
  modelimage5,
  modelimage6,
  modelimage7,
  modelimage8,
} from "../../images";

const Modelprofilegallery = ({props,imageprops}) => {

  console.log("usha ksjhdks ksdfjhds", imageprops);

  // Check if imageprops is defined and has at least one element
  if (!imageprops || imageprops.length === 0) {
    // Handle the case where imageprops is not valid
    return <div>Error: Invalid imageprops</div>;
  }
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto py-16 bg-black max-h-max">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 ">
            {/* column 1 */}
            <div className="grid gap-3">
              <div
                className="h-[400px] bg-black bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
                style={{
                  backgroundImage: `url(http://localhost:8080/public/upload/${imageprops[1]})`,

                }}
              ></div>
              <div
                className="h-[600px] bg-gray bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
                style={{
                  backgroundImage: `url(${modelimage2})`,
                }}
              ></div>
            </div>
            {/* column 2 */}
            <div className="grid gap-3">
              <div
                className="h-[550px] bg-darkgray bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
                style={{
                  backgroundImage: `url(${modelimage3})`,
                }}
              ></div>
              <div
                className="h-[450px] bg-second-black bg-cover bg-no-repeat border-transparent border-8 hover:border-purple transition duration-1000"
                style={{
                  backgroundImage: `url(${modelimage4})`,
                }}
              ></div>
            </div>
            {/* column 3 */}
            <div className="grid gap-3">
              <div
                className="h-[600px] bg-white bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
                style={{
                  backgroundImage: `url(${modelimage5})`,
                }}
              ></div>
              <div
                className="h-[400px] bg-black bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
                style={{
                  backgroundImage: `url(${modelimage6})`,
                }}
              ></div>
            </div>
            {/* column 4 */}
            <div className="grid gap-3">
              <div
                className="h-[500px] bg-black bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
                style={{
                  backgroundImage: `url(${modelimage7})`,
                }}
              ></div>
              <div
                className="h-[500px] bg-gray bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
                style={{
                  backgroundImage: `url(${modelimage8})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modelprofilegallery;
