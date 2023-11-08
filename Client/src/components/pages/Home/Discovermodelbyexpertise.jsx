import React from 'react'
import { girl_1, girl_2, girl_3, girl_4, girl_5, girl_6, girl_7, view_more, whitearrow, underline, purpleline } from '../../images'

const Discovermodelbyexpertise = () => {
  return (
    <>
      <div className='container mx-auto px-16 font-sora'>
        <div className="container py-16 mx-auto  grid grid-cols-2 md:grid-cols-4 gap-3 ">
          {/* First row */}
          <div className="grid gap-3">
            <div className='relative'>
              <img src={girl_1} alt="girl_1" className="rounded-fluid bg-cover object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center text-white">
                <p className=' 2xl:text-xl lg:text-h5  font-Graphik'>Fashion & Runway
                  <img src={underline} alt="underline" className="justify-center items-center w-3/4 mx-auto" />
                  <img src={purpleline} alt="purpleline" className="justify-center items-center w-3/6 mx-auto" />
                </p>
              </div>
            </div>
            <div className='relative'>
              <img src={girl_2} alt="girl_2" className="rounded-fluid bg-cover object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center text-white">
                <p className='lg:text-h5 font-Graphik'>Commercial & Acting
                  <img src={underline} alt="underline" className="justify-center items-center w-3/4 mx-auto" />
                  <img src={purpleline} alt="Purpleline" className="justify-center items-center w-3/6 mx-auto" />
                </p>
              </div>
            </div>
          </div>
          {/* Second row */}
          <div className="grid gap-3 ">
            <div className=' relative'>
              <img src={girl_6} alt="girl_6" className="rounded-fluid bg-cover " />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center text-white">
                <p className='lg:text-h5 font-Graphik'>Commercial & Print

                  <img src={underline} alt="underline" className="justify-center items-center w-3/4 mx-auto" />
                  <img src={purpleline} alt="underline" className="justify-center items-center w-3/6 mx-auto" />
                </p>
              </div>
            </div>
            <div className=' relative'>
              <img src={girl_3} alt="girl_3" className="rounded-fluid bg-cover " />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center text-white">
                <p className='lg:text-h5 font-Graphik'>Lifestyle & Branding
                  <img src={underline} alt="underline" className="justify-center items-center w-3/4 mx-auto" />
                  <img src={purpleline} alt="purpleline" className="justify-center items-center w-3/6 mx-auto" />
                </p>
              </div>
            </div>
          </div>
          {/* Third row */}
          <div className="grid gap-3">
            <div className=' relative'>
              <img src={girl_4} alt="girl_4" className="rounded-fluid bg-cover " />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center text-white">
                <p className='lg:text-h5 font-Graphik'>Fitness & Wellness

                  <img src={underline} alt="underline" className="justify-center items-center w-3/4 mx-auto" />
                  <img src={purpleline} alt="Purpleline" className="justify-center items-center w-3/6 mx-auto" />
                </p>
              </div>
              <img src={purpleline} alt="purpleline" className="justify-center items-center w-3/6 mx-auto" />
            </div>
            <div className='relative'>
              <img src={girl_7} alt="" className="rounded-fluid bg-cover " />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center text-white">
                <p className='lg:text-h5 font-Graphik'>Art & Creative
                  <img src={underline} alt="underline" className="justify-center items-center w-3/4 mx-auto" />
                  <img src={purpleline} alt="purpleline" className="justify-center items-center w-3/6 mx-auto" />
                </p>
              </div>
            </div>
          </div>
          {/* Fourth row */}
          <div className="grid gap-3">
            <div className='relative'>
              <img src={girl_5} alt="" className=" bg-cover " />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center text-white">
                <p className='lg:text-h5 font-Graphik'>Glamour & Beauty
                  <img src={underline} alt="underline" className="justify-center items-center w-3/4 mx-auto" />
                  <img src={purpleline} alt="purpleline" className="justify-center items-center w-3/6 mx-auto" />
                </p>
              </div>
            </div>
            <div className='relative' >
              <img src={view_more} alt="view_more" className="rounded-fluid bg-cover object-cover" />
              <div className="absolute inset-0  p-16 flex justify-center items-center font-semibold text-white">
                <p className='lg:text-h2 sm:text-h3  font-sora'>View All Categories
                  <img src={whitearrow} alt="whitearrow" className="rounded-fluid w-3/4" />
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default Discovermodelbyexpertise