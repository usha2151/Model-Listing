import React from 'react'
import { SitanshuSir,ReggieSir,right_arrow,left_arrow } from '../../images'

const ProfessionalTeam = () => {
  return (
    <>
        <div className='bg-black'>
        <div className="bg-black flex py-16 items-center justify-center gap-5 space-x-10">
              <span className="">
                <img
                  src={right_arrow}
                  alt="rightarrow"
                  className="rounded-fluid "
                />
              </span>
              <div className="w-100">
                <div className="text-center font-sora text-h5 text-white font-bold  md:text-h4  sm:text-h5 xs:text-h6">
                  Professional Team
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
            <div className='container mx-auto py-16 bg-black gap-5'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {/* Left Side */}
                    <div className='md:mx-auto lg:ml-[220px] '>
                        <div>
                            <img src={ReggieSir} alt="Reggie Sir" className=''/>
                        </div>
                        <div className='text-white grid gap-9 px-3'>
                            <p className='md:text-h3 sm:text-h5 pt-9 uppercase font-sora'>Reggie Gardner</p>
                            <p className='text-p font-sora'>CEO & CO-FOUNDER</p>
                        </div>
                    </div>
                {/* Right Side */}
                    <div className='md:mx-auto lg:mr-[220px]'>
                        <div>
                            <img src={SitanshuSir} alt="Sitanshu Sir" className='mx-auto'/>

                        </div>
                        <div className='text-white grid gap-9 px-3'>
                            <p className='md:text-h3 sm:text-h5  pt-9 uppercase font-sora'>SITANSHU SRIVASTAVA </p>
                            <p className='text-p  font-sora uppercase'>co-founded & international Business Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfessionalTeam