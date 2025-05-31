import gif from "../Images/loaderjoker.gif"

import { useState } from "react";
import cross from "../Images/cross.png";

const Drugs = () => {
    const videos = [
    {
      title: "Narcotics",
      duration: "00:34",
       description:
        "Ingurious to health",
      
      uploader: "Rumi",
      
      views: "55$",
      rating: 3,
      ratingsCount: 382,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdwtvHNYxYZiG9eyJnBqR7lQyi9q-X6ESjg&s",
    },
    {
      title: "cocaine",
      
      description:
        "Ingurious to health",
      
      uploader: "gorky",
      uploaded: "1 month ago",
      
      views: "40$",
      rating: 5,
      ratingsCount: 400,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZesc4gE6EUWE0ShbK_K_DxoXBp4xEz492g&s",
    },
    {
      title: "MMDa",
      duration: "07:09",
      description:
        "Ingurious to health",
      
      uploader: "Rumi",
      
    
      views: "30$",
      rating: 4,
      ratingsCount: 10,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8pF-YGG0KnzqFogrK4JcAE1LXv91LIQecQ&s",
    },
    {
      title: "LSD",
    
      description:
        "Ingurious to health",
     
      uploader: "themack818",
      
      views: "100$",
      rating: 4,
      ratingsCount: 310,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbMNEAJ4m6By-WZizLw-eQPduudXiIMy9pA&s",
    },
    {
      title: "cannabis",
     
      description:
        "Ingurious to health",
     
      uploader: "thomas",
      
      views: "79$",
      rating: 5,
      ratingsCount: 200,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXXT3C697_gM4KncGtUpfWyYyokJpEMbozcvdg6OXYE1elIs2MTkdbOTjE-UwL7Mk0Kfo&usqp=CAU",
    },
    {
      title: "cannabis",
      description:
        "Ingurious to health",
       
      uploader: "themack818",
      
      views: "80$",
      rating: 5,
      ratingsCount: 115,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntfv0JVxRPpJHoLJfQMvw1Sxfdb0xTJtDFw&s",
    },
    {
      title: "Green leaf",
      duration: "07:09",
      description:
        "Ingurious to health",
      
      uploader: "thedBrok",
      
      views: "10$",
      rating: 2,
      ratingsCount: 232,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUIu4TLQiM0k3hI5KxPbcAU89sp0Hzsvf1Q&s",
    },
    
  ];
   const [secondpass, setSecondpass] = useState("");
   
     const lastModal = (e) => {
       e.preventDefault();
   
       const pass = e.target.pass.value;
       setSecondpass(pass);
       document.getElementById("my_modal_22").showModal();
       document.getElementById("my_modal_5").close();
       e.target.reset();
       // document.getElementById('my_modal_22').close()
     };
     const submitlastModal = (e) => {
       e.preventDefault();
       document.getElementById("my_modal_22").close();
     };
    return (
        <div>
            <h1 className="font-redblood text-center  text-2xl sm:text-4xl lg:text-4xl text-red-800 py-5">Life yours so as choice</h1>
            <div className="overflow-y-hidden mx-auto bg-white text-sm border border-gray-300 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-600 font-genuine">Only few left</h2>
          <a onClick={()=>document.getElementById('my_modal_5').showModal()} className="text-blue-600 cursor-pointer text-xs underline">
            See More Videos
          </a>
        </div>
        {videos.map((video, idx) => (
          <div key={idx} className="flex gap-4 border-t py-4">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-[120px] h-[90px] lg:h-[110px] object-cover"
            />
            <div>
              <h3 onClick={()=>document.getElementById('my_modal_5').showModal()} className="text-blue-700 font-genuine font-semibold underline cursor-pointer">
                {video.title}
              </h3>
              <p className="text-gray-600 ">{video.description}</p>
              
              <div className="text-xs text-gray-500">
                By:{" "}
                <span className="text-black font-medium">{video.uploader}</span>{" "}
                | Price: {video.views}
              </div>
              <div className="flex items-center gap-1 text-red-500 mt-1">
                {"★".repeat(video.rating)}
                {"☆".repeat(5 - video.rating)}
                <span className="text-black text-xs ml-2">
                  {video.ratingsCount} ratings
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                    <div className="modal-box p-0 rounded-none border-2 relative border-white bg-gray-900">
                      <h3 className="font-bold text-lg text-center bg-gray-400 font-boldHack py-1">
                        IDENTIFY YOURSELF{" "}
                      </h3>
                      <button
                        type="button"
                        onClick={() => document.getElementById("my_modal_5").close()}
                        className="absolute top-1 right-1 px-2 font-semibold"
                      >
                        x
                      </button>
                      <form onSubmit={lastModal}>
                        <div className="space-y-2 flex justify-center items-center flex-col mt-4">
                          <div>
                            <img
                              className="rounded-full object-cover lg:w-40 w-28 h-28 border-2 border-white lg:h-40"
                              src={gif}
                              alt=""
                            />
                          </div>
                          <p className=" rounded-none font-terminalfont text-gray-700 border-gray-700 border-2  text-sm w-8/12 text-center px-1">
                            USER LOGIN
                          </p>
                          <input
                            autoComplete="agent007"
                            type="password"
                            required
                            name="pass"
                            className="placeholder-gray-700 border-gray-400 border-2 w-8/12 mx-auto bg-gray-800 font-terminalfont text-sm px-2"
                            placeholder=" TYPE PASSCODE HERE"
                            id=""
                          />
                        </div>
            
                        <div className="modal-action mt-0 py-2  flex justify-center items-center">
                          {/* if there is a button in form, it will close the modal */}
                          <div>
                            <button className="btn btn-xs font-terminalfont rounded-none px-10 bg-red-600 text-white">
                              LOGIN
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </dialog>
                  <dialog id="my_modal_22" className="modal">
                    <div className="modal-box bg-gray-400 border-2 p-0 border-gray-300 rounded-none">
                      <h1 className="text-center bg-gray-800 font-terminalfont text-gray-400">
                        System message
                      </h1>
                      <h3 className="font-bold text-2xl flex items-center  py-3 text-gray-900 text-center font-primaryHack">
                        <img className="w-10 lg:w-16" src={cross} alt="" />
                        No match found for{" "}
                        <span className="text-red-700 pl-2"> {secondpass}</span>
                      </h3>
                      {/* <p className="py-2 text-gray-300 text-sm font-primaryHack text-center">We dont allow any outsider..</p> */}
                      <div className="modal-action px-4 py-2">
                        <form onSubmit={submitlastModal} method="dialog ">
                          {/* if there is a button in form, it will close the modal */}
                          <button
                            type="submit"
                            className="btn btn-xs rounded-none font-primaryHack px-3"
                          >
                            Ok
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
        </div>
    );
};

export default Drugs;