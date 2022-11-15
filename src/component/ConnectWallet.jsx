import Connect from "../images/connect-wallet.svg";
import Arrow from "../images/arrow.svg";
import MetaMask from "../images/meta-mask-Image.svg";

const ConnectWallet = ({closeWallet}) => {
  return (
    <div className="w-full h-full absolute left-0 top-0 backdrop-blur bg-[#404040]/30 z-50 flex flex-col items-center justify-center">
      <div className="bg-white md:w-[500px] w-11/12 rounded-2xl py-5 px-5">
        <div className="flex justify-between mb-4 items-center">
          <h4 className="text-2xl font-bold">Connect Wallet</h4>
          <button className="flex text-4xl text-black items-center cursor-pointer" onClick={closeWallet}>
            x
          </button>
        </div>
        <hr />
        <div className="mt-5">
          <p className="text-base font-normal text-[#333333]">
            Choose your preferred wallet
          </p>
          <div className="w-full rounded-xl border border-[#CFD8DC] flex justify-between mt-7 py-3 px-3">
            <div className="flex gap-x-8">
              <img src={MetaMask} alt="connect-wallet" />
              <p className="text-lg font-semibold flex items-center">
                Metamask
              </p>
            </div>
            <img src={Arrow} alt="arrow" />
          </div>
          <div className="w-full rounded-xl border border-[#CFD8DC] flex justify-between mt-4 py-3 px-3">
            <div className="flex gap-x-8">
              <img src={Connect} alt="connect-wallet" />
              <p className="text-lg font-semibold text-center flex items-center">
                WalletConnect
              </p>
            </div>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConnectWallet;
