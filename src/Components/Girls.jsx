import React from 'react';

const Girls = () => {
    const videos = [
    {
      title: "Ita-Ger 2-0 - Carosello Lucca (3) - FIFA World Cup 2006",
      duration: "00:34",
      description:
        "4 luglio 2006 - Caroselli a Lucca dopo la vittoria degli azzurri contro la Germania padrona di casa!",
      tags: [
        "caroselli", "lucca", "italy", "germany", "world cup", "2006", "azzurri",
      ],
      uploader: "Gabblack",
      uploaded: "21 hours ago",
      category: "Sports",
      views: "55,719",
      rating: 3,
      ratingsCount: 382,
      thumbnail: "https://t3.ftcdn.net/jpg/03/51/93/78/360_F_351937870_LpVA7EKOq17kBeKdhXXRVNJjWtksRQ8c.jpg",
    },
    {
      title: "Disney-MGM Studios 4th of July Fireworks",
      duration: "07:09",
      description:
        "This is the 2005 4th of July fireworks at the Disney-MGM Studios.",
      tags: ["Disney", "MGM", "studios", "fireworks", "july", "fourth", "2005"],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "Entertainment",
      views: "36,602",
      rating: 4,
      ratingsCount: 283,
      thumbnail: "https://i.ytimg.com/vi/nRT8XDGbjpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDy8PXrfhUczqsSr3xodkIMBNPt5A",
    },
    {
      title: "Disney-MGM Studios 4th of July Fireworks",
      duration: "07:09",
      description:
        "This is the 2005 4th of July fireworks at the Disney-MGM Studios.",
      tags: ["Disney", "MGM", "studios", "fireworks", "july", "fourth", "2005"],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "Entertainment",
      views: "36,602",
      rating: 4,
      ratingsCount: 283,
      thumbnail: "https://i.ytimg.com/vi/nRT8XDGbjpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDy8PXrfhUczqsSr3xodkIMBNPt5A",
    },
    {
      title: "Disney-MGM Studios 4th of July Fireworks",
      duration: "07:09",
      description:
        "This is the 2005 4th of July fireworks at the Disney-MGM Studios.",
      tags: ["Disney", "MGM", "studios", "fireworks", "july", "fourth", "2005"],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "Entertainment",
      views: "36,602",
      rating: 4,
      ratingsCount: 283,
      thumbnail: "https://i.ytimg.com/vi/nRT8XDGbjpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDy8PXrfhUczqsSr3xodkIMBNPt5A",
    },
    {
      title: "Disney-MGM Studios 4th of July Fireworks",
      duration: "07:09",
      description:
        "This is the 2005 4th of July fireworks at the Disney-MGM Studios.",
      tags: ["Disney", "MGM", "studios", "fireworks", "july", "fourth", "2005"],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "Entertainment",
      views: "36,602",
      rating: 4,
      ratingsCount: 283,
      thumbnail: "https://i.ytimg.com/vi/nRT8XDGbjpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDy8PXrfhUczqsSr3xodkIMBNPt5A",
    },
    {
      title: "Disney-MGM Studios 4th of July Fireworks",
      duration: "07:09",
      description:
        "This is the 2005 4th of July fireworks at the Disney-MGM Studios.",
      tags: ["Disney", "MGM", "studios", "fireworks", "july", "fourth", "2005"],
      uploader: "themack818",
      uploaded: "1 month ago",
      category: "Entertainment",
      views: "36,602",
      rating: 4,
      ratingsCount: 283,
      thumbnail: "https://i.ytimg.com/vi/nRT8XDGbjpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDy8PXrfhUczqsSr3xodkIMBNPt5A",
    },
  ];
    return (
        <div>
           <div className=" mx-auto bg-white text-sm border border-gray-300 p-4">
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
                <a key={index} href="#" className="text-blue-600 hover:underline">
                  {tag}
                </a>
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Added: {video.uploaded} in Category:{" "}
              <span className="text-gray-700">{video.category}</span>
            </div>
            <div className="text-xs text-gray-500">
              By: <span className="text-black font-medium">{video.uploader}</span> | Views:{" "}
              {video.views}
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