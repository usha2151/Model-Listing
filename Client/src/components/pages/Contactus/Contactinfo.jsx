import React from 'react'
import { Modelfour } from '../../images';
import Navbar from '../../common/Navbar';
import { Link } from 'react-router-dom';

const Contactinfo = () => {
  return (
    <>
 <div className="relative">
        <div
          className="bg-cover bg-center h-[800px] p-6 w-full"
          style={{
            backgroundImage: `url(${Modelfour})`,
          }}
        >
          <div className="bg-black opacity-60 absolute top-0 left-0 h-full w-full"></div>
          <div className="transform ">
            <Navbar />
          </div>

          {/* Text on top of the image */}
          <div className="text-white absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5">
            <div className="w-full">
             <div className="grid md:grid-cols-3 md:gap-72">
                 <div className='text-center'>
                     <p className='bg-purple mx-auto text-h3 rounded-full w-14 h-14 pt-1 text-center'>
                        <i class="fa-solid fa-phone"></i>
                    </p>
                    <p className='font-bold mt-2'>Phone</p>
                    <p className='mt-2'>+91 5678987867</p>
                 </div>
                 <div className='text-center'>
                     <p className='bg-purple mx-auto text-h3 rounded-full w-14 h-14 pt-1 text-center'>
                     <i class="fa-regular fa-envelope"></i>
                    </p>
                    <p className='font-bold mt-2'>Email</p>
                    <p className='mt-2'>info@gmail.com</p>
                 </div>
                 <div className='text-center'>
                     <p className='bg-purple mx-auto text-h3 rounded-full w-14 h-14 pt-1 text-center'>
                     <i class="fa-solid fa-location-dot"></i>
                    </p>
                    <p className='font-bold mt-2'>Address</p>
                    <p className='mt-2'>Navneet Vihar 16 secter 9
                      Indira Nagar Lucknow</p>
                 </div>
             </div>
            </div>

 <div className="grid md:grid-cols-2 mt-12">
  <div className='py-16 px-12' style={{backgroundColor:"#151515"}}>
    <p className='text-purple font-bold text-h4'>Contact Info</p>
    <p className='text-justify'>
    we are in contact face any issues, we are just a message or call away. Our customer support representatives are well-trained, friendly, and ready to address your needs promptly. Your satisfaction is our top priority, and we strive to ensure that your experience with us is nothing short of outstanding.
    </p>
    <div className="flex lg:justify-start mt-4 space-x-5 ">
                <Link to="#" className="text-white">
                  <i className="fab fa-linkedin text-2xl border border-white rounded-full p-3"></i>
                </Link>
                <Link to="#" className="text-white">
                  <i className="far fa-envelope text-2xl border border-white rounded-full p-3"></i>
                </Link>
                <Link to="#" className="text-white">
                  <i className="fab fa-twitter text-2xl border border-white rounded-full p-3"></i>
                </Link>
                <Link to="#" className="text-white">
                  <i className="fab fa-facebook text-2xl border border-white rounded-full p-3"></i>
                </Link>
              </div>
  </div>
  <div>
  <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.167521718183!2d-106.9598213092364!3d44.79777450307416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a7fb3e7da3%3A0x865e358aa67bf72!2sDO%20IT%20FOR%20ME%20LLC!5e0!3m2!1sen!2sin!4v1694589891249!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className=""
                title='model listing'
              ></iframe>
  </div>
 </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Contactinfo