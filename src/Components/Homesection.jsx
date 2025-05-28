import React from "react";

const Homesection = () => {
  const featuredCard = [
    {
      category: "Premium",
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/51/93/78/360_F_351937870_LpVA7EKOq17kBeKdhXXRVNJjWtksRQ8c.jpg",
    },
    {
      category: "Premium",

      thumbnail:
        "https://i.ytimg.com/vi/nRT8XDGbjpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDy8PXrfhUczqsSr3xodkIMBNPt5A",
    },
    {
      category: "Premium",

      thumbnail:
        "https://st2.depositphotos.com/1040130/8817/i/450/depositphotos_88173646-stock-photo-concept-model-posing-as-victim.jpg",
    },
    {
      category: "Premium",

      thumbnail:
        "https://media.gettyimages.com/id/626573838/video/kidnapped-woman.jpg?s=640x640&k=20&c=r0JxORsf7jwOHbL95pNZ3pgfkGUjGtasb0KIeAF4rys=",
    },
  ];
  return (
    <section>
      <h1 className="font-redblood text-center pt-3 text-2xl lg:text-4xl text-red-800">
        global Manifest of Dark EXistence
      </h1>
      <div className="grid gap-1 mt-3 justify-items-center grid-cols-4">
        {featuredCard.map((card, idx) => (
          <div key={idx} className="border-gray-800 border-2 p-1 px-2">
            <img
              src={card.thumbnail}
              className="w-[120px] lg:w-[150px] h-[70px] lg:h-[150px] object-cover"
              alt="girlPhot"
            />
            <p className="text-center lg:text-xl text-xs font-terminalfont">
              {card.category}
            </p>
          </div>
        ))}
      </div>
      {/* tab section for home */}
      <div className="my-7 border p-1 border-gray-800">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift rounded-none ">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Tab 1"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Tab 2"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Tab 3"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 3
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homesection;
