import React from "react";
import {
  calltoaction,
  left_arrow,
  right_arrow,
  Arrow9,
  Arrow10,
} from "../../images";

const Calltoaction = () => {
  return (
    <>
      <div className="py-16 bg-black">
        <div className="flex items-center gap-6 lg:justify-center md:justify-evenly">
          <div>
            <img
              src={right_arrow}
              alt="rightarrow"
              className="rounded-fluid "
            />
          </div>
          <div className="text-center text-h6 text-white font-bold  md:text-h4  sm:text-h5 xs:text-h6">
            Our Mission
          </div>
          <div>
            <img src={left_arrow} alt="leftarrow" />
          </div>
        </div>
      </div>

      <div class="relative py-20 bg-black font-sora">
        <div class="w-full h-[700px] bg-black bg-opacity-80 relative">
          <img
            class="w-full h-full"
            src={calltoaction}
            alt="Description of the images"
          />
          <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center text-white">
            <div class="container mx-auto px-10">
              <div class="grid lg:grid-cols-2  sm:grid-cols-1 place-items-center">
                <div>
                  <p className="text-h3 font-semibold">
                    Join With Us In This <br />
                    Network
                  </p>
                  <p className="text-p sm:w-64 md:w-80 lg:w-96 text-justify mt-7 mb-7">
                    At WMH Models, our mission transcends industry norms. We
                    strive to revolutionize the modeling landscape by empowering
                    talent and fostering genuine connections. Through
                    cutting-edge technology and unwavering commitment, we aim to
                    provide a platform where every aspiring model can find their
                    path to success, and every individual can discover the
                    perfect fit. Together, we're reshaping the future of
                    modeling, one meaningful connection at a time.
                  </p>
                </div>
                <div>
                  <button className="bg-purple px-20 py-5 text-h5 font-semibold">
                    Register as a Model
                  </button>
                  <div className="px-16 py-5">
                    <img src={Arrow9} alt="arrow"/>
                    <img src={Arrow10} alt="arrow"/>
                  </div>
                  <button className="bg-white px-20 py-5 text-h5 font-semibold text-black">
                    Register as a User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calltoaction;
