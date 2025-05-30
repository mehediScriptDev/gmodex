import gif from "../Images/loaderjoker.gif"

import { useState } from "react";
import cross from "../Images/cross.png";

const Girls = () => {
  const videos = [
    {
      title: "Name unknown - Canadian girl",
      duration: "00:34",
      description:
        "Your have to pay money to watch her torture video - shoot, slap, bleeding, anything you can do ..",
      tags: [
        "torture",
        "fun",
        "girl",
        "deepWeb",
        "Lady",
        "sex",
        "abuse",
      ],
      uploader: "Gabblack",
      uploaded: "21 hours ago",
      category: "Girls",
      views: "55,719",
      rating: 3,
      ratingsCount: 382,
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/51/93/78/360_F_351937870_LpVA7EKOq17kBeKdhXXRVNJjWtksRQ8c.jpg",
    },
    {
      title: "Raisha Kabir - Arabian girl. Not dead yet",
      duration: "07:09",
      description:
        "Your have to pay money to watch her torture video - shoot, slap, bleeding, anything you can do ..",
      tags: [ "torture",
        "fun",
        "girl",
        "deepWeb",
        "Lady",
        "sex",
        "abuse",],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "Lady",
      views: "36,00",
      rating: 4,
      ratingsCount: 300,
      thumbnail:
        "https://i.ytimg.com/vi/nRT8XDGbjpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDy8PXrfhUczqsSr3xodkIMBNPt5A",
    },
    {
      title: "Formal model - euporean. Pornstar",
      duration: "07:09",
      description:
        "Your have to pay money to watch her torture video - shoot, slap, bleeding, anything you can do ..",
      tags: [ "torture",
        "fun",
        "girl",
        "deepWeb",
        "Lady",
        
        "abuse",],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "Lady",
      views: "79,600",
      rating: 5,
      ratingsCount: 600,
      thumbnail:
        "https://st2.depositphotos.com/1040130/8817/i/450/depositphotos_88173646-stock-photo-concept-model-posing-as-victim.jpg",
    },
    {
      title: "Russian girl. Unused .Not even one time we use her.",
      duration: "07:09",
      description:
        "You can buy this girl. Available for anything but price is a little higher than other",
       tags: [ "torture",
        "fun",
        "girl",
        "deepWeb",
        "Lady",
        ],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "Girl",
      views: "80,602",
      rating: 5,
      ratingsCount: 300,
      thumbnail:
        "https://media.gettyimages.com/id/626573838/video/kidnapped-woman.jpg?s=640x640&k=20&c=r0JxORsf7jwOHbL95pNZ3pgfkGUjGtasb0KIeAF4rys=",
    },
    {
      title: "American little child.",
      duration: "07:09",
      description:
        "Available for selling..Price is too high",
      tags: ["12year", "child", "littlemaja", "cuteamerican", "abuse", "forced", "sex"],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "child",
      views: "10,602",
      rating: 2,
      ratingsCount: 232,
      thumbnail:
        "https://assets.thehansindia.com/h-upload/2020/11/16/1011896-kidnap.webp",
    },
    {
      title: "Indian girl. Yougoshi Gupta. 21 years old",
      duration: "07:09",
      description:
        "Virgin girl. available for anything. price is medium",
      tags: ["indian", "abuse", "southIndian", "Hotty", "Dirty", "sex"],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "Indian",
      views: "40,000",
      rating: 5,
      ratingsCount: 400,
      thumbnail:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/08/18/female-abuse.jpg",
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
      <div className="overflow-y-hidden mx-auto bg-white text-sm border border-gray-300 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-600 font-genuine">Last Chance Picks</h2>
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
              <div className="flex flex-wrap gap-1 mt-1 text-xs">
                {video.tags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-blue-600 hover:underline"
                  >
                    {tag}
                  </a>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-1">
               Category:{" "}
                <span className="text-gray-700">{video.category}</span>
              </div>
              <div className="text-xs text-gray-500">
                By:{" "}
                <span className="text-black font-medium">{video.uploader}</span>{" "}
                | Views: {video.views}
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

export default Girls;
