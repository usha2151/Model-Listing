import React, { useEffect } from "react";
import { worldmodelhuntlogo } from "../images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { verifyToken } from "../../Redux/Actions/action";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log(document.cookie);
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/signin')
  };


  const dispatch = useDispatch();
  const {user}=useSelector(state=>state.authReducer.user)

  if(user){
    
  
  }
  useEffect(() => {
    const codedToken = document.cookie;
    const token=codedToken.split('=')[1]
  

    if (token) {
      dispatch(verifyToken(token))
    }
    else{
      navigate('/signin')
    }
  }, []);
 
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






      {
  !user ? (
    <>
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
    </>
  ) : (
    <div className="relative">
      {/* Display image and name */}
      <div className="flex items-center">
        {
          user.images &&
        <img src={`http://localhost:8080/public/upload/${user.images[0]}`} alt="User" className="h-8 w-8 rounded-full cursor-pointer" />
        }
        <span className="text-white ml-2 cursor-pointer">hfdgh{user.name}</span>
      </div>

    
        <div className="absolute right-0 mt-2 bg-white p-2 rounded shadow">
          <button className="text-black" onClick={handleLogout}>
            Logout
          </button>
          <a href="/dashboard" className="text-black">
            Dashboard
          </a>
        </div>
     
    </div>
  )
}










     
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
