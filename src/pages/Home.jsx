import image1 from "../images/image-4.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import image4 from "../images/image-1.jpg";
import MbToken from "../images/mb-token.svg";
import MetaMask from "../images/meta-mask.svg";
import Opensea from "../images/open-sea.svg";
import Star from "../images/Star.svg";
import Flip from "../images/flip.svg"
import { DummyData } from "../component/DummyData";
const Home = () => {
  return (
    <div>
      <div className="w-full flex lg:flex-row flex-col-reverse justify-between my-16 md:px-10 px-4">
        <div className="lg:w-1/2 w-full md:ml-8 lg:mt-0 mt-5">
          <h2 className="xl:text-[56px] md:text-[40px] text-[30px] mb-6 w-full lg:text-left text-center">
            Rent a <span className="text-[#A02279] font-bold">Place </span>away
            from <span className="text-[#A02279] font-bold">Home</span> in the
            <span className="text-[#A02279] font-bold"> Metaverse</span>
          </h2>
          <p className="text-xl mb-6 md:w-11/12 w-full font-normal lg:text-left text-center">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="flex lg:justify-start justify-center">
            <input
              type="text"
              placeholder="Search for location"
              className="border border-[#A3A3A3] w-4/6 h-12 outline-none px-3"
            />
            <button className="rounded-r-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-white py-2 xl:px-16  px-8">
              Search
            </button>
          </div>
        </div>
        <div className="flex gap-x-3 justify-center items-center">
          <div className="flex flex-col lg:mt-16 gap-y-3">
            <img src={image1} alt="meta-bnb1" />
            <img src={image2} alt="meta-bnb2" />
          </div>
          <div className="flex flex-col lg:-mt-10 gap-y-3">
            <img src={image3} alt="meta-bnb3" />
            <img src={image4} alt="meta-bnb4" />
          </div>
        </div>
      </div>
      <div className="w-full py-2 bg-gradient-to-r from-[#A02279] to-[#A02279] my-10">
        <div className="lg:w-4/5 w-11/12 flex justify-between items-center mx-auto">
          <div className="flex justify-center items-center">
            <img
              src={MbToken}
              alt="mb-token"
              className="lg:w-full lg:h-full md:w-8 w-5 h-10 "
            />
            <p className="text-white lg:text-4xl md:text-xl text-base">
              MBToken
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={MetaMask}
              alt="mb-token"
              className="lg:w-full lg:h-full md:w-8 w-5 h-10"
            />
            <p className="text-white lg:text-4xl md:text-xl text-base font-light">
              METAMASK
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Opensea}
              alt="mb-token"
              className="lg:w-full lg:h-full md:w-8 w-5 h-10"
            />
            <p className="text-white lg:text-4xl md:text-xl text-base font-bold text-center">
              openSea
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:px-10 px-4 ">
        <h3 className="text-center my-8 font-bold md:text-4xl text-3xl">
          Inspiration for your next adventure
        </h3>
        <div className="flex flex-wrap justify-center gap-6 mx-auto place-items-center md:px-3 ">
          {DummyData.map((data) => (
            <div
              key={data.id}
              className="grid place-items-center rounded-2xl w-[290px] h-[372px] border border-[#D7D7D7] px-3 py-4"
            >
              <img src={data.image} alt={data.id} className="w-11/12" />
              <div className="w-full">
                <div className="flex justify-between my-3">
                  <p className="text-sm font-normal">Desert King</p>
                  <p className="text-sm font-bold">1MBT per night</p>
                </div>
                <div className="flex justify-between my-2">
                  <p className="text-sm font-normal">2345km away</p>
                  <p className="text-sm font-normal">
                    available for 2weeks stay
                  </p>
                </div>
                <div className="flex">
                  {Array.apply(null, { length: 5 }).map((e, i) => (
                    <img src={Star} alt="star" key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#A02279] to-[#A02279] mt-10">
        <div className="flex lg:flex-row flex-col-reverse justify-between md:mx-16 mx-5 h-full items-center py-20">
          <div className="md:max-w-[412px] w-full grid text-white md:text-left text-center">
            <h3 className="text-5xl font-bold mb-6">Metabnb NFTs</h3>
            <p className="text-lg mb-6">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className="bg-[#ffff] rounded-lg text-[#A02279] py-3 px-4 w-[156px] md:mx-0 mx-auto">Learn more</button>
          </div>
          <div className="flex md:mb-0 mb-10">
            <img src={Flip} alt="flip1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;