import React, { useEffect, useState } from 'react'
import Modalprofileexpertise from "./Modalprofileexpertise";
import Modelprofilegallery from './Modelprofilegallery';
import Modelhero from './Modelhero';
import Topmodels from './Topmodels';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchModelsById } from '../../../Redux/Actions/action';

const Modelsprofile = () => {
  const [singleModel,setSingleModel]=useState(null)

  const prams = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state=>state.fetchprofileReducer.models);
  useEffect(() => {
    dispatch(fetchModelsById(prams.id));
   }, []);
   
   
  return (
    <>
    <Modelhero />
    <Modelprofilegallery imageprops={singleModel ? singleModel[0].images : user.images}/>
    <Modalprofileexpertise props={user}/>
    <Topmodels setSingleModel={setSingleModel} />
    </>
  )
}

export default Modelsprofile