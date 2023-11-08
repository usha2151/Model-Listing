import React from "react";
import { left_arrow, right_arrow } from "../../images";

const Heading = (props) => {
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
         {props.title}
          </div>
          <div>
            <img src={left_arrow} alt="leftarrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
