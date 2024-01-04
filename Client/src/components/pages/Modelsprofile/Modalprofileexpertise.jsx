import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "../../../Redux/Actions/action";
import { Link, useNavigate  } from "react-router-dom";

const Modalprofileexpertise = (props) => {
  const dispatch = useDispatch();
  const [tokenPresent, setTokenPresent] = useState(false);
  const [previousData, setPreviousData] = useState({
    height: "178cm",
    bust: "81cm",
    waist: "64cm",
    hips: "64cm",
    eyes: "Green",
    hair: "Brown",
    phone: "9023020322",
    email: "modal@gmail.com",
    profession: "Model",
    experience: "2 Years",
    rating: "*******4.5",
  });

  useEffect(() => {
    const codedToken = document.cookie;
    const token = codedToken.split("=")[1];

    if (token) {
      dispatch(verifyToken(token));
      setTokenPresent(true);
    } else {
      setTokenPresent(false);
    }
  }, [dispatch]);
const navigate=useNavigate();
  const handleReviewSubmit = () => {
    // Check if the token is present
    if (tokenPresent) {
      // Process the review submission logic here
    } else {
      // Redirect to the login page
      navigate('/signin')
    }
  };
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto xl:pb-48 lg:pb-36 md:pb-16 pb-10 ">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-40 xl:gap-40 md:gap-10">
            {/* Right side */}
            <div className="grid m-5 text-white  gap-8">
              <div className="text-h3 text-bold font-sora text-white">
                {" "}
                {props.name}{" "}
              </div>
              <div className="font-sora lg:w-4/5 md:w-full sm:full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              <div className="pb-4">
                <span className=" border-white border p-3 font-sora">
                  {" "}
                  Contact Now{" "}
                </span>
              </div>

              {/* MODAL PROFILE */}
              <div className=" rounded bg-white ">
                <div className="">
                  {" "}
                  <p className=" font-sora  bg-black p-3 m-3">
                    Modal Profile
                  </p>{" "}
                </div>
                <div className=" bg-white text-black font-sora flex justify-between rounded">
                  <div className="space-y-4 pl-6 pb-3 ">
                    <div>Height</div>
                    <div>Bust</div>
                    <div>Waist</div>
                    <div>Hips</div>
                    <div>Eyes</div>
                    <div>Hair</div>
                    <div>Phone</div>
                    <div>Email</div>
                  </div>
                  <div className="space-y-4 pr-6">
                    {tokenPresent ? (
                      <>
                        <div>{previousData.height}</div>
                        <div>{previousData.bust}</div>
                        <div>{previousData.waist}</div>
                        <div>{previousData.hips}</div>
                        <div>{previousData.eyes}</div>
                        <div>{previousData.hair}</div>
                        <div>{previousData.phone}</div>
                        <div>{previousData.email}</div>
                      </>
                    ) : (
                      <>
                        <div>#</div>
                        <div>#</div>
                        <div>#</div>
                        <div>#</div>
                        <div>#</div>
                        <div>#</div>
                        <div>#</div>
                        <div>#</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL PROFILE ENDS  */}

            {/* MODAL EXPERTISE STARTS */}
            <div className="bg-black m-5">
              <div className="bg-white w-full  rounded ">
                <div className="p-3">
                  <p className=" font-sora text-white p-3 bg-black">
                    Modal Expertise
                  </p>
                </div>
                <div className="grid bg-white text-black font-sora ">
                  <div className="py-4 px-3 w-">
                    <p className="text-black">
                      I have our achieved significant success in their careers,
                      earning critical acclaim
                    </p>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 bg-white text-black font-sora ">
                      <div className="">
                        <ul className="p-5 font-bold">
                          <li className="py-3">Profession</li>
                          <li className="py-3">Experience</li>
                          <li className="py-3">Rating </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="p-5 px-3">
                          {tokenPresent ? (
                            <>
                              <div>{previousData.profession}</div>
                              <div>{previousData.experience}</div>
                              <div>{previousData.rating}</div>
                            </>
                          ) : (
                            <>
                              <div>#</div>
                              <div>#</div>
                              <div>#</div>
                            </>
                          )}
                        </ul>
                      </div>
                      <div className="flex justify-left pl-4 mt-7 pb-3">
                        <button className="bg-[purple] text-white py-4 font-sora text-[18px] px-14">
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between md:justify-between w-full md:w-4/5 md:space-x-3 px-4 py-10 ">
                <Link to="#" className="text-purple font-sora text-h4 pt-2">
                  Share
                </Link>
                <Link to="#" className="text-white">
                  <i className="fab fa-linkedin text-2xl border border-white rounded-full p-3"></i>
                </Link>
                <Link to="#" className="text-white">
                  <i className="far fa-envelope text-2xl border border-white rounded-full p-3"></i>
                </Link>
                <Link to="#" className="text-white">
                  <i className="fab fa-twitter text-2xl border border-white rounded-full p-3"></i>
                </Link>
                <Link to="#" className="text-white">
                  <i className="fab fa-facebook text-2xl border border-white rounded-full p-3"></i>
                </Link>
              </div>

              <div className="w- border p-6 bg-second-black border-white pt-2 text-white">
                <p className="font-sora py-5">Review</p>
                <p className="font-sora">
                  I have our achieved significant success in their careers,
                  earning critical dfd acclaim
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TRANSPARENCY RE LANDED  SECTION */}

        <div className="container-fluid bg-second-black">
          <div className="mx-auto container ">
            <div className=" grid md:grid-cols-2 bg-second-black h-[max]">
              <div className=" flex items-center justify-center flex-col h-full p-4">
                <div>
                  <p className=" text-h2 text-white  font-sora font-bold">
                    Transparency Re landed
                  </p>
                  <p className=" text-h6 text font-sora w-4/5 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque ducimus nulla quam quibusdam harum maxime commodi
                    nam, nemo cupiditate dolore.
                  </p>
                </div>
              </div>

              <div className="bg-second-black md:p-9 p-5">
                <div className="bg-white p-3 lg:h-full  lg:relative lg:bottom-40 lg:left-8 md:relative md:bottom-16 ">
                  <p className="text-purple text-h5 font-bold px-5 font-sora">
                    Write Your Rating{" "}
                  </p>
                  <div className="p-2">
                    <input
                      placeholder="Your Rating"
                      class="bg-gray w-full mx-auto h-16 p-4"
                    />
                  </div>
                  <p className="text-purple text-h5 font-bold px-5 font-sora">
                    Title{" "}
                  </p>
                  <div className="p-2">
                    <input
                      placeholder="Enter your Title"
                      class="bg-gray w-full h-16 p-4"
                    />
                  </div>
                  <p className="text-purple text-h5 font-bold px-5 font-sora">
                    Review{" "}
                  </p>
                  <div className="p-2">
                    <input
                      placeholder="Write your review"
                      class="bg-gray w-full h-24 p-4"
                    />
                  </div>
                  <div className="flex justify-center pl-4 mt-7 pb-3">
                    <button
                      onClick={handleReviewSubmit}
                      className="bg-[purple] text-white py-4 text-[18px]  lg:px-14 md:px-10 sm:px-8 px-6 font-sora"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modalprofileexpertise;
