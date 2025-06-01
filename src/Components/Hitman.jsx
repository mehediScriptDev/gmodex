import Marquee from "react-fast-marquee";
import gif from "../Images/loaderjoker.gif";

import { useState } from "react";
import cross from "../Images/cross.png";

const Hitman = () => {
  const videos = [
    {
  "title": "Victor",
  "description": "Exclusive footage of a professional hitman executing a contract with precision.",
  "tags": ["hitman", "assassination", "stealth"],
  "uploader": "gModex",
  "category": "Hitman",
  "views": "Negotiable",
  "rating": 4.5,
  "ratingsCount": 210,
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-v-40ql0ZyTtTmCcsPZHcHNGrpbaLhOOP8p9xxHiJnXQ-2HIhja0hzKa8mwL0c00f2zvhRl-5B1Q9gqjClZ3ZkQ6e0S8yi12hNPeEpU"
}
,
  {
  "title": "Kabir Bettal",
  "description": "Exclusive hitman footage involving a high-stakes contract in the Arabian region.",
  "tags": ["hitman", "contract", "assassination"],
  "uploader": "gModex",
  "category": "Hitman",
  "views": "Negotiable",
  "rating": 4,
  "ratingsCount": 300,
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfihyF8pY8naQTeluOyOxqQc17WiyLeXKFOw&s"
},
{
      title: "Tittle gang",
      duration: "07:09",
      description: "Available for anything",
      tags: [
        "highPrice","gang", "kiddnappers"
      ],
      uploader: "gModex",
      uploaded: "1 month ago",
      category: "Kidnaper",
      views: "nagotiable",
      rating: 2,
      ratingsCount: 232,
      thumbnail:
        "https://static01.nyt.com/images/2025/05/02/multimedia/02int-haiti-trump-gangs-vblp/02int-haiti-trump-gangs-vblp-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    },

    {
  "title": "Rendy Slider",
  "description": "Available for purchase, price higher than others due to exclusivity.",
  "tags": ["hitman", "contract", "exclusive"],
  "uploader": "gModex",
  "category": "Hitman",
  "views": "Negotiable",
  "rating": 5,
  "ratingsCount": 310,
  thumbnail:
        "https://i.guim.co.uk/img/media/0a282d9a2211bca156a543750eb479736357c77b/370_242_600_360/master/600.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=248945a40da477154c455ac890f88810",
}
,
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
    <section>
      <div className="bg-gray-800 mb-3">
        <h1 className="text-lg font-bold  font-genuine text-red-600 px-1 pt-3">
          🚨 Exclusive Service Notice 🚨
        </h1>
        <Marquee className="px-5 font-genuine py-2 text-gray-400">
          Only gModex provides this service. Gold Card holders or others are not
          allowed to resell it. We guarantee 100% satisfaction.
        </Marquee>
      </div>

      <div className="overflow-y-hidden mx-auto bg-white text-sm border border-gray-300 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-600 font-genuine">
            Available for work
          </h2>
          <a
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="text-blue-600 cursor-pointer text-xs underline"
          >
            See More 
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
              <h3
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="text-blue-700 font-genuine font-semibold underline cursor-pointer"
              >
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
    </section>
  );
};

export default Hitman;
