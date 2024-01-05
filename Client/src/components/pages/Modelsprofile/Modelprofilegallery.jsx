import React from "react";

const Modelprofilegallery = ({ imageprops, userName }) => {
  // Check if imageprops is defined and has at least eight elements
  if (!imageprops || imageprops.length < 8) {
    // Handle the case where imageprops is not valid
    return <div>Error: Invalid imageprops</div>;
  }

  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto py-16 bg-black max-h-max">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 ">
            {[0, 2, 4, 6].map((startIdx, columnIndex) => (
              <div key={columnIndex} className="grid gap-3">
                <div
                  className={`${
                    columnIndex % 2 === 0 ? "h-[400px]" : "h-[600px]"
                  } bg-black bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000`}
                >
                  <img
                    src={`http://localhost:8080/public/upload/${imageprops[startIdx]}`}
                    className="h-full object-cover"
                    alt={`image_${startIdx + 1}`}
                  />
                </div>
                <div
                  className={`${
                    columnIndex % 2 === 0 ? "h-[600px]" : "h-[400px]"
                  } bg-gray bg-cover bg-center border-transparent border-8 hover:border-purple transition duration-1000`}
                >
                  <img
                    src={`http://localhost:8080/public/upload/${imageprops[startIdx + 1]}`}
                    className="h-full object-cover"
                    alt={`image_${startIdx + 2}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-white mt-4">
            <p>{}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modelprofilegallery;
