import { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeColoured from "../images/home-coloured.svg";
import MetaBnbColoured from "../images/metabnb-coloured.svg";
import ConnectWallet from "./ConnectWallet";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [openWallet, setOpenWallet] = useState(false);
  const handleToggleWallet = (value) => {
    setOpenWallet(value);
  };
  return (
    <div className="md:mx-16 mx-4 my-8">
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <img
            src={HomeColoured}
            alt="home"
            className="lg:w-[41.99px] md:w-[35px] w-[27px] h-[36.37px]"
          />
          <img
            src={MetaBnbColoured}
            alt="meta-bnb"
            className="lg:w-[188.1px] md:w-[150px] w-[120px] h-[36.37px]"
          />
        </div>
        <div className="lg:flex justify-between lg:gap-x-12 hidden">
          <NavLink to={"/"} className="text-xl">
            Home
          </NavLink>
          <NavLink to={"/place-to-stay"} className="text-xl">
            Place to stay
          </NavLink>
          <NavLink to={"/"} className="text-xl">
            NFTs
          </NavLink>
          <NavLink to={"/"} className="text-xl">
            Community
          </NavLink>
        </div>
        <button
          className="rounded-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-white py-2.5 px-3 md:w-[170px] w-[140px] lg:block hidden"
          onClick={() => handleToggleWallet(true)}
        >
          Connect wallet
        </button>
      </div>
      <Sidebar closeWallet={() => handleToggleWallet(true)} />
      {openWallet && (
        <ConnectWallet closeWallet={() => handleToggleWallet(false)} />
      )}
    </div>
  );
};

export default Navbar;
