import Image from "next/image";

import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube } from "@/utils/icons";

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className="h-auto grid justify-center py-6 lg:py-12 bg-cover bg-no-repeat bg-fixed  bg-[url('https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1696350474/StreetSnap/Rectangle_110_bdbf22.jpg')]">
          <div className="w-full h-72">
            <div className="text-white text-5xl lg:text-8xl font-normal text-center">
              StreetSnap.co
            </div>
            <div className="text-white text-xl lg:text-4xl font-semibold text-center mt-8">
              Where Fashion Meets the Streets
            </div>
            <div className="text-white text-xs lg:text-lg font-medium text-center mt-6">
              Explore Streetwear That Defines Your Cityscape Style
            </div>
            <button className="w-36 h-8 lg:w-52 lg:h-14 text-white bg-black text-sm lg:text-xl font-medium block m-auto mt-10">
              Browse Product
            </button>
          </div>
        </div>
        <div className="grid justify-center py-16 lg:py-20 bg-white">
          <div className="text-xl lg:text-4xl text-black font-normal">
            Sign up for StreetSnap.co new updates
          </div>
          <div className="text-sm lg:text-2xl text-black font-normal mt-2 lg:mt-6 text-center">
            Get all new updates and sales offers on your email
          </div>
          <div className="flex mt-4 lg:mt-10">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-[78%] h-8 lg:w-[77%] m-auto lg:h-12 border border-gray-400 text-sm lg:text-2xl px-4 lg:px-4 text-lightgray"
            />
            <button className="bg-black text-white text-sm lg:text-2xl w-20 h-8 lg:w-36 lg:h-12">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black p-2 lg:p-4 w-full">
        <div className="flex justify-between items-center p-8">
          <div className="h-full flex items-center">
            <h1 className="text-white text-2xl lg:text-3xl font-bold">
              StreetSnap.co
            </h1>
          </div>
          <div>
            <div className="text-sm lg:text-lg text-white font-normal">
              FOLLOW US ON
            </div>
            <div className="flex justify-between items-center">
              <BiLogoFacebook className="text-white text-xl lg:text-3xl" />
              <BiLogoTwitter className="text-white text-xl lg:text-3xl" />
              <BiLogoYoutube className="text-white text-xl lg:text-3xl" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 py-2 lg:px-8 lg:py-6 justify-between">
          <div className="grid grid-cols-4 gap-6 lg:gap-12 p-6 lg:p-12">
            <div>
              <div className="text-sm lg:text-lg text-white font-normal">
                MEN
              </div>
              <div className="text-white text-xs lg:text-sm mt-2 lg:mt-6 font-normal">
                <div className="pt-4">TOP WEAR</div>
                <div className="pt-4">ETHNIC WEAR</div>
                <div className="pt-4">NIGHT WEAR</div>
                <div className="pt-4">URBAN WEAR</div>
                <div className="pt-4">RURAL WEAR</div>
                <div className="pt-4">OVER WEAR</div>
                <div className="pt-4">PARTY WEAR</div>
                <div className="pt-4">NEW YEAR WEAR</div>
                <div className="pt-4">WEDDING WEAR</div>
                <div className="pt-4">CASUAL WEAR</div>
              </div>
            </div>
            <div>
              <div className="text-sm lg:text-lg text-white font-normal">
                WOMEN
              </div>
              <div className="text-white text-xs lg:text-sm mt-2 lg:mt-6 font-normal">
                <div className="pt-4">TOP WEAR</div>
                <div className="pt-4">ETHNIC WEAR</div>
                <div className="pt-4">NIGHT WEAR</div>
                <div className="pt-4">URBAN WEAR</div>
                <div className="pt-4">RURAL WEAR</div>
                <div className="pt-4">OVER WEAR</div>
                <div className="pt-4">PARTY WEAR</div>
                <div className="pt-4">NEW YEAR WEAR</div>
                <div className="pt-4">WEDDING WEAR</div>
                <div className="pt-4">CASUAL WEAR</div>
              </div>
            </div>
            <div>
              <div className="text-sm lg:text-lg text-white font-normal">
                KIDS
              </div>
              <div className="text-white text-xs lg:text-sm mt-2 lg:mt-6 font-normal">
                <div className="pt-4">TOP WEAR</div>
                <div className="pt-4">ETHNIC WEAR</div>
                <div className="pt-4">NIGHT WEAR</div>
                <div className="pt-4">URBAN WEAR</div>
                <div className="pt-4">RURAL WEAR</div>
                <div className="pt-4">OVER WEAR</div>
                <div className="pt-4">PARTY WEAR</div>
                <div className="pt-4">NEW YEAR WEAR</div>
                <div className="pt-4">WEDDING WEAR</div>
                <div className="pt-4">CASUAL WEAR</div>
              </div>
            </div>
            <div>
              <div className="text-sm lg:text-lg text-white font-normal">
                PARTY
              </div>
              <div className="text-white text-xs lg:text-sm mt-2 lg:mt-6 font-normal">
                <div className="pt-4">TOP WEAR</div>
                <div className="pt-4">ETHNIC WEAR</div>
                <div className="pt-4">NIGHT WEAR</div>
                <div className="pt-4">URBAN WEAR</div>
                <div className="pt-4">RURAL WEAR</div>
                <div className="pt-4">OVER WEAR</div>
                <div className="pt-4">PARTY WEAR</div>
                <div className="pt-4">NEW YEAR WEAR</div>
                <div className="pt-4">WEDDING WEAR</div>
                <div className="pt-4">CASUAL WEAR</div>
              </div>
            </div>
          </div>
          <div className="lg:p-12">
            <div>
              <textarea
                placeholder="TYPE SOMETHING..."
                className="text-[#696969] text-sm bg-black w-full h-[20vh] lg:w-11/12 lg:h-[30vh] p-6 rounded-lg"
                style={{ border: "1px solid #696969" }}
              ></textarea>
            </div>
            <button className="bg-white w-20 h-8 lg:w-28 lg:h-10 text-base lg:text-xl font-bold mt-2 lg:mt-6">
              SEND
            </button>
            <div className="text-white text-base lg:text-xl font-bold mt-4 lg:mt-8">
              WE SUPPORT:
            </div>
            <div className="flex">
              <div className="w-20 h-16 lg:w-24 lg:h-20">
                <Image
                  src="https://cdn.freebiesupply.com/logos/large/2x/visa-logo-png-transparent.png"
                  alt="visa"
                  className=" w-auto h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="w-20 h-16 lg:w-24 lg:h-20">
                <Image
                  src="https://freepngimg.com/thumb/mastercard/2-2-mastercard-free-png-image-thumb.png"
                  alt="mastercard"
                  className=" w-auto h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="w-24 h-16 lg:w-32 lg:h-20">
                <Image
                  src="https://res.cloudinary.com/da05bn5ub/image/upload/v1696006639/razorpay_scanxt.png"
                  alt="razorpay"
                  className=" w-auto h-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="w-20 h-16 lg:w-24 lg:h-20">
                <Image
                  src="https://res.cloudinary.com/da05bn5ub/image/upload/v1696006774/paypal_ofjrxb.png"
                  alt="paypal"
                  className="w-auto flex items-center mt-8"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="w-11/12 m-auto lg:w-full border-[1px] border-solid border-[rgba(255, 255, 255, 0.5)]" />
        <div className="px-2 py-4 lg:py-8 lg:px-4 flex justify-between items-center">
          <div className="text-white text-xs lg:text-sm font-normal">
            All Rights Reserved @StreetSnap.co
          </div>
          <div className="text-white text-xs lg:text-sm font-bold">
            Privacy Policy | Terms of Services | Code of Conduct
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
