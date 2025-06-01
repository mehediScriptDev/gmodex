import gif from "../Images/loaderjoker.gif";

import { useState } from "react";
import cross from "../Images/cross.png";

const Financial = () => {
    const videos = [
        {
  "title": "Nationality",
  "description": "Black 100% Authentic nationality documents available for purchase.",
  "tags": ["nationality", "deepWeb", "documents"],
  "uploader": "InfoSecureX",
  "category": "Nationality",
  "views": "1100000$",
  "rating": 5,
  "ratingsCount": 300,
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZm4FhZi0FxSiNagQT0lqHqnE7aqOTlJ_0AQ&s"
}
,
        {
  "title": "Any Bank Statements",
  "description": "Black authentic bank statements available ",
  "tags": ["bank statement", "financial data", "verification"],
  "uploader": "gModex",
  "category": "Bank statement",
  "views": "Negotiable",
  "rating": 3,
  "ratingsCount": 382,
  "thumbnail": "https://d100i36hiycpc5.cloudfront.net/uploads/2022/08/10/bank_statement_2.jpg"
},

        {
  "title": "Credit Card",
  "description": "Stolen detailed credit card information available",
  "tags": ["credit card", "financial data", "payment"],
  "uploader": "gModex",
  "category": "Credit Card",
  "views": "Negotiable",
  "rating": 4,
  "ratingsCount": 300,
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXLt1jN4r17X19uoKru9cHmEXhme08Bi5R25bWE6jnUv0hX83_PsB9y6JDt9Sunono-s&usqp=CAU"
}
,
        {
  "title": "Utility Bills",
  "description": "Black utility bills for water, electricity, and other services.",
  "tags": ["utility bill", "documents", "billing"],
  "uploader": "DocMasterX",
  "category": "Documents",
  "views": "Negotiable",
  "rating": 5,
  "ratingsCount": 600,
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6K9r79X-691G3LuSZbXfWZyOkj_tQRQHguA&s"
}
,
        
        {
          title: "American little child.",
          duration: "07:09",
          description: "Available for selling..Price is too high",
          tags: [
            "12year",
            "child",
            "littlemaja",
            "cuteamerican",
            "abuse",
            "forced",
            "sex",
          ],
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
          description: "Virgin girl. available for anything. price is medium",
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
      const guns = [
    {
      title: "Any bankAc Login",

      uploader: "gModex",

      rating: 5,
      ratingsCount: 2000,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSve9mjHCzb4-GmLeG7NX1ZHChge3yBHJLE2w&s",
    },
    {
      title: "Stolen Credit cards",
      uploader: "gModex",

      rating: 5,
      ratingsCount: 920,
      thumbnail:
        "https://media.licdn.com/dms/image/sync/v2/D5627AQEnAqGDC7TrOg/articleshare-shrink_800/articleshare-shrink_800/0/1740206782895?e=2147483647&v=beta&t=09wdCOF2DTjVP7jhunr9v1r7S2kfr4C_kW73b6aeXgs",
    },
    {
      title: "Social engineering kits",

      uploader: "gModex",

      rating: 5,
      ratingsCount: 3000,
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/hSLnVL4CLBnx7xHzdFbCUM.jpg",
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
            <div className="overflow-y-hidden mx-auto bg-white text-sm border border-gray-300 p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-bold text-gray-600 font-genuine">
                        Best service
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

export default Financial;