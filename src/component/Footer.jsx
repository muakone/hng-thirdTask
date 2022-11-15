import Home from "../images/home-white.svg"
import MetaBnb from "../images/metabnb-white.svg"
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import Twitter from "../images/twitter.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='w-full bg-black py-10'>
        <div className="flex md:flex-row flex-col md:justify-start justify-center xl:gap-x-48 md:gap-x-20 mx-16 text-white">
            <div className="grid md:grid-rows-2 md:gap-y-12">
                <div className="flex md:justify-start justify-center">
                    <img src={Home} alt="home" className="lg:w-[41.99px] md:w-[35px] w-[27px] h-[36.37px]" />
                    <img src={MetaBnb} alt="metabnb" className="lg:w-[188.1px] md:w-[150px] w-[120px] h-[36.37px]" />
                </div>
                <div>
                <div className="md:grid grid-cols-6 hidden">
                    <img src={Facebook} alt="facebook" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Twitter} alt="twitter" />
                </div>
                <h4 className="text-base font-normal md:mt-16 md:block hidden">@ 2022 Metabnb</h4>
                </div>
            </div>
            <div className="grid grid-rows-5 mt-4 md:text-left text-center">
                <p className="text-lg font-bold">Community</p>
                <Link to='/' className="text-sm font-normal">NFT</Link>
                <Link to='/' className="text-sm font-normal">Tokens</Link>
                <Link to='/' className="text-sm font-normal">Landlords</Link>
                <Link to='/' className="text-sm font-normal">Discord</Link>
            </div>
            <div className="grid grid-rows-5 mt-4 md:text-left text-center">
                <p className="text-lg font-bold">Places</p>
                <Link to='/' className="text-sm font-normal">Castle</Link>
                <Link to='/' className="text-sm font-normal">Form</Link>
                <Link to='/' className="text-sm font-normal">Beach</Link>
                <Link to='/' className="text-sm font-normal">Learn more</Link>
            </div>
            <div className="grid grid-rows-5 mt-4 md:text-left text-center">
                <p className="text-lg font-bold">About us</p>
                <Link to='/' className="text-sm font-normal">Road map</Link>
                <Link to='/' className="text-sm font-normal">Creators</Link>
                <Link to='/' className="text-sm font-normal">Career</Link>
                <Link to='/' className="text-sm font-normal">Contact us</Link>
            </div>
            <div className="md:hidden gap-x-8 flex mt-4 justify-center">
                    <img src={Facebook} alt="facebook" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Twitter} alt="twitter" />
                </div>
                <h4 className="text-base font-normal mt-3 text-center md:hidden block">@ 2022 Metabnb</h4>
        </div>
    </div>
  )
}

export default Footer