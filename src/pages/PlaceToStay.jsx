import { DummyHomeData } from "../component/DummyData";
import Star from "../images/Star.svg";
import Settings from "../images/setting.svg";
const PlaceToStay = () => {
  return (
    <div className="px-6">
      <div className="w-full my-10 mt-16">
        <div className="flex md:gap-x-14 gap-y-6 md:px-16 gap-x-6 flex-wrap items-center">
            <p className="text-xl font-normal">Resturant</p>
            <p className="text-xl font-normal">Cottage</p>
            <p className="text-xl font-normal">Castle</p>
            <p className="text-xl font-normal">Fantast city</p>
            <p className="text-xl font-normal">beach</p>
            <p className="text-xl font-normal">Carbins</p>
            <p className="text-xl font-normal">off-grid</p>
            <p className="text-xl font-normal">Farm</p>

          <div className="rounded-lg border border-[#B4B4B4] flex justify-between w-[121px] py-2 px-2 md:-mt-2 mt-4 cursor-pointer">
            <p className="text-base font-normal">Location</p>
            <img src={Settings} alt="setting" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mx-auto place-items-center md:px-3 my-8">
        {DummyHomeData.map((data) => (
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
                <p className="text-sm font-normal">available for 2weeks stay</p>
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
  );
};

export default PlaceToStay;
