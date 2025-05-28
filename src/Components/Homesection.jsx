import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
      category: "Premium",

      thumbnail:
        "https://media.gettyimages.com/id/626573838/video/kidnapped-woman.jpg?s=640x640&k=20&c=r0JxORsf7jwOHbL95pNZ3pgfkGUjGtasb0KIeAF4rys=",
    },
    {
      category: "Elite",

      thumbnail:
        "https://i.ytimg.com/vi/nRT8XDGbjpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDy8PXrfhUczqsSr3xodkIMBNPt5A",
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
      <div className="my-7 p-2 *:font-genuine text-gray-600 font-semibold">
        {/* name of each tab group should be unique */}
       <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
      <Tab>Title 3</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
      </div>
    </section>
  );
};

export default Homesection;
