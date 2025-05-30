import gif from "../Images/loaderjoker.gif"

import { useState } from "react";
import cross from "../Images/cross.png";

const Guns = () => {
  const guns = [
    {
      title: "Glock G19",

      uploader: "Gabblack",

      rating: 3,
      ratingsCount: 382,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2gz4AKh6kNqGBfLFArVdx7FXoZYqwTOBqQ&s",
    },
    {
      title: "Colt Python",
      uploader: "Collapat",

      rating: 4,
      ratingsCount: 300,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZWbWAWc_WKo3zhAQ5Jn2bLtl1WDJ07oJTMwU2X2fqIm32sZy19X-d4YVnrWXfpWSfV8&usqp=CAU",
    },
    {
      title: "BlackHawk",

      uploader: "Rumi",

      rating: 5,
      ratingsCount: 600,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCk9W0CrKiclovKapZX2ylRBxIZbQqlYnEaSs1iUbS4nPZPCTwvdlq6l9uLjXX8Pj0Bk&usqp=CAU",
    },
    {
      title: "Mossberg 590",

      uploader: "themack818",

      rating: 5,
      ratingsCount: 300,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazXPaHu3q8RwVuqrIqlivm__BLra-6tBnLw&s",
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

  const videos = [
    {
      title: "SIG SAUER P365",
     
      description:
        "Don’t just carry. Carry confidence with the Sig P365.",
      tags: ["Littlehit", "MostChoice", "Topseller"],
      uploader: "Patricaia",
      
    
      views: "80$",
      rating: 4.5,
      ratingsCount: 875,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyby877r2RGe2G-3Hi_5fYEzHPeKbWJtOPQ&s",
    },
    {
      title: "Heritage Rough Rider",
      duration: "07:09",
      description:
        "Experience Old West charm with modern reliability..",
      tags: ['reliable',
  'classic',
  'single-action',],
      uploader: "petergrand",
     
      category: "Lady",
      views: "120$",
      rating: 4,
      ratingsCount: 300,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7dKf15WdhCAXMKyo_kiVdgnhLJaM9HWNvQ&s",
    },
    {
      title: "Ruger 10/12",
      
      description:
        "Reliable, accurate, and built to last.",
      tags: ["#Ruger1022",

"#22LRRifle",

"#RugerSemiAuto"],
      uploader: "themack818",
      uploaded: "1 month ago",
      views: "150$",
      
      rating: 5,
      ratingsCount: 600,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlY5945Mug4jIROlF_OIdM7HrlOgcYFxJCXg&s",
    },
    {
      title: "Ruger Vaquero",
      
      description:
        "Blending timeless Western style with Ruger toughness",
      tags: ['cowboy-revolver',
  '357mag',
  '45lc',
  'western-style',],
      uploader: "themack818",
      rating: 4,
      views: "300$",
      ratingsCount: 300,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUK95h2ZpeKbMEH7QEYmTurB6eXKXtfsmYQ&s",
    },
    {
      title: "FN F2000",
      
      description: "Only for agent member holder.",
      tags: [
         'bullpup',
  'tactical',
  'fn2000',
  'assault-rifle',
  '5.56x45mm',
  'futuristic-design',
      ],
      uploader: "hanigner",
     
      views: "1000$",
      rating: 5,
      ratingsCount: 5000,
      thumbnail:
        "https://images.indiatvnews.com/maininternational/2015/1434543687fn2000-final.jpg",
    },
  ];
  return (
    <section>
      <h1 className="text-lg font-bold  font-genuine text-gray-600 px-1 pt-3">
        Hot Right Now
      </h1>
      <div className="grid grid-cols-4 justify-items-center gap-1">
        {guns.map((video, idx) => (
          <div key={idx} className="flex flex-col gap-4  py-4">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[110px] object-cover"
            />
            <div>
              <h3
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="text-blue-700 font-genuine text-xs lg:text-sm font-semibold underline cursor-pointer"
              >
                {video.title}
              </h3>

              <div className="text-xs text-gray-500">
                By:{" "}
                <span className="text-black font-medium">{video.uploader}</span>{" "}
              </div>
              <div className="flex sm:flex-row lg:flex-row flex-col items-center gap-1 text-red-500 mt-1">
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
      <div>
        <div className="overflow-y-hidden mx-auto bg-gray-50 text-sm border border-gray-300 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-600 font-genuine">
              Selling Out Soon
            </h2>
            <a
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="text-blue-600 cursor-pointer text-xs underline"
            >
              See More Videos
            </a>
          </div>
          {videos.map((video, idx) => (
            <div key={idx} className="flex gap-4 bg-white border-t py-4">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-[120px] h-[90px] lg:h-[110px] object-cover"
              />
              <div>
                <h3
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="text-blue-700 font-genuine font-semibold underline cursor-pointer"
                >
                  {video.title}
                </h3>
                <p className="text-gray-600 font-genuine">{video.description}</p>
                <div className="flex flex-wrap gap-1 mt-1 text-xs">
                  {video.tags.map((tag, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-blue-600  hover:underline"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
               
                <div className="text-xs text-gray-500 font-oldstylefont">
                  By:{" "}
                  <span className="text-black font-medium">
                    {video.uploader}
                  </span>{" "}
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
    </section>
  );
};

export default Guns;
