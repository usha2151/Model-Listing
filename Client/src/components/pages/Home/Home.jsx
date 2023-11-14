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

  if(user){
    
  console.log('fjdksafjkdlf',user.email);
  }
  useEffect(() => {
    const codedToken = document.cookie;
    const token=codedToken.split('=')[1]
  
  console.log(token);
    if (token) {
      dispatch(verifyToken(token))
    }
    else{
      navigate('/')
    }
  }, []);

  return (
    <>
    
      <Hero props={user} />
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
