"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiTwotoneStar,
  AiOutlineShoppingCart,
  AiOutlineGift,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbArrowsRightLeft } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { LiaCommentDollarSolid, LiaWalletSolid } from "react-icons/lia";
import { MdOutlineLocalOffer } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

const BankOfferComponent = ({ offer, content }) => {
  return (
    <div className="border border-[#A0A0A0] py-5 px-2">
      <div className="text-lg lg:text-xl text-black font-medium">{offer}</div>
      <div className="flex justify-center lg:gap-4 pt-2">
        <MdOutlineLocalOffer className="text-2xl text-black" />
        <div className="text-xs lg:text-sm text-[#717171] font-normal">
          {content}
        </div>
      </div>
    </div>
  );
};


const ProductPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedTwo, setIsClickedTwo] = useState(false);
  const [isClickedThree, setIsClickedThree] = useState(false);
  const [isClickedFour, setIsClickedFour] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [selectIndex, setSelectIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };



  const offerArray = [
    <BankOfferComponent
      offer={"SBI Bank Offer"}
      content={"Buy 3 Get extra 10% on The Souled Store see details"}
    />,
    <BankOfferComponent
      offer={"SBI Bank Offer"}
      content={"Buy 3 Get extra 10% on The Souled Store see details"}
    />,
    <BankOfferComponent
      offer={"SBI Bank Offer"}
      content={"Buy 3 Get extra 10% on The Souled Store see details"}
    />,
  ];

  const clickNext = () => {
    if (selectIndex < offerArray.length) {
      console.log(offerArray[selectIndex]);
      if (selectIndex === offerArray.length - 1) {
        setSelectIndex(0);
      } else {
        setSelectIndex(selectIndex + 1);
      }
    }
  };

  const clickPrevious = () => {
    if (selectIndex < offerArray.length) {
      console.log(offerArray[selectIndex]);
      if (selectIndex === 0) {
        setSelectIndex(offerArray.length - 1);
      } else {
        setSelectIndex(selectIndex - 1);
      }
    }
  };

  const buttonStyle = isClicked
    ? "w-16 h-12 rounded-full border-8 border-gray-500"
    : "";
  const buttonStyleTwo = isClickedTwo
    ? "w-16 h-12 border-8 border-gray-500"
    : "";
  const buttonStyleThree = isClickedThree
    ? "w-16 h-12 border-8 border-gray-500"
    : "";
  const buttonStyleFour = isClickedFour
    ? "w-16 h-12 border-8 border-gray-500"
    : "";

  const imageArray = [
    <img
      src="https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1696333661/StreetSnap/Property_1_Rectangle_100_wqce33.jpg"
      alt=""
    />,
    <img
      src="https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1696333644/StreetSnap/Rectangle_98_uvzqnh.jpg"
      alt=""
    />,
    <img
      src="https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1696443314/StreetSnap/Rectangle_120_nsxbvl.jpg"
      alt=""
    />,
    <img
      src="https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1696443314/StreetSnap/Rectangle_120_nsxbvl.jpg"
      alt=""
    />,
    <img
      src="https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1696443356/StreetSnap/Rectangle_123_fnfvuh.jpg"
      alt=""
    />,
  ];



  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-8 px-4">
        <div className="">
          <Carousel
            showArrows={true}
            selectedItem={selectedItem}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <div
                  onClick={onClickHandler}
                  title={label}
                  className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 w-8 lg:w-16 h-8 lg:h-16 text-white p-2 rounded-full cursor-pointer flex justify-center items-center ml-5 opacity-50"
                  style={{ backgroundColor: "#6f6f71" }}
                >
                  <AiOutlineArrowLeft className="w-3 lg:w-8 h-3 lg:h-8" />
                </div>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <div
                  onClick={onClickHandler}
                  title={label}
                  className="absolute right-0 z-10 top-1/2 transform w-8 lg:w-16 h-8 lg:h-16 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer flex justify-center items-center mr-5 opacity-50"
                  style={{ backgroundColor: "#6f6f71" }}
                >
                  <AiOutlineArrowRight className="w-8 h-8" />
                </div>
              )
            }
          >
            <img
              src="https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1696333661/StreetSnap/Property_1_Rectangle_100_wqce33.jpg"
              alt=""
              className="m-auto"
            />
            <img
              src="https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1696333644/StreetSnap/Rectangle_98_uvzqnh.jpg"
              alt=""
              className="m-auto"
            />
            <img
              src="https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1696443314/StreetSnap/Rectangle_120_nsxbvl.jpg"
              alt=""
              className="m-auto"
            />
            <img
              src="https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1696443314/StreetSnap/Rectangle_120_nsxbvl.jpg"
              alt=""
              className="m-auto"
            />
            <img
              src="https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1696443356/StreetSnap/Rectangle_123_fnfvuh.jpg"
              alt=""
              className="m-auto"
            />
          </Carousel>

          <div className="grid grid-cols-5 gap-6 px-8 py-8 cursor-pointer">
            {imageArray.map((el, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedItem(index);
                  //   scrollToComponent();
                }}
                className="cursor-pointer"
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 lg:px-8">
          <div className="flex gap-1 py-2 lg:py-4 lg:gap-4">
            <div className="text-sm lg:text-2xl text-black font-normal">
              Oversized Double Layers Blazer For Women
            </div>
            <AiOutlineHeart className="text-xl lg:text-3xl text-black font-light" />
            <AiOutlineShareAlt className="text-xl lg:text-3xl text-black" />
          </div>

          <div className="flex gap-1 lg:gap-2 py-2 lg:py-4">
            <div className="text-black text-xl lg:text-4xl font-medium">
              $4,999.00
            </div>
            <div className="text-xs lg:text-base font-medium text-[#717171] flex items-end">
              MRP: $8999.00 Inclusive of all taxes
            </div>
          </div>
          <div className="flex gap-1 lg:gap-2 py-1 lg:py-2">
            <div>
              <AiTwotoneStar className="text-base lg:text-2xl text-yellow-500" />
            </div>
            <div className="text-xs lg:text-base color-[#303030] font-normal">
              4.5 Ratings
            </div>
          </div>
          <div className="text-red-500 text-xs lg:text-lg font-medium py-2 lg:py-4">
            Hurry! Only 5 pieces left
          </div>
          <div className="flex gap-2 lg:gap-4 py-2 lg:py-4">
            <div className="text-sm lg:text-xl text-black font-normal w-1/2">
              Select Size:
            </div>
            <button className="w-14 h-6 lg:w-20 lg:h-9 text-base lg:text-xl border border-[#999] flex justify-center items-center">
              S
            </button>
            <button className="w-14 h-6 lg:w-20 lg:h-9 text-base lg:text-xl border border-[#999] flex justify-center items-center">
              M
            </button>
            <button className="w-14 h-6 lg:w-20 lg:h-9 text-base lg:text-xl border border-[#999] flex justify-center items-center">
              L
            </button>
            <button className="w-14 h-6 lg:w-20 lg:h-9 text-base lg:text-xl border border-[#999] flex justify-center items-center">
              XL
            </button>
            <button className="w-14 h-6 lg:w-20 lg:h-9 text-base lg:text-xl border border-[#999] flex justify-center items-center">
              XXL
            </button>
          </div>
          <div className="flex gap-4 lg:gap-4 py-2 lg:py-4">
            <div className="text-sm lg:text-xl text-black font-normal">
              Select Color:
            </div>
            <div
              className={`w-6 h-6 lg:w-9 lg:h-9 text-xl rounded-full border border-[#999] bg-black flex justify-center items-center ${buttonStyle}`}
              onClick={handleClick}
            ></div>
            <div
              className={`w-6 h-6 lg:w-9 lg:h-9 text-xl rounded-full border border-[#f2f3ee] bg-[#f2f3ee] flex justify-center items-center ${buttonStyleTwo}`}
              onClick={handleClickTwo}
            ></div>
            <div
              className={`w-6 h-6 lg:w-9 lg:h-9 text-xl rounded-full border border-pink-500 bg-pink-500 flex justify-center items-center ${buttonStyleThree}`}
              onClick={handleClickThree}
            ></div>
            <div
              className={`w-6 h-6 lg:w-9 lg:h-9 text-xl rounded-full border border-[#c2b09d] bg-[#c2b09d] flex justify-center items-center ${buttonStyleFour}`}
              onClick={handleClickFour}
            ></div>
          </div>
          <button className="w-52 h-10 lg:w-96 lg:h-12 m-auto bg-black text-white text-xl lg:text-2xl mt-4 flex justify-center items-center gap-4">
            <AiOutlineShoppingCart />
            Add to Cart
          </button>
          <div className="text-base lg:text-2xl text-black font-medium py-2 lg:py-4">
            Select Delivery Location
          </div>
          <div className="text-xs lg:text-lg text-[#717171] font-normal py-1 lg:py-2">
            Enter the correct area pincode to check the availability of service:
          </div>
          <div className="flex py-2 lg:py-4">
            <input
              type="text"
              className="w-1/2 h-8 lg:h-11 text-xs lg:text-xl border border-black px-4"
              placeholder="Enter Pincode"
              // placeholder={<IoLocationOutline /> }
            />
            <button className="w-16 lg:w-24 h-8 lg:h-11 bg-black text-white text-sm lg:text-xl flex justify-center items-center">
              Apply
            </button>
          </div>
          <div className="flex gap-2 lg:gap-4 py-2 lg:py-4">
            <div className="text-xs lg:text-lg text-black text-center font-normal">
              <CiDeliveryTruck className="text-2xl lg:text-4xl m-auto" />
              <div>Fastest Delivery</div>
            </div>
            <div className="text-xs lg:text-lg text-black text-center font-normal">
              <TbArrowsRightLeft className="text-2xl lg:text-4xl m-auto" />
              <div>30 Days Exchange</div>
            </div>
            <div className="text-xs lg:text-lg text-black text-center font-normal">
              <GiReturnArrow className="text-2xl lg:text-4xl m-auto" />
              <div>30 Days Return</div>
            </div>
            <div className="text-xs lg:text-lg text-black text-center font-normal">
              <LiaCommentDollarSolid className="text-2xl lg:text-4xl m-auto" />
              <div>Pay on Delivery</div>
            </div>
          </div>
          <div className="py-6">
            <div className="text-black text-2xl font-medium">Offers</div>
            <div className="text-[#717171] text-lg font-normal">
              Here are available offers for this product:
            </div>
          </div>
          <div className="">
            <Carousel
              showStatus={false}
              showArrows={false}
              infiniteLoop
              showIndicators={false}
              centerMode={true}
              selectedItem={selectIndex}
              className="px-8 pl-4"
            >
              <BankOfferComponent
                offer={"SBI Bank Offer"}
                content={"Buy 3 Get extra 10% on The Souled Store see details"}
              />
              <BankOfferComponent
                offer={"SBI Bank Offer"}
                content={"Buy 3 Get extra 10% on The Souled Store see details"}
              />
              <BankOfferComponent
                offer={"SBI Bank Offer"}
                content={"Buy 3 Get extra 10% on The Souled Store see details"}
              />
            </Carousel>
            <div className="flex px-6 lg:px-16">
              <div onClick={clickPrevious}>
                <MdOutlineKeyboardArrowLeft className="w-6 lg:w-8 h-6 lg:h-8 cursor-pointer" />
              </div>
              <div onClick={clickNext}>
                <MdOutlineKeyboardArrowRight className="w-6 lg:w-8 h-6 lg:h-8 cursor-pointer" />
              </div>
            </div>
            <div>
              <div className="w-11/12 lg:w-[40%] relative flex mt-8 px-6">
                <div
                  className="relative h-1 lg:h-1 w-full bg-[#D1D1D1] rounded-[30px]"
                  style={{
                    borderRadius: "30px",
                  }}
                >
                  <div
                    className="absolute h-1 lg:h-1 bg-black rounded-[30px]"
                    style={{
                      width: `${
                        (selectIndex + 1) * (100 / offerArray.length)
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                toggleAccordion={() => toggleAccordion(index)}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-between lg:justify-end items-center bottom-0 lg:bottom-[12%] lg:left-0 gap-2 lg:gap-4 fixed z-20 px-2 lg:px-4">
        <button className="w-44 h-10 lg:w-64 lg:h-11 bg-black text-white text-base lg:text-xl mt-4 flex justify-center items-center gap-1 lg:gap-2">
          <AiOutlineShoppingCart />
          Add to Cart
        </button>
        <button className="w-44 h-10 lg:w-64 lg:h-11 bg-white text-black text-base lg:text-xl mt-4 border border-black flex justify-center items-center gap-1 lg:gap-2">
          <AiOutlineHeart />
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
