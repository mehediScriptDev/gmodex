import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import gif from "../Images/loaderjoker.gif";
import { useState } from "react";
import cross from "../Images/cross.png";

const Homesection = () => {
  const featuredCard = [
    {
      category: "Eclipse",
      thumbnail:
        "https://64.media.tumblr.com/d4a8305d1ea38e0010a4dac0d4b0f25e/tumblr_oq9bdk4ZQb1vpejtho1_500.jpg",
    },
    {
      category: "Phantom",

      thumbnail:
        "https://whitesandstreatment.com/wp-content/uploads/2017/01/most-addictive-drugs-1.jpg",
    },
    {
      category: "Dust",

      thumbnail:
        "https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2021/05/indmoney-crypto-featured-1.jpg",
    },
    {
      category: "Elite",

      thumbnail:
        "https://i.ytimg.com/vi/nRT8XDGbjpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDy8PXrfhUczqsSr3xodkIMBNPt5A",
    },
  ];
  const videos = [
    {
      title: "Head to Head - Glock",
      duration: "00:34",
      description:
        "Your best friend. Most selling thing. Just try it. No one can beat this.",
      tags: ["headLover", "RealPlayer"],
      uploader: "Garban",
      uploaded: "300$",
      category: "Eclipse",
      views: "1,00,719",
      rating: 3,
      ratingsCount: 500,
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0082/9502/2628/files/hicapa-or-glock-4_480x480.jpg?v=1630919000",
    },
    {
      title: "Bitcoin - Stolen Crypto",
      duration: "07:09",
      description:
        "You no have to waste money on real btc..This is best selling item",
      tags: ["torture", "btc", "trade", "crypto", "millionare", "future"],
      uploader: "cryptoKing",
      uploaded: "40k",
      category: "rare",
      views: "36,000",
      rating: 4,
      ratingsCount: 300,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41lcE7F38ToYlGVotD6v1TCLU1eVye3Z5mA&s",
    },
    {
      title: "Extreme Thing - Youve ever seen.",
      duration: "07:09",
      description: "This will be a great for your power. Market/power..",
      tags: ["bioChemi", "boooo", "vanish"],
      uploader: "Dr Vegapunk",
      uploaded: "5000$",
      category: "exxplottion",
      views: "79,600",
      rating: 5,
      ratingsCount: 600,
      thumbnail:
        "https://globalbiodefense.com/wp-content/uploads/2020/02/biological_terrorism.jpg",
    },
    {
      title: "Minion - The Slider",
      duration: "07:09",
      description: "This is short n heavy thing. You know what it can do.",
      tags: ["littlePig", "LittleKing"],
      uploader: "themackShoott",
      uploaded: "100$",
      category: "gan",
      views: "80,602",
      rating: 5,
      ratingsCount: 300,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNsTc5MNtIp4v9vbcPbeuxyEBCmvzakIBcA&s",
    },
    {
      title: "Eyecam - Badget friendly",
      duration: "07:09",
      description: "Replace your eye into high quality camera.",
      tags: ["littleMonster", "Ghoost", "cam", "eyecam", "HiddenCam"],
      uploader: "tishatalker",
      uploaded: "500$",
      category: "cam",
      views: "10,602",
      rating: 2,
      ratingsCount: 232,
      thumbnail:
        "https://www.vice.com/wp-content/uploads/sites/2/2017/06/1497290204105-eyecam_40.jpeg",
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

  const topRated = [
    
    {
      title: "BTC - (000.3)",
     
      description:
        "Buy your crypto now.",
      tags: ["btc", "Bitcoin", "cryptoking"],
      uploader: "cryptoking",
      
    
      views: "1000$",
      rating: 5,
      ratingsCount: 930,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMDFCmGplhzhzVGNTwpTtRgLGoVOBN1YRRzQ&s",
    },
    {
      title: "100gm life",
     
      description:
        "Buy your best oxygen/",
      tags: ["coc", "hero", "cocaaaiiinn"],
      uploader: "Yo Rigi",
      
    
      views: "100$",
      rating: 5,
      ratingsCount: 9000,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXpYLmzgE536jLkcn9EZFPGgQkPrPd8BlGA&s",
    },
    {
      title: "Anti-drone gun",
     
      description:
        "Dont have to affraid bout drone.",
      tags: ["dronehunter", "drone", "realhunter"],
      uploader: "collbapat",
      
    
      views: "440$",
      rating: 5,
      ratingsCount: 906,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaOSXcZkeEuZFgmcfcOBdh4sbNINj8gwRQQ&s",
    },
   
    {
      title: "Drone",
     
      description:
        "Best choice for you",
      tags: ["drone", "BigSizeDrone", "DroneGun"],
      uploader: "Collbapat",
      
    
      views: "700$",
      rating: 5,
      ratingsCount: 760,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-XDiDnHFP0IWRtluehyHOMO1ER4orVXcmpxeqylsi6y4qGOd8dhWLBotkAdKOQhROlM&usqp=CAU",
    },
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
      title: "Bluster",
     
      description:
        "Best thing for your work. Area:2km",
      tags: ["Boo", "Babye", "moonshot"],
      uploader: "rouby",
      
    
      views: "100$",
      rating: 5,
      ratingsCount: 333,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5YEm1JdXa27LUIlXdiP2ZMuYUNCaQ5BWqVQ&s",
    },
    {
      title: "Rappey Virus",
     
      description:
        "Not selly things. Real product.",
      tags: ["virus", "deadii", "dangerous"],
      uploader: "dr tesla",
      
    
      views: "1000$",
      rating: 5,
      ratingsCount: 103,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmg7sbSTwao9wnhxWXCWdvgJh63YJdNGJ0FaIn0pxRREaWkxdbT5yjUsFo3mV9fMbxkk&usqp=CAU",
    },
     {
      title: "The Satanic Rituals",
     
      description:
        "Satanic rituals book. Try it and see what happen",
      tags: ["HailSaytan", "SatanicBible", "777"],
      uploader: "Emilia",
      
    
      views: "10$",
      rating: 5,
      ratingsCount: 903,
      thumbnail:
        "https://burnsiderarebooks.cdn.bibliopolis.com/pictures/140945112.jpg?auto=webp&v=1686348388",
    },
    {
      title: "The Satanic Bible",
     
      description:
        "The real satanic bible. buy now",
      tags: ["HailSaytan", "Bible", "666"],
      uploader: "Emilia",
      
    
      views: "10$",
      rating: 5,
      ratingsCount: 997,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUB2mU1n_Vg3u8sohG9R5_nPHOhSzp8opO25qf5Krt1UjoSPjip7Go5khehT0VniPfzo&usqp=CAU",
    },
    {
      title: "The Satanic Bible",
     
      description:
        "The real satanic bible. buy now",
      tags: ["HailSaytan", "Bible", "666"],
      uploader: "Emilia",
      
    
      views: "10$",
      rating: 5,
      ratingsCount: 997,
      thumbnail:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1435430607i/82333.jpg",
    },
  ]
  return (
    <section>
      <h1 className="font-redblood text-center pt-3 text-2xl sm:text-4xl lg:text-4xl text-red-800">
        global Manifest of Dark EXistence
      </h1>
      <div className="grid gap-1 mt-3 justify-items-center grid-cols-4">
        {featuredCard.map((card, idx) => (
          <div key={idx} className="border-gray-800 border-2 p-1 px-2">
            <img
              onClick={() => document.getElementById("my_modal_5").showModal()}
              src={card.thumbnail}
              className="w-[120px] lg:w-[150px] h-[70px] lg:h-[150px] object-cover"
              alt="Category"
            />
            <p className="text-center lg:text-xl text-xs font-terminalfont">
              {card.category}
            </p>
          </div>
        ))}
      </div>
      {/* tab section for home */}
      <div className="my-7 p-2 *:font-genuine text-gray-600 font-semibold">
        {/* name of each tab group should be unique */}
        <Tabs>
          <TabList>
            <Tab>Featured</Tab>
            <Tab>Top Rated</Tab>
            <Tab>Premium</Tab>
          </TabList>

          <TabPanel>
            <div>
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
                    <p className="text-gray-600">{video.description}</p>
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
                      Price: {video.uploaded} Category:{" "}
                      <span className="text-gray-700">{video.category}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      By:{" "}
                      <span className="text-black font-medium">
                        {video.uploader}
                      </span>{" "}
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
              <div className="flex justify-end pr-5">
                <a
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="text-blue-600 text-xs cursor-pointer underline"
                >
                  See More Items
                </a>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {topRated.map((video, idx) => (
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
                    <p className="text-gray-600">{video.description}</p>
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
                      
                      <span className="text-gray-700">{video.category}</span>
                    </div>
                    <div className="text-xs text-gray-500">
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
              <div className="flex justify-end pr-5">
                <a
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="text-blue-600 text-xs cursor-pointer underline"
                >
                  See More Items
                </a>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
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
                  className="rounded-full object-cover lg:w-40 w-28 h-28  lg:h-40"
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

export default Homesection;
