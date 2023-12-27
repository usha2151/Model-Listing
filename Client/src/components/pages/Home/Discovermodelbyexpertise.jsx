import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { underline, purpleline } from '../../images';

const Discovermodelbyexpertise = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.fetchModelsReducer.models);

  // Create a set to keep track of unique specializations
  const uniqueSpecializations = new Set();

  return (
    <>
      <div className='container mx-auto px-16 font-sora'>
        <div className='container py-16 mx-auto grid grid-cols-2 md:grid-cols-4 gap-3'>
          {user.map((item, index) => {
            // Check if the specialization is unique, if not, skip rendering
            if (uniqueSpecializations.has(item.specialization)) {
              return null;
            }

            // Add the specialization to the set
            uniqueSpecializations.add(item.specialization);

            const imageSizeClass =
              index % 3 === 0
                ? 'h-[400px]'
                : index % 3 === 1
                ? 'h-[600px]'
                : 'h-[500px]'; // Adjust the condition based on your requirements

            return (
              <div key={index} className='relative'>
                <img
                  src={`http://localhost:8080/public/upload/${item.images[0]}`}
                  alt={`girl_${index + 1}`}
                  className={`rounded-fluid bg-cover object-cover ${imageSizeClass}`}
                />
                <div className='absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center text-white'>
                  <p className='2xl:text-xl lg:text-h5 font-Graphik'>
                    {item.specialization}
                    <img
                      src={underline}
                      alt='underline'
                      className='justify-center items-center w-3/4 mx-auto'
                    />
                    <img
                      src={purpleline}
                      alt='purpleline'
                      className='justify-center items-center w-3/6 mx-auto'
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Discovermodelbyexpertise ;
