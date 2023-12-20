import React from "react";


const Modelprofilegallery = ({props,imageprops}) => {

  // console.log("usha ksjhdks ksdfjhds", imageprops);

  // Check if imageprops is defined and has at least one element
  if (!imageprops || imageprops.length === 0) {
    // Handle the case where imageprops is not valid
    return <div>Error: Invalid imageprops</div>;
   
  }
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto py-16 bg-black max-h-max">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 ">
            {/* column 1 */}
            <div className="grid gap-3">
              <div
                className="h-[400px] bg-black bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000" 
               
                

              >
                <img src={ `http://localhost:8080/public/upload/${imageprops[0]}`} className="h-full object-cover"/></div>
              <div
                className="h-[600px] bg-gray bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
               
              > <img src={ `http://localhost:8080/public/upload/${imageprops[1]}`} className="h-full object-cover"/></div>
            </div>
            {/* column 2 */}
            <div className="grid gap-3">
              <div
                className="h-[550px] bg-darkgray bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
              
              ><img src={ `http://localhost:8080/public/upload/${imageprops[2]}`} className="h-full object-cover"/></div>
              <div
                className="h-[450px] bg-second-black bg-cover bg-no-repeat border-transparent border-8 hover:border-purple transition duration-1000"
                
              ><img src={ `http://localhost:8080/public/upload/${imageprops[3]}`} className="h-full object-cover"/></div>
            </div>
            {/* column 3 */}
            <div className="grid gap-3">
              <div
                className="h-[600px] bg-white bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
               
              ><img src={ `http://localhost:8080/public/upload/${imageprops[4]}`} className="h-full object-cover"/></div>
              <div
                className="h-[400px] bg-black bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
              
              ><img src={ `http://localhost:8080/public/upload/${imageprops[5]}`} className="h-full object-cover"/></div>
            </div>
            {/* column 4 */}
            <div className="grid gap-3">
              <div
                className="h-[500px] bg-black bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
              
              ><img src={ `http://localhost:8080/public/upload/${imageprops[6]}`} className="h-full object-cover"/></div>
              <div
                className="h-[500px] bg-gray bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000"
              
              ><img src={ `http://localhost:8080/public/upload/${imageprops[7]}`} className="h-full object-cover"/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modelprofilegallery;
