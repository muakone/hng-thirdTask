import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ closeWallet }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="lg:hidden block">
      {showSidebar ? (
        <button
          className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="absolute z-30 flex items-center cursor-pointer right-10 top-6 mt-4"
          fill="#00000"
          viewBox="0 0 100 80"
          width="25"
          height="25"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[65vw] backdrop-blur-xl bg-white/50  p-10 text-black fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="grid gap-y-8  mt-6">
          <NavLink
            to={"/"}
            className="text-xl"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            Home
          </NavLink>
          <NavLink
            to={"/place-to-stay"}
            className="text-xl"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            Place to stay
          </NavLink>
          <NavLink
            to={"/"}
            className="text-xl"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            NFTs
          </NavLink>
          <NavLink
            to={"/"}
            className="text-xl"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            Community
          </NavLink>
          <button
            className="rounded-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-white py-2.5 px-3 md:w-[170px] w-[140px] md:block"
            onClick={closeWallet}
          >
            Connect wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
