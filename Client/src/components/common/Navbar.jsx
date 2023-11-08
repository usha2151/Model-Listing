import React from "react";
import { worldmodelhuntlogo } from "../images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log(document.cookie);
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/signin')
  };

  return (
    <>
     <nav className="container mx-auto lg:px-16 sm:px-0 bg-gray-900 text-dark py-2 w-3/4">
  <div className="bg-gray px-6 py-1 container mx-auto flex items-center justify-between rounded-full shadow">
    <div className="flex items-center">
      <span>
        <img
          src={worldmodelhuntlogo}
          alt=""
          className="rounded-fluid mx-auto pb-2"
        ></img>
      </span>
    </div>
    <ul className="hidden lg:flex items-center space-x-8 lg:text-[9px] xl:text-[15px] 2xl:text-[18px]">
    <Link to="/" className="">
      <li className="hover:text-purple hover:border-b-2 hover:border-purple font-semibold">      
          Home 
      </li>
      </Link>
      <Link to="/all_models">
      <li className="hover:text-purple hover:border-b-2 hover.border-purple font-semibold">
          All Models  
      </li>
      </Link>
      <Link to="/contact_us">
      <li className="hover:text-purple hover:border-b-2 hover.border-purple font-semibold">
          Contact Us   
      </li>
      </Link>
      <li className="hover:text-purple hover:border-b-2 hover.border-purple">
        <Link to="/about_us" className="font-semibold">
          About Us
        </Link>
      </li>
      <li className="flex">
        <span>
          <i class="fa-solid fa-lg fa-user text-purple text-h4"></i>&nbsp;
        </span>
        <Link to="/signin" className="font-semibold hover:text-purple hover:border-b-2 hover.border-purple">
          Login 
        </Link>
       <span> / </span> 
        <Link to="/signup" className="font-semibold hover:text-purple hover:border-b-2 hover.border-purple">
        Register 
        </Link>
       
      </li>
      <li className="hover:text-purple hover:border-b-2 hover.border-purple">
        <button onClick={handleLogout} className="font-semibold">
          Logout
        </button>
      </li>
    </ul>

    <div className="lg:hidden h-14 w-14 rounded-full right-3 bg-purple bg-opacity-50 p-1">
              <div className="h-12 w-12 rounded-full right-3 bg-purple text-center p-[13px]">
                <i className="fa-solid fa-bars text-[20px] text-white"></i>
              </div>
            </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;
