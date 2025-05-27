import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const LeftNav = () => {
    const categories = [
    "All",
    "Action",
    "Fighting",
    "Music & Party",
    "Puzzle & Cards",
    "Role-Playing",
    "Shooter",
    "Simulation",
    "Sports",
    "Strategy",
  ];
    const extras = [
    "$19.99 & Under",
    "Accessories",
    "Price Drops",
    "Strategy Guides",
    "Systems",
    "Used Games",
  ];
    return (
        <div className="space-y-2 ">
            <div className="w-full mx-auto mt-2  rounded-md border-2 border-gray-900 ">
            {/* Header */}
            <div className="bg-gray-900 rounded-t-md py-1 text-center text-white font-bold ">
              SEARCH
            </div>

            {/* Input field */}
            <div className="bg-white p-2 flex flex-col gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-900 rounded-md px-2 py-1 outline-none"
              />

              {/* Dropdown */}
              <select className="border btn-disabled border-gray-900 text-gray-600 font-semibold rounded-md px-2 py-1 outline-none">
                <option className="">All Products</option>
              </select>

              {/* Search Button */}
              <div className="flex justify-center items-center">
                <button className="shadow-lg bg-red-600 rounded-full btn btn-xs hover:bg-red-700 text-white font-bold py-1  tracking-widest">
                  <IoMdArrowDropleft /> SEARCH <IoMdArrowDropright />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full mx-auto bg-white border-2 border-gray-900  rounded-md overflow-hidden ">
            <div className="flex items-center justify-center gap-1 bg-gray-900 text-white px-3">
              <span className="bg-gray-900 rounded-t-md py-1 text-center text-white font-bold">
                Category
              </span>
            </div>
            <ul className="divide-y divide-gray-200 text-gray-600 font-semibold">
              {categories.map((item) => (
                <li
                  key={item}
                  className="hover:bg-gray-100 cursor-pointer px-4 py-2"
                >
                  {item}
                </li>
              ))}
              <li className="border-t border-gray-300 my-1" />
              {extras.map((item) => (
                <li
                  key={item}
                  className="hover:bg-gray-100 cursor-pointer px-4 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
    );
};

export default LeftNav;