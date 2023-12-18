import React, { useEffect } from 'react'
import Modalprofileexpertise from "./Modalprofileexpertise";
import Modelprofilegallery from './Modelprofilegallery';
import Modelhero from './Modelhero';
import Topmodels from './Topmodels';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchModelsById } from '../../../Redux/Actions/action';

const Modelsprofile = () => {

  const prams = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state=>state.fetchprofileReducer.models);
  useEffect(() => {
    dispatch(fetchModelsById(prams.id));
   }, []);
   
   console.log(user.images);
  return (
    <>
    <Modelhero />
    <Modelprofilegallery imageprops={user.images}/>
    <Modalprofileexpertise props={user}/>
    <Topmodels />
    </>
  )
}

export default Modelsprofile