import React from 'react'
import { graystar } from '../../images'
import { doubleslash } from '../../images'
import { left_arrow, right_arrow } from "../../images";
import Heading from '../Home/Heading';


const Usersopinion = () => {
    return (
        <>
       <Heading  title={" User’s Opinion & Reviews"}/>

            <div className="bg-black ">
                <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-2 gap-4 bg-black container mx-auto p-3 font-sora">
                    {/* Column 1 */}
                    <div className="grid gap-3 ">
                        <div className="bg-white rounded-2xl p-9  relative">
                            <div className="text-h3 font-bold font-sora text-black">Priti</div>
                            <div className="text-lg font-semibold font-sora text-darkgray">Commercial & Print</div>
                            <div className='flex py-3'>
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                            </div>
                            <div className="w-16 h-6 origin-top-left transform rotate-24.73 bg-fuchsia-800" />
                            <div className="text-sm  font-sora  text-justify leading-5">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ."
                            </div>
                            <div className="flex py-3">
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                            </div>
                        </div>


                        <div className="bg-white  rounded-2xl p-9 relative">
                            <div className="text-h3 font-semibold font-sora text-black">Priti</div>
                            <div className="text-lg font-semibold font-sora text-darkgray">Commercial & Print</div>
                            <div className='flex py-3'>
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                            </div>
                            <div className="w-16 h-6 origin-top-left transform rotate-24.43 bg-pu" />
                            <div className="text-sm font-normal font-sora text-black text-justify leading-5">
                                “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ...”
                            </div>
                            <div className="flex py-3">
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="grid gap-4">
                        <div className="bg-white h-68 rounded-2xl p-9 relative ">
                            <div className="text-h3 font-bold font-sora text-black">Priti</div>
                            <div className="text-lg font-semibold font-sora text-darkgray">Commercial & Print</div>
                            <div className='flex py-3'>
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                            </div>
                            <div className="w-16 h-6 origin-top-left transform rotate-24.43 bg-pu" />
                            <div className="w-16 origin-top-left transform rotate-24.43 bg-pu" />
                            <div className="text-sm font-normal font-sora text-neutral-900 text-justify leading-5">
                                “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  ..”
                            </div>
                            <div className="flex py-3">
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                            </div>
                        </div>

                        <div className="bg-white min-h-fit rounded-2xl p-9 relative gap-3">
                            <div className="text-2xl font-bold font-sora text-h3">Priti</div>
                            <div className="text-lg font-semibold font-sora text-darkgray">Commercial & Print</div>
                            <div className='flex py-3'>
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                            </div>
                            <div className="w-16 h-6 origin-top-left transform rotate-24.43 bg-pu" />
                            <div className="text-sm font-normal font-sora text-neutral-900 text-justify leading-5">
                                “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text ..

                            </div>
                            <div className="flex py-3">
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                            </div>
                        </div>
                    </div>


                    {/* Column 3 */}
                    <div className="grid gap-3">
                        <div className="bg-white h-75 rounded-2xl p-9  relative">
                            <div className="text-h3 font-bold font-sora text-black">Priti</div>
                            <div className="text-lg font-semibold font-sora text-darkgray">Commercial & Print</div>
                            <div className='flex py-3'>
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                            </div>
                            <div className="w-16 h-6 origin-top-left transform rotate-24.43 bg-pu" />
                            <div className="text-sm font-normal font-sora text-justify leading-5">
                                “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex Lorem Ipsum has been the industry's standard dummy textt ..”
                            </div>
                            <div className="flex py-3">
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                            </div>
                        </div>

                        <div className="bg-white h-100 rounded-2xl p-9 relative">
                            <div className="text-h3 font-bold font-sora ">Priti</div>
                            <div className="text-lg font-semibold font-sora text-darkgray">Commercial & Print</div>
                            <div className='flex py-3'>
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                            </div>
                            <div className="w-16 h-6 origin-top-left transform rotate-24.43 bg-pu" />
                            <div className="text-sm font-normal font-sora  leading-5 text-justify">
                                “Lorem Ipsum is simply dummy text of the printing and typesetting industry.  standard dummy text ..”
                            </div>
                            <div className="flex py-3">
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                            </div>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="grid gap-3">
                        <div className="bg-white rounded-2xl p-9 relative">
                            <div className="text-h3 font-bold font-sora text-black">Priti</div>
                            <div className="text-lg font-semibold font-sora text-darkgray">Commercial & Print</div>
                            <div className='flex py-3'>
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                            </div>
                            <div className="w-16 h-6 origin-top-left transform rotate-24.73 bg-fuchsia-800" />
                            <div className="text-sm  font-sora  text-justify leading-5">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ."
                            </div>
                            <div className="flex py-3">
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                            </div>
                        </div>


                        <div className="bg-white  rounded-2xl p-6 relative">
                            <div className="text-h3 font-semibold font-sora text-black">Priti</div>
                            <div className="text-lg font-semibold font-sora text-darkgray">Commercial & Print</div>
                            <div className='flex py-3'>
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                            </div>
                            <div className="w-16 h-6 origin-top-left transform rotate-24.43 bg-pu" />
                            <div className="text-sm font-normal font-sora text-black text-justify leading-5">
                                “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ...”
                            </div>
                            <div className="flex py-3 ">
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                            </div>
                        </div>
                    </div>

                    {/* Column 5 */}
                    <div className="grid gap-4">
                        <div className="bg-white h-full rounded-2xl p-9  ">
                            <div className="text-h3 font-bold font-sora text-black">Priti</div>
                            <div className="text-lg font-semibold font-sora text-darkgray">Commercial & Print</div>
                            <div className='flex py-3'>
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                            </div>
                            <div className="w-16 h-6 origin-top-left transform rotate-24.43 bg-pu" />
                            <div className="text-sm font-normal font-sora text-justify leading-5">
                                “Lorem Ipsum is simply dummy text of the printing and typesetting industry.”
                            </div>
                            <div className="w-16 h-6 origin-top-left transform rotate-24.43 bg-pu" />

                            <div className="flex py-3">
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                            </div>
                        </div>

                        <div className="bg-white h-full rounded-2xl p-9 relative">
                            <div className="text-2xl font-bold font-sora text-h3">Priti</div>
                            <div className="text-lg font-semibold font-sora text-darkgray">Commercial & Print</div>
                            <div className='flex py-3'>
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                                <img src={doubleslash} alt="" className="rounded-fluid" />
                            </div>
                            <div className="w-16 h-6 origin-top-left transform rotate-24.43 bg-pu" />
                            <div className="text-sm font-normal font-sora text-neutral-900 text-justify leading-5">
                                “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text lorem ipsum has been the inducstry for the dummy text ..”
                            </div>
                            <div className="flex py-6">
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />
                                <img src={graystar} alt="graystar" className="rounded-fluid" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Usersopinion