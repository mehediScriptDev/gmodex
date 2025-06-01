import gif from "../Images/loaderjoker.gif";

import { useState } from "react";
import cross from "../Images/cross.png";

const Hacking = () => {
  const guns = [
    {
      title: "Hire Black hat",

      uploader: "gModex",

      rating: 5,
      ratingsCount: 900,
      thumbnail:
        "https://ngm.com.au/wp-content/uploads/2018/10/hacking-tools.jpg",
    },
    {
      title: "Phishing templates ",
      uploader: "Bolder Watson",

      rating: 5,
      ratingsCount: 540,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZQRHWHjEM2LBzSdcLHgaLcCA9-0PhmePOg&s",
    },
    {
      title: "Ransomware builders",

      uploader: "Rolter Wins",

      rating: 5,
      ratingsCount: 1300,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzTbXMzxTvkEfp-lOYFG6Zz-JsD1vKkr9Wg&s",
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
  "title": "njRAT",
  "description": "In-depth overview of Remote Access Trojans and their capabilities.",
  "tags": ["RAT", "malware", "cybersecurity"],
  "uploader": "CyberNexus",
  "category": "RATs (Remote Access Trojans)",
  "views": "Negotiable",
  "rating": 4.5,
  "ratingsCount": 210,
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNguNEGrxgF6nak2w-3OVgGVjR1DSnCDpBgA&s"
}

,
  {
  "title": "RedLine Stealer",
  "description": "Comprehensive analysis of RedLine Stealer malware and its data theft methods.",
  "tags": ["stealer", "malware", "cybersecurity"],
  "uploader": "MalwareXpert",
  "category": "Stealer Malware",
  "views": "$150",
  "rating": 4,
  "ratingsCount": 300,
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9C3iq1hhbkhxcxAee768JkOPLIsQ_aOFx5po-GC0L9YiNqnphbIUIhpqhmfKXkANTwQ&usqp=CAU"
}
,
{
  "title": "LockBit Builder (Leaked)",
  "description": "Leaked LockBit ransomware builder with high customization for ransomware campaigns.",
  "tags": ["ransomware", "LockBit", "malware"],
  "uploader": "RansomXpert",
  "category": "Ransomware",
  "views": "$1200",
  "rating": 2,
  "ratingsCount": 232,
  "thumbnail": "https://4a7efb2d53317100f611-1d7064c4f7b6de25658a4199efb34975.ssl.cf1.rackcdn.com/criminals-keep-reusing-leaked-ransomware-builders-showcase_image-9-p-3503.jpeg"
}
,

    {
  "title": "DDoS Attacks",
  "description": "Available for purchase, price higher than others due to exclusivity.",
  "tags": ["botnet", "DDoS", "exclusive"],
  "uploader": "NetStormX",
  "category": "Botnet",
  "rating": 5,
  "ratingsCount": 310,
  "views": "$800",
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnQDd5JH36RkYB1u8B9Wwkyv8ZretgthJf_6N3WWtPHxDo1cV4IKB0DKMEgvtElZRRFM&usqp=CAU"
}

,
    {
  "title": "Custom Phishing Templates",
  "description": "Available for purchase, price higher than others due to exclusivity.",
  "tags": ["phishing", "templates", "exclusive"],
  "uploader": "NetStormX",
  "category": "Phishing",
  "rating": 5,
  "ratingsCount": 310,
  "views": "$800",
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRrQznm-UkprmCc6Dv2yaqPptOQlR6I_Cmw&s"
},
   {
  "title": "Dridex",
  "description": "Available for purchase, price higher than others due to exclusivity.",
  "tags": ["banking trojan", "malware", "exclusive"],
  "uploader": "NetStormX",
  "category": "Banking Trojans",
  "views": "800$",
  "rating": 5,
  "ratingsCount": 310,
  
  "thumbnail": "https://www.knowbe4.com/hubfs/DRIDEX.jpg"
}



,
  ];
  return (
    <div>
      <div className="grid grid-cols-3 justify-items-center items-center gap-1">
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
      <div className="overflow-y-hidden mx-auto bg-white text-sm border border-gray-300 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-600 font-genuine">
           Hot deals
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
    </div>
  );
};

export default Hacking;
