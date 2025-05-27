import React from "react";

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
      category: "abuse",
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
        "sex",
        "abuse",],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "abuse",
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
        "sex",
        "abuse",],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "sex",
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
      category: "abuse",
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
      category: "abuse",
      views: "40,000",
      rating: 5,
      ratingsCount: 400,
      thumbnail:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/08/18/female-abuse.jpg",
    },
  ];
  return (
    <div>
      <div className="overflow-y-hidden mx-auto bg-white text-sm border border-gray-300 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Featured Videos</h2>
          <a href="#" className="text-blue-600 text-xs hover:underline">
            See More Videos
          </a>
        </div>
        {videos.map((video, idx) => (
          <div key={idx} className="flex gap-4 border-t py-4">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-[120px] h-[90px] object-cover"
            />
            <div>
              <h3 className="text-blue-700 font-semibold hover:underline cursor-pointer">
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
                Added: {video.uploaded} in Category:{" "}
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
    </div>
  );
};

export default Girls;
