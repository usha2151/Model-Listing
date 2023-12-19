import React from 'react'
import { left_arrow, right_arrow } from "../../images";
import Model from '../Home/Model';

const Topmodels = ({setSingleModel}) => {
  return (
    <>
    <div className='container mx-auto'>
     <div className="bg-white pt-12">
     <div className="flex  bg-white items-center justify-center gap-5">
            <span className="">
              <img
                src={right_arrow}
                alt="rightarrow"
                className="rounded-fluid "
              />
            </span>
            <div className="w-100">
              <div className="text-center text-h5 text-purple font-bold  md:text-h3  sm:text-h5 xs:text-h6">
              Top Models
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
    </div>
      <Model setSingleModel={setSingleModel}/>
      </>
  )
}

export default Topmodels