import React from 'react';
import { Modelthree } from '../../images';
import Navbar from '../../common/Navbar';

const Abouthero = () => {
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
          <div className="text-white absolute top-1/2 right-0 sm:right-[30px] md:right-[120px] lg:right-[80px] 2xl:right-[180px] transform -translate-y-1/2 mt-5">
            <div className="container mx-auto px-6 md:px-20">
              <p className="xl:text-h3 2xl:text-h2 lg:text-h2 text-end sm:text-h4 text-purple font-bold">
                World Modal Hunt
              </p>
              <p className=" w-auto sm:w-[430px] text-justify">
                WMH offers a fresh perspective, connecting models with a global audience. Our platform isn't just about modeling; we produce engaging talk shows and feature models regularly to keep you updated on industry trends. Join us in shaping the future of entertainment!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abouthero;
