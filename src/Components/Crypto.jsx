import gif from "../Images/loaderjoker.gif";

import { useState } from "react";
import cross from "../Images/cross.png";

const Crypto = () => {
  const guns = [
    {
      title: "Stable",

      uploader: "gModex",

      rating: 5,
      ratingsCount: 6000,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gxzeu2Dhrs6p6tWYMCGzZ6z4HSWp6zFzYqxaJ_7IyvWKafnFGAiVNlPBMKJwRag9w1A&usqp=CAU",
    },
    {
      title: "Meme",
      uploader: "gModex",

      rating: 5,
      ratingsCount: 900,
      thumbnail:
        "https://bitcoinist.com/wp-content/uploads/2025/03/Crypto-Market-Bounces-Back%E2%80%94Will-DOGE-PEPE-Lead-the-Charge-or-Is-This-New-Meme-Coin-the-Real-Winner.jpg?fit=996%2C550",
    },
    {
      title: "Hybrid",

      uploader: "gModex",

      rating: 5,
      ratingsCount: 876,
      thumbnail:
        "https://www.pymnts.com/wp-content/uploads/2019/12/vechain-blockchain-theriksbank-bottlepay-bitcoin.jpg",
    },
  ];
  const videos = [
    {
      title: "PEPE",

      description: "PepeCoin is here to ribbit and roar!",
      tags: ["MemeKing", "HopTrend", "RibbitRage"],
      uploader: "gModex",

      views: "100000coin - 1$",
      rating: 5,
      ratingsCount: 1200,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7VzprMLG7fH-JpyM0qRB1zqHww3NnGD2YQ&s",
    },
    {
      title: "Wif",
      duration: "07:09",
      description: "Wif: the adorable pup coin wagging its way to the top!",
      tags: ["PupPower", "CuteCoin", "TopDoge"],
      uploader: "SparkyMint",

      category: "Lady",
      views: "10coin - 3$",
      rating: 5,
      ratingsCount: 900,
      thumbnail:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/28752.png",
    },
    {
      title: "BTC",

      description: "BTC: the original digital gold, still leading the pack!",
      tags: ["OGCoin", "CryptoKing", "TopPick"],
      uploader: "ByteSovereign",
      uploaded: "1 month ago",
      views: "1coin - 70000$",

      rating: 5,
      ratingsCount: 600,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKh1QuXvIIFcZ9QxAKXFYWB0TkPjkbPw7P5A&s",
    },
    {
      title: "PulsePixel",

      description: "PulsePixel: where crypto meets cutting-edge creativity.",
      tags: ["FreshMint", "TechTrend", "NextBigThing"],
      uploader: "NovaNode",
      rating: 4,
      views: "300$",
      ratingsCount: 300,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqrv6agdcBSmDF9HIBD_iapmqwzeLIMg9mg&s",
    },
    {
      title: "Eth",

      description: "ETH: fueling the future of decentralized finance!",
      tags: ["SmartChain", "FutureFinance", "TopToken"],
      uploader: "BlockSmith",

      views: "2000$",
      rating: 5,
      ratingsCount: 3000,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQls2jnnDbUVo70i-8CSmVct3_Epc8FtRcQxV1Jxa4Vz-ZF5eNztuy2W-G5aATs630_hYg&usqp=CAU",
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
      <div className="overflow-y-hidden mx-auto bg-gray-50 text-sm border border-gray-300 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-600 font-genuine">
            Hot deals
          </h2>
          <a
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="text-blue-600 cursor-pointer text-xs underline"
          >
            See More Crypto
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

export default Crypto;
