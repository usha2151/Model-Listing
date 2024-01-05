import React, { useEffect } from 'react';
import Modalprofileexpertise from './Modalprofileexpertise';
import Modelprofilegallery from './Modelprofilegallery';
import Modelhero from './Modelhero';
import Topmodels from './Topmodels';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchModelsById } from '../../../Redux/Actions/action';

const Modelsprofile = () => {
  const { models } = useSelector((state) => state.fetchprofileReducer);
  const prams = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.fetchprofileReducer.models);

  useEffect(() => {
    dispatch(fetchModelsById(prams.id));
  }, [prams.id, dispatch]);

  return (
    <>
      <Modelhero />
      <Modelprofilegallery imageprops={models ? models.images : user.images} />
      <Modalprofileexpertise user={user._id} pramsId={prams.id} />
      <Topmodels />
    </>
  );
};

export default Modelsprofile;
