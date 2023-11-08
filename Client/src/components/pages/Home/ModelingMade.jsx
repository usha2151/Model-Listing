import React from 'react'
import { modeling_made1, modeling_made2, left_arrow, right_arrow, Arrowr,} from '../../images'
const ModelingMade = () => {
  return (
    <>
      {/* FUll CONTAINER STARTS */}
      <div className="container mx-auto py-20 font-sora">
        {/* MODELING MADE EFFORTLESS  */}

        <div className="md:w-100  mb-16">
          <div className="flex  bg-white items-center justify-center gap-5">
            <span className="">
              <img
                src={right_arrow}
                alt="rightarrow"
                className="rounded-fluid "
              />
            </span>
            <div className="w-100">
              <div className="text-center text-h5 text-purple font-bold  md:text-h4  sm:text-h5 xs:text-h6">
                Modeling Made Effortless
              </div>
            </div>
            <div>
              <img
                src={left_arrow}
                alt="leftarrow"
                className="rounded-fluid "
              />
            </div>
          </div>
        </div>

        {/* MODELING MADE EFFORTLESS ENDS */}
        <div className="container grid md:grid-cols-2 sm:grid-cols-1 gap-12">
          {/* Left side  */}
          <div className="md:py-6 sm:py-2 mx-auto">
            <div className="flex md:flex-col flex-col-reverse">
              <div className="lg:pb-40 md:pb-20 md:px-10 lg:w-100  ">
                <p className="lg:text-h5 md:text:h6 sm:text:h6 font-semibold py-2 sm:py-1">
                  About WMH Models
                </p>
                <p className="lg:text-h2 md:text-h4 sm:text-h5 xs:text-h6 font-semibold md:order-2">
                  Meet our confident models, ready to bring your vision to life.
                </p>
              </div>
              <div className="">
                <img
                  src={modeling_made2}
                  alt="modelingmade2"
                  className="rounded-fluid mx-auto pb-2 "
                />
              </div>
            </div>
          </div>
          {/* Right side  */}
          <div className="py-6 mx-auto">
            <img
              src={modeling_made1}
              alt="modelingmade1"
              className="rounded-fluid mx-auto pb-2"
            ></img>
            <div className="md:px-6 lg:w-5/6 md:w-100 lg:py-20">
              <p className=" py-auto text-h6 font-semibold">
                Explore their portfolios and find the perfect match for your
                project. Join our community and discover a world of talent.
                Whether you're an agency, photographer, or enthusiast,
                connecting with models has never been easier.
              </p>
              <br />
              <span class="flex items-center">
                <p className="text-h4 font-semibold mr-4">Contact Us</p>
                &nbsp;
                <img src={Arrowr} alt="rightarrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelingMade
