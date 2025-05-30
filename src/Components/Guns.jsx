import React from "react";

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
  return (
    <section>
        <h1 className="text-lg font-bold  font-genuine text-gray-500 px-1 pt-3">Hot Right Now</h1>
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
    </section>
  );
};

export default Guns;
