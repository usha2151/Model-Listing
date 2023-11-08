
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to a server
    // console.log(formData);
  };

  return (
    <div className='bg-black'>
    <div className="container mx-auto md:px-32 pt-32">
        <p className='text-h2 font-bold text-white text-center mb-6 font-Sora'>Get In Touch With Us</p>
      <form onSubmit={handleSubmit} className="  px-8 pt-6 pb-8">
      <div className="mb-10 grid md:grid-cols-2 gap-12  items-center">
          <div className="">
            <label className="block text-purple text-sm font-bold mb-2" htmlFor="input1">
            Enter Full Name
            </label>
            <input
              className="shadow appearance-none border w-full pb-6 pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="input1"
              name="input1"
              value={formData.input1}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="">
            <label className="block text-purple text-sm font-bold mb-2" htmlFor="input2">
            Enter Email
            </label>
            <input
              className="shadow appearance-none border w-full pb-6 pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="input2"
              name="input2"
              value={formData.input2}
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-purple text-sm font-bold mb-2" htmlFor="message">
          Write Your Comments
          </label>
          <textarea
            className="shadow appearance-none border w-full pb-14 pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            I agree to the <Link to="#" className="text-purple">Terms & conditions.</Link>
          </label>
        </div>
        <div className="mb-6 text-center">
        <button className="bg-[purple] text-white py-4 font-sora text-[18px] px-14">
        Submit
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Form;
