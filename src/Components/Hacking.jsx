import React from 'react';


const guns = [
    {
      title: "Spy",

      uploader: "gModex",

      rating: 5,
      ratingsCount: 900,
      thumbnail:
        "https://ngm.com.au/wp-content/uploads/2018/10/hacking-tools.jpg",
    },
    {
      title: "Phishing templates",
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
const Hacking = () => {
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
        </div>
    );
};

export default Hacking;