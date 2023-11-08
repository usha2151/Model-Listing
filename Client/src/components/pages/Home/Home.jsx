import React, { useEffect } from 'react'
import Discovermodelbyexpertise from './Discovermodelbyexpertise'
import Hero from './Hero'
import Model from './Model'
import ModelingMade from './ModelingMade'
import Heading from './Heading'
import Calltoaction from './Calltoaction'
import Allmodels from './Allmodels'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { verifyToken } from '../../../Redux/Actions/action'

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user}=useSelector(state=>state.authReducer.user)
  // console.log('fjdksafjkdlf',user.email);

  // useEffect(() => {
  //   const token = document.cookie;
  // console.log(token);
  //   if (token) {
  //     dispatch(verifyToken(token))
  //   }
  //   else{
  //     navigate('/signin')
  //   }
  // }, []);

  return (
    <>
    
      <Hero/>
      <ModelingMade />
    
      <Heading title={"Discover Models by Expertise"}/>
      {/* <div>
        <img src={`/public/upload/${user.image}`} alt="" />
        <p className='text-purple'>dmsfh</p>
      </div> */}
      <Discovermodelbyexpertise/>
      <Allmodels/>
      <Calltoaction/>
    
    </>
  );
};

export default Home;
