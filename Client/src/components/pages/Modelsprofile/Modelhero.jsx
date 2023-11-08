import React from 'react';
import { Modelthree } from '../../images';
import Navbar from '../../common/Navbar';

const Modelhero = () => {
  return (
    <>
      <div className="relative">
        <div
          className="bg-cover bg-center h-[600px] p-6 w-full"
          style={{
            backgroundImage: `url(${Modelthree})`,
          }}
        >
          <div className="bg-black opacity-60 absolute top-0 left-0 h-full w-full"></div>
          <div className="transform ">
            <Navbar />
          </div>

          {/* Text on top of the image */}
          <div className="text-white absolute top-1/2 left-[40px] sm:left-[40px] md:left-[0px] 2xl:left-[110px] transform -translate-y-1/2 mt-5">
            <div className="container mx-auto px-6 md:px-20">
              <p className="xl:text-h3 2xl:text-h2 lg:text-h2 sm:text-h4 text-purple font-bold">
                World Model Hunt
              </p>
              <p className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
                WMH offers a fresh perspective, connecting models with a global audience. Our platform isn't just about modeling; we produce engaging talk shows and feature models regularly to keep you updated on industry trends. Join us in shaping the future of entertainment!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modelhero;
