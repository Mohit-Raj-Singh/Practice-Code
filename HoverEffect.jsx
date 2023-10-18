/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import grandstars from "../assets/grand2.png";
import aceconnect from "../assets/aceConnect2.png";
import { PiArrowFatLinesUpDuotone } from "react-icons/pi";
import connectBG from "../assets/connectBG.png";
import streetBG from "../assets/AceStreetBG.png";
import LDABG from "../assets/LDA BG.png";
import standBG from "../assets/GrandStandBG.png";
import hostedBG from "../assets/HostedBuyerBG.png";
import wallBG from "../assets/designwallBG.png";
import designLogo from "../assets/designLogo.png";
import alphaBG from "../assets/alphaBG.png";
import wallLogo from "../assets/wallLogo.png";
import LDALogo from "../assets/LDA Logo.png";
import stopLogo from "../assets/stop shop.png";
import hosted from "../assets/Hosted Buyers.png";
import aceAlpha from "../assets/Ace Alpha.png";
import "../Styles/Event.css";
import cermica from "../assets/cermica.png";
import surface from "../assets/surface.png";
import streetLogo from "../assets/street.png";
import "../App.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import { PrimaryButton } from "./CTAButtons";
import { useNavigate } from "react-router";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 top-1/2 mt-8 transform -translate-y-1/2 w-9 h-9 text-white p-2 rounded-full cursor-pointer flex justify-center items-center ml-2 lg:w-16 lg:h-16"
      style={{ backgroundColor: "rgba(236, 0, 140, 1)" }}
    >
      <AiOutlineArrowLeft className="text-xl lg:text-3xl" />
    </button>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 top-1/2 mt-8 transform -translate-y-1/2 w-9 h-9 text-white p-2 rounded-full cursor-pointer flex justify-center items-center mr-2 lg:w-16 lg:h-16"
      style={{ backgroundColor: "rgba(236, 0, 140, 1)" }}
    >
      <AiOutlineArrowRight className="text-xl lg:text-3xl" />
    </button>
  );
};

export const Event = () => {
  const navigate = useNavigate();

  const [alliedEvents, setAlliedEvents] = useState(true);
  const [pavillions, setPavillions] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showContentTwo, setShowContentTwo] = useState(false);
  const [showContentThree, setShowContentThree] = useState(false);
  const [showContentFour, setShowContentFour] = useState(false);
  const [showContentFive, setShowContentFive] = useState(false);
  const [showContentSix, setShowContentSix] = useState(false);
  const [showContentSeven, setShowContentSeven] = useState(false);
  const [showContentEight, setShowContentEight] = useState(false);
  const [showContentNine, setShowContentNine] = useState(false);
  const [showContentTen, setShowContentTen] = useState(false);
  const [showContentEle, setShowContentEle] = useState(false);
  const isLaptopScreen = useMediaQuery({ minWidth: 768 });

  const toggleContent = () => {
    setShowContent(true);
    setShowContentTwo(false);
    setShowContentThree(false);
    setShowContentFour(false);
    setShowContentFive(false);
    setShowContentSix(false);
    setShowContentSeven(false);
    setShowContentEight(false);
    setShowContentNine(false);
    setShowContentTen(false);
    setShowContentEle(false);
  };
  const toggleLeave = () => {
    setShowContent(false);
  };

  const toggleContentTwo = () => {
    setShowContent(false);
    setShowContentTwo(true);
    setShowContentThree(false);
    setShowContentFour(false);
    setShowContentFive(false);
    setShowContentSix(false);
    setShowContentSeven(false);
    setShowContentEight(false);
    setShowContentNine(false);
    setShowContentTen(false);
    setShowContentEle(false);
  };
  const toggleLeaveTwo = () => {
    setShowContentTwo(false);
  };

  const toggleContentThree = () => {
    setShowContentThree(true);
    setShowContent(false);
    setShowContentTwo(false);
    setShowContentFour(false);
    setShowContentFive(false);
    setShowContentSix(false);
    setShowContentSeven(false);
    setShowContentEight(false);
    setShowContentNine(false);
    setShowContentTen(false);
    setShowContentEle(false);
  };
  const toggleLeaveThree = () => {
    setShowContentThree(false);
  };

  const toggleContentFour = () => {
    setShowContentFour(true);
    setShowContent(false);
    setShowContentTwo(false);
    setShowContentThree(false);
    setShowContentFive(false);
    setShowContentSix(false);
    setShowContentSeven(false);
    setShowContentEight(false);
    setShowContentNine(false);
    setShowContentTen(false);
    setShowContentEle(false);
  };
  const toggleLeaveFour = () => {
    setShowContentFour(false);
  };

  const toggleContentFive = () => {
    setShowContentFive(true);
    setShowContent(false);
    setShowContentTwo(false);
    setShowContentThree(false);
    setShowContentFour(false);
    setShowContentSix(false);
    setShowContentSeven(false);
    setShowContentEight(false);
    setShowContentNine(false);
    setShowContentTen(false);
    setShowContentEle(false);
  };
  const toggleLeaveFive = () => {
    setShowContentFive(false);
  };

  const toggleContentSix = () => {
    setShowContentSix(true);
    setShowContent(false);
    setShowContentTwo(false);
    setShowContentThree(false);
    setShowContentFour(false);
    setShowContentFive(false);
    setShowContentSeven(false);
    setShowContentEight(false);
    setShowContentNine(false);
    setShowContentTen(false);
    setShowContentEle(false);
  };
  const toggleLeaveSix = () => {
    setShowContentSix(false);
  };

  const toggleContentSeven = () => {
    setShowContentSeven(true);
    setShowContent(false);
    setShowContentTwo(false);
    setShowContentThree(false);
    setShowContentFour(false);
    setShowContentFive(false);
    setShowContentSix(false);
    setShowContentEight(false);
    setShowContentNine(false);
    setShowContentTen(false);
    setShowContentEle(false);
  };
  const toggleLeaveSeven = () => {
    setShowContentSeven(false);
  };

  const toggleContentEight = () => {
    setShowContentEight(true);
    setShowContent(false);
    setShowContentTwo(false);
    setShowContentThree(false);
    setShowContentFour(false);
    setShowContentFive(false);
    setShowContentSix(false);
    setShowContentSeven(false);
    setShowContentNine(false);
    setShowContentTen(false);
    setShowContentEle(false);
  };
  const toggleLeaveEight = () => {
    setShowContentEight(false);
  };

  const toggleContentNine = () => {
    setShowContentNine(true);
    setShowContent(false);
    setShowContentTwo(false);
    setShowContentThree(false);
    setShowContentFour(false);
    setShowContentFive(false);
    setShowContentSix(false);
    setShowContentSeven(false);
    setShowContentEight(false);
    setShowContentTen(false);
    setShowContentEle(false);
  };
  const toggleLeaveNine = () => {
    setShowContentNine(false);
  };

  const toggleContentTen = () => {
    setShowContentTen(true);
    setShowContent(false);
    setShowContentTwo(false);
    setShowContentThree(false);
    setShowContentFour(false);
    setShowContentFive(false);
    setShowContentSix(false);
    setShowContentSeven(false);
    setShowContentEight(false);
    setShowContentNine(false);
    setShowContentEle(false);
  };
  const toggleLeaveTen = () => {
    setShowContentTen(false);
  };

  const toggleContentEle = () => {
    setShowContentEle(true);
    setShowContent(false);
    setShowContentTwo(false);
    setShowContentThree(false);
    setShowContentFour(false);
    setShowContentFive(false);
    setShowContentSix(false);
    setShowContentSeven(false);
    setShowContentEight(false);
    setShowContentNine(false);
    setShowContentTen(false);
  };
  const toggleLeaveEle = () => {
    setShowContentEle(false);
  };

  const handleAlliedEvents = () => {
    setAlliedEvents(true);
    setPavillions(false);
  };
  const handlePavillions = () => {
    setAlliedEvents(false);
    setPavillions(true);
  };

  const MobileEvent = () => {
    const DesignConclave = () => {
      return (
        <div
          className="relative h-[189px] bg-cover bg-center cursor-pointer rounded-xl"
          style={{
            backgroundImage: `url('${hostedBG}')`,
          }}
          onMouseEnter={toggleContent}
          onMouseLeave={toggleLeave}
        >
          <div
            className="absolute inset-0 rounded-xl"
            style={{ backdropFilter: "blur(5px)" }}
          ></div>
          <div
            className={`relative grid justify-center items-center z-10 px-2 py-2 rounded-xl ${
              showContent ? "invisible" : "visible"
            }`}
          >
            <img src={designLogo} alt="" className="m-auto pt-2 mt-2" />
            <div className="w-full text-xs text-white font-medium text-center mt-6">
              Design Conclave 2023
            </div>
            <PiArrowFatLinesUpDuotone className="text-2xl text-white m-auto mt-2" />
          </div>
          <div
            className={`absolute w-full h-[189px] p-3 bg-white rounded-xl ${
              showContent ? "top-0 opacity-100" : "top-full opacity-0"
            } transition-all duration-500 overflow-y-scroll`}
            style={{
              backdropFilter: "blur(3px)",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="text-center text-xs font-semibold font-Montserrat">
              ABOUT DESIGN CONCLAVE 2023
            </div>
            <p className="font-normal text-xs text-black text-center mt-2">
              “Design Conclave” aims at highlighting innovative products &
              technologies that are changing the world of Architecture, Design &
              application practices. It involves a stringent process of vetting
              the nominations by an eminent jury of leading Architects and
              Designers.The final scores penned by the eminent jury elect the
              winners who would ultimately be displayed on the splendid digital
              wall created at the venue during the days of the event.
              Strategizing on the previous editions, Design Conclave includes
              much-needed “One-on-One” business interactive meetings.
            </p>
          </div>
        </div>
      );
    };
    const DesignWall = () => {
      return (
        <div
          className="relative h-[189px] bg-cover bg-center cursor-pointer rounded-xl"
          style={{
            backgroundImage: `url('${wallBG}')`,
          }}
          onMouseEnter={toggleContentTwo}
          onMouseLeave={toggleLeaveTwo}
        >
          <div
            className="absolute inset-0 bg-cover border rounded-xl"
            style={{ backdropFilter: "blur(5px)" }}
          ></div>
          <div
            className={`relative grid justify-center items-center z-10 px-3 py-5 rounded-xl ${
              showContentTwo ? "invisible" : "visible"
            }`}
          >
            <img src={wallLogo} alt="" className="pt-5 mt-4" />
            <div className="w-full text-xs text-white font-medium text-center mt-4">
              Design Wall 2023
            </div>
            <PiArrowFatLinesUpDuotone className="text-2xl text-white m-auto mt-2" />
          </div>
          <div
            className={`absolute w-full h-[189px] p-3 bg-white rounded-xl ${
              showContentTwo ? "top-0 opacity-100" : "top-full opacity-0"
            } transition-all duration-500 overflow-y-scroll`}
            style={{
              backdropFilter: "blur(3px)",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="text-center text-xs font-semibold font-Montserrat">
              Design Wall 2023
            </div>
            <p className="font-normal text-xs text-black text-center mt-2">
              Design Wall is an initiative undertaken by ACETECH to promote and
              foster the latest technologies in the architecture, building
              materials, and design industry. It provides an unrivaled and
              unequaled platform for product manufacturers and technology
              developers to unveil and showcase their products, services, and
              technologies before a jury panel that features the leading names
              from the construction, architecture, and design fraternity. 
            </p>
          </div>
        </div>
      );
    };
    const AceConnectComp = () => {
      return (
        <div
          className="relative h-[185px] bg-cover bg-center cursor-pointer rounded-xl"
          style={{
            backgroundImage: `url('${connectBG}')`,
          }}
          onMouseEnter={toggleContentThree}
          onMouseLeave={toggleLeaveThree}
        >
          <div
            className="absolute inset-0 bg-cover border rounded-xl"
            style={{ backdropFilter: "blur(5px)" }}
          ></div>
          <div
            className={`relative z-10 grid justify-center items-center px-3 py-5 rounded-xl ${
              showContentThree ? "invisible" : "visible"
            }`}
          >
            <img src={aceconnect} alt="" className="pt-3 mt-4" />
            <div className="w-full text-xs text-white font-medium text-center mt-3">
              ACE CONNECT 2023
            </div>
            <PiArrowFatLinesUpDuotone className="text-2xl text-white m-auto mt-2" />
          </div>
          <div
            className={`absolute w-full h-[185px] p-3 bg-white rounded-xl ${
              showContentThree ? "top-0 opacity-100" : "top-full opacity-0"
            } transition-all duration-500 overflow-y-scroll`}
            style={{
              backdropFilter: "blur(3px)",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="text-center text-xs font-semibold font-Montserrat">
              ABOUT ACE CONNECT 2023
            </div>
            <p className="font-normal text-xs text-black text-center mt-2">
              Connect is an incubator of business partnerships. The unique
              platform is a buyers and vendors meeting point and organizes
              direct meetings between purchase managers/senior personnel of
              leading Architects, Design Firms, and Realtors with the brands
              exhibiting at ACETECH. Express meetings between service providers
              and top decision-makers from procurement companies are set up,
              with the aim to generate business leads and inquiries. The
              procurement teams and senior personnel of leading real estate and
              contracting companies, architects, and consultants are assigned
              stalls.
            </p>
          </div>
        </div>
      );
    };
    const GrandStandAward = () => {
      return (
        <div
          className="relative h-[185px] bg-cover bg-center cursor-pointer rounded-xl"
          style={{
            backgroundImage: `url('${standBG}')`,
          }}
          onMouseEnter={toggleContentFour}
          onMouseLeave={toggleLeaveFour}
        >
          <div
            className="absolute inset-0 bg-cover border rounded-xl"
            style={{ backdropFilter: "blur(5px)" }}
          ></div>
          <div
            className={`relative z-10 grid justify-center items-center px-1 py-6 rounded-xl ${
              showContentFour ? "invisible" : "visible"
            }`}
          >
            <img src={grandstars} alt="" className="" />
            <div className="w-full text-xs text-white font-medium text-center mt-3">
              Grand Stand Awards
            </div>
            <PiArrowFatLinesUpDuotone className="text-2xl text-white m-auto mt-2" />
          </div>
          <div
            className={`absolute w-full h-[185px] p-3 bg-white rounded-xl ${
              showContentFour ? "top-0 opacity-100" : "top-full opacity-0"
            } transition-all duration-500 overflow-y-scroll`}
            style={{
              backdropFilter: "blur(3px)",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="text-center text-xs font-semibold font-Montserrat">
              ABOUT GRAND STAND AWARDS
            </div>
            <p className="font-normal text-xs text-black text-center mt-2">
              Grand Stand Awards was specially created to appreciate and honor
              the efforts of exhibitors and participants who do their best to
              make their stand spaces spectacular. The stands are judged on the
              parameters of originality of design, innovation, visual impact,
              effective use of materials, space, color, texture, lighting, and
              graphics in booths. Acknowledging the efforts invested into
              building stellar booths, the Grand Stand Awards puts together a
              panel of over 500 renowned industry stalwarts. 
            </p>
          </div>
        </div>
      );
    };
    const LDA = () => {
      return (
        <div
          className="relative h-[185px] bg-cover bg-center cursor-pointer rounded-xl"
          style={{
            backgroundImage: `url('${LDABG}')`,
          }}
          onMouseEnter={toggleContentFive}
          onMouseLeave={toggleLeaveFive}
        >
          <div
            className="absolute inset-0 bg-cover border rounded-xl"
            style={{ backdropFilter: "blur(5px)" }}
          ></div>
          <div
            className={`relative z-10 grid justify-center items-center px-3 py-6 rounded-xl ${
              showContentFive ? "invisible" : "visible"
            }`}
          >
            <img src={LDALogo} alt="" />
            <div className="w-full text-xs text-white font-medium text-center mt-6">
              Light Design Automation
            </div>
            <PiArrowFatLinesUpDuotone className="text-2xl text-white m-auto mt-2" />
          </div>
          <div
            className={`absolute w-full h-[185px] p-3 bg-white rounded-xl ${
              showContentFive ? "top-0 opacity-100" : "top-full opacity-0"
            } transition-all duration-500 overflow-y-scroll`}
            style={{
              backdropFilter: "blur(3px)",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="text-center text-xs font-semibold font-Montserrat">
              ABOUT LIGHT DESIGN AUTOMATION
            </div>
            <p className="font-normal text-xs text-black text-center mt-2">
              Light, Design & Automation Summit 2023, a new initiative of
              ACETECH, is a platform to pay tribute to the entire Lighting &
              Automation industry which has been one of the most supporting and
              promising segments for the platform. We take great pride and
              pleasure in inviting you to the premium show: L.D.A at ACETECH
              Mumbai which includes two days of Conferences & Workshops. We
              promise you an evening full of sound & lights to remember. Witness
              the legacy of the Light, Design, and Automation Industry. 
            </p>
          </div>
        </div>
      );
    };
    const StopShop = () => {
      return (
        <div
          className="relative h-[185px] bg-cover bg-center cursor-pointer rounded-xl"
          style={{
            backgroundImage: `url('${standBG}')`,
          }}
          onMouseEnter={toggleContentSix}
          onMouseLeave={toggleLeaveSix}
        >
          <div
            className="absolute inset-0 bg-cover border rounded-xl"
            style={{ backdropFilter: "blur(5px)" }}
          ></div>
          <div
            className={`relative z-10 grid justify-center items-center px-3 py-8 rounded-xl ${
              showContentSix ? "invisible" : "visible"
            }`}
          >
            <img src={stopLogo} alt="" />
            <div className="w-full text-xs text-white font-medium text-center mt-6">
              Stop & Shop
            </div>
            <PiArrowFatLinesUpDuotone className="text-2xl text-white m-auto mt-2" />
          </div>
          <div
            className={`absolute w-full h-[185px] p-3 bg-white rounded-xl ${
              showContentSix ? "top-0 opacity-100" : "top-full opacity-0"
            } transition-all duration-500 overflow-y-scroll`}
            style={{
              backdropFilter: "blur(3px)",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="text-center text-xs font-semibold font-Montserrat">
              ABOUT STOP & SHOP
            </div>
            <p className="font-normal text-xs text-black text-center mt-2">
              Stop & Shop is an informative and educational activity that serves
              as a platform that allows industry influencers to seamlessly
              procure for their projects. The activity generates curiosity
              within the industry, procurement openings, and exposure to the
              newest innovations in the Luxury realm
            </p>
          </div>
        </div>
      );
    };
    const HostedBuyer = () => {
      return (
        <div
          className="relative h-[185px] bg-cover bg-center cursor-pointer rounded-xl"
          style={{
            backgroundImage: `url('${hostedBG}')`,
          }}
          onMouseEnter={toggleContentSeven}
          onMouseLeave={toggleLeaveSeven}
        >
          <div
            className="absolute inset-0 bg-cover border rounded-xl"
            style={{ backdropFilter: "blur(5px)" }}
          ></div>
          <div
            className={`relative z-10 grid justify-center items-center px-3 py-6 rounded-xl ${
              showContentSeven ? "invisible" : "visible"
            }`}
          >
            <img src={hosted} alt="" />
            <div className="w-full text-xs text-white font-medium text-center mt-6">
              Hosted Buyer Program
            </div>
            <PiArrowFatLinesUpDuotone className="text-2xl text-white m-auto mt-2" />
          </div>
          <div
            className={`absolute w-full h-[185px] p-3 bg-white rounded-xl ${
              showContentSeven ? "top-0 opacity-100" : "top-full opacity-0"
            } transition-all duration-500 overflow-y-scroll`}
            style={{
              backdropFilter: "blur(3px)",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="text-center text-xs font-semibold font-Montserrat">
              ABOUT ACETECH HOSTED BUYER
            </div>
            <p className="font-normal text-xs text-black text-center mt-2">
              Hosted Buyer Program is a unique program crafted with the aim to
              foster quality networking and generate profitable leads for the
              brands showcasing with ACETECH. Participating brands are asked to
              nominate prime decision makers that they would like to meet at the
              show, who are then flown down, covering travel, stay, and
              everything in between. 2019’s edition witnessed over 4000 hosted
              buyers comprising key decision makers, architects, developers, and
              procurement teams, resulting in successful and productive
              networking.
            </p>
          </div>
        </div>
      );
    };
    const AceAlpha = () => {
      return (
        <div
          className="relative h-[185px] bg-cover bg-center cursor-pointer rounded-xl"
          style={{
            backgroundImage: `url('${alphaBG}')`,
          }}
          onMouseEnter={toggleContentEight}
          onMouseLeave={toggleLeaveEight}
        >
          <div
            className="absolute inset-0 bg-cover border rounded-xl"
            style={{ backdropFilter: "blur(5px)" }}
          ></div>
          <div
            className={`relative z-10 grid justify-center items-center px-3 py-8 rounded-xl ${
              showContentEight ? "invisible" : "visible"
            }`}
          >
            <img src={aceAlpha} alt="" />
            <div className="w-full text-xs text-white font-medium text-center mt-6">
              Ace Alpha Awards
            </div>
            <PiArrowFatLinesUpDuotone className="text-2xl text-white m-auto mt-2" />
          </div>
          <div
            className={`absolute w-full h-[185px] p-3 bg-white rounded-xl ${
              showContentEight ? "top-0 opacity-100" : "top-full opacity-0"
            } transition-all duration-500 overflow-y-scroll`}
            style={{
              backdropFilter: "blur(3px)",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="text-center text-xs font-semibold font-Montserrat">
              ABOUT ACE ALPHA AWARDS
            </div>
            <p className="font-normal text-xs text-black text-center mt-2">
              ACE ALPHA AWARDS identifies and recognizes commendable
              achievements and remarkable accomplishments in the field of
              Architecture, Design, Interior & Building Materials.
              Conceptualized in 2008, the objective of this initiative is to
              felicitate the pioneers and veterans and create an astounding
              networking opportunity for young innovators and entrepreneurs.
              ANAROCK, a leading real estate services company in India, will
              serve as the Knowledge Partner for this occasion.
            </p>
          </div>
        </div>
      );
    };

    const allComponents = [
      <DesignConclave />,
      <DesignWall />,
      <AceConnectComp />,
      <GrandStandAward />,
      <LDA />,
      <StopShop />,
      <HostedBuyer />,
      <AceAlpha />,
    ];

    return (
      <div>
        <Carousel
          responsive={responsive}
          swipeable
          arrows={false}
          // showDots
          // centerMode
          infinite
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          className="overflow-x-scroll"
        >
          {allComponents.map((el, index) => (
            <div
              key={index}
              className="mt-4 px-4 w-full h-auto lg:h-[550px] lg:pt-20 lg:px-4"
            >
              {el}
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

  const MobilePavillons = () => {
    const AceSurfacesM = () => {
      return (
        <div
          className="relative h-[197px] lg:h-[380px] bg-cover bg-center cursor-pointer rounded-xl lg:rounded-3xl"
          style={{
            backgroundImage: `url('${alphaBG}')`,
          }}
          onClick={toggleContentNine}
          // onMouseLeave={toggleLeaveNine}
        >
          <div
            className="absolute inset-0 bg-cover border rounded-xl lg:rounded-3xl"
            style={{ backdropFilter: "blur(5px)" }}
          ></div>
          <div
            className={`relative z-10 grid justify-center items-center px-3 py-8 lg:px-8 lg:py-16 rounded-xl lg:rounded-3xl lg:mt-4 ${
              showContentNine ? "invisible" : "visible"
            }`}
          >
            <img src={surface} alt="" className="py-2" />
            <div className="w-full text-xs lg:text-2xl text-white font-medium text-center mt-5 lg:mt-10">
              Ace Surface
            </div>
            <PiArrowFatLinesUpDuotone className="text-2xl lg:text-5xl text-white m-auto mt-2 lg:mt-8" />
          </div>
          <div
            className={`absolute w-full h-[197px] lg:h-[380px] p-3 bg-white rounded-xl lg:rounded-3xl ${
              showContentNine ? "top-0 opacity-100" : "top-full opacity-0"
            } transition-all duration-500 overflow-y-scroll lg:overflow-auto`}
            style={{
              backdropFilter: "blur(3px)",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div
              className="text-center text-xs lg:text-sm font-semibold mt-2"
              style={{ fontFamily: "montserrat" }}
            >
              ABOUT ACE SURFACE
            </div>
            <p className="font-normal text-xs lg:text-sm text-black text-center mt-2">
              Design Wall is an initiative undertaken by ACETECH to promote and
              foster the latest technologies in the architecture, building
              materials, and design industry. It provides an unrivaled and
              unequaled platform for product manufacturers and technology
              developers to unveil and showcase their products, services, and
              technologies before a jury panel that features the leading names
              from the construction, architecture, and design fraternity. 
            </p>
          </div>
        </div>
      );
    };

    const AceConnectM = () => {
      return (
        <div
          className="relative h-auto h-[185px] lg:h-[380px] bg-cover bg-center cursor-pointer rounded-xl lg:rounded-3xl"
          style={{
            backgroundImage: `url('${streetBG}')`,
          }}
          onClick={toggleContentTen}
          // onMouseLeave={toggleLeaveTen}
        >
          <div
            className="absolute inset-0 bg-cover border rounded-xl lg:rounded-3xl"
            style={{ backdropFilter: "blur(5px)" }}
          ></div>
          <div
            className={`relative z-10 grid justify-center items-center px-3 py-8 lg:px-8 lg:py-16 rounded-xl lg:rounded-3xl ${
              showContentTen ? "invisible" : "visible"
            }`}
          >
            <img src={streetLogo} alt="" />
            <div className="w-full text-xs lg:text-2xl text-white font-medium text-center mt-4 lg:mt-12">
              Ace Street
            </div>
            <PiArrowFatLinesUpDuotone className="text-2xl lg:text-5xl text-white m-auto mt-2 lg:mt-8" />
          </div>
          <div
            className={`absolute w-full h-[197px] lg:h-[380px] p-3 bg-white rounded-xl lg:rounded-3xl ${
              showContentTen ? "top-0 opacity-100" : "top-full opacity-0"
            } transition-all duration-500 overflow-y-scroll lg:overflow-auto`}
            style={{
              backdropFilter: "blur(3px)",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div
              className="text-center text-xs lg:text-sm font-semibold mt-2"
              style={{ fontFamily: "montserrat" }}
            >
              ABOUT Ace Street
            </div>
            <p className="font-normal text-xs lg:text-sm text-black text-center mt-2">
              Design Wall is an initiative undertaken by ACETECH to promote and
              foster the latest technologies in the architecture, building
              materials, and design industry. It provides an unrivaled and
              unequaled platform for product manufacturers and technology
              developers to unveil and showcase their products, services, and
              technologies before a jury panel that features the leading names
              from the construction, architecture, and design fraternity. 
            </p>
          </div>
        </div>
      );
    };

    const AceStreetM = () => {
      return (
        <div>
          <div
            className="relative h-[197px] lg:h-[380px] bg-cover bg-center cursor-pointer rounded-xl lg:rounded-3xl"
            style={{
              backgroundImage: `url('${connectBG}')`,
            }}
            onClick={toggleContentEle}
          >
            <div
              className="absolute inset-0 bg-cover border rounded-xl lg:rounded-3xl"
              style={{ backdropFilter: "blur(5px)" }}
            ></div>
            <div
              className={`relative z-10 grid justify-center items-center lg:px-8 lg:py-16 px-3 py-8 rounded-xl lg:rounded-3xl ${
                showContentEle ? "invisible" : "visible"
              }`}
            >
              <img src={cermica} alt="" />
              <div className="w-full text-xs lg:text-2xl text-white font-medium text-center mt-4 lg:mt-12">
                Ace Cermica
              </div>
              <PiArrowFatLinesUpDuotone className="text-2xl lg:text-5xl text-white m-auto mt-2 lg:mt-8" />
            </div>
            <div
              className={`absolute w-full h-[197px] lg:h-[380px] p-3 bg-white rounded-xl lg:rounded-3xl ${
                showContentEle ? "top-0 opacity-100" : "top-full opacity-0"
              } transition-all duration-500 overflow-y-scroll lg:overflow-auto`}
              style={{
                backdropFilter: "blur(3px)",
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
            >
              <div
                className="text-center text-xs lg:text-sm font-semibold mt-4"
                style={{ fontFamily: "montserrat" }}
              >
                ABOUT Ace Cermica
              </div>
              <p className="font-normal text-xs lg:text-sm text-black text-center mt-2">
                Design Wall is an initiative undertaken by ACETECH to promote
                and foster the latest technologies in the architecture, building
                materials, and design industry. It provides an unrivaled and
                unequaled platform for product manufacturers and technology
                developers to unveil and showcase their products, services, and
                technologies before a jury panel that features the leading names
                from the construction, architecture, and design fraternity. 
              </p>
            </div>
          </div>
        </div>
      );
    };

    const allComponentsPa = [<AceSurfacesM />, <AceConnectM />, <AceStreetM />];

    return (
      <Carousel
        responsive={responsive}
        swipeable
        arrows={false}
        infinite
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        className="overflow-x-scroll"
      >
        {allComponentsPa.map((el, index) => (
          <div
            key={index}
            className="mt-4 px-0 w-full h-auto px-4 lg:h-[550px] lg:pt-20 lg:px-4"
          >
            {el}
          </div>
        ))}
      </Carousel>
    );
  };

  return (
    <div>
      <div className="text-2xl md:text-3xl lg:text-5xl font-normal text-center mt-10 grid justify-center items-center font-Playfair-Display">
        Allied Events & Pavilion
      </div>
      <div className="text-xs md:text-xl lg:text-xl flex justify-center item-center md:w-4/5 lg:w-9/12 m-auto font-normal text-center mt-8 md:mt-4 font-Montserrat">
        ACETECH Exhibitions offers more than just exhibits, with a diverse array
        of allied events such as seminars and workshops to encourage knowledge
        sharing and collaboration. Additionally, our specialized pavilions serve
        as focal points, highlighting the latest trends and innovations in
        architecture, interior design, and building materials for a targeted
        exploration of industry advancements.
      </div>

      <div className="my-5 w-[283px] lg:w-[595px] h-[50px] lg:h-[60px] grid grid-cols-2 items-center justify-center border-2 rounded-[72px] bg-[#A5A4A4] mx-auto gap-8">
        <button
          onClick={handleAlliedEvents}
          className={`w-[133px] h-[44px] lg:w-[275px] lg:h-[50px] ${
            alliedEvents && "bg-[#EC008C] rounded-[72px]"
          }  font-[400] font-Montserrat text-sm text-white lg:text-[29px] leading-[35px] text-center flex items-center justify-center`}
        >
          Alied Events
        </button>
        <button
          onClick={handlePavillions}
          className={`lg:w-[275px] h-[44px] lg:h-[50px] font-[400] font-Montserrat text-sm text-white lg:text-[29px] flex items-center justify-center leading-[35px] text-center 
        ${
          pavillions
            ? "bg-[#EC008C] rounded-[72px]"
            : "bg-[#A5A4A4] rounded-[72px]"
        }
        `}
        >
          Pavillions
        </button>
      </div>

      {alliedEvents && (
        <>
          {isLaptopScreen ? (
            <div
              className={`w-4/5 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-20 mt-40 md:mt-16 lg:mt-20 
                ${alliedEvents && "animate-fade-left"}
                `}
            >
              <div
                className="relative h-[380px] bg-cover bg-center cursor-pointer rounded-3xl"
                style={{
                  backgroundImage: `url('${hostedBG}')`,
                }}
                onClick={toggleContent}
              >
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{ backdropFilter: "blur(5px)" }}
                ></div>
                <div
                  className={`relative grid justify-center items-center z-10 px-8 py-16 rounded-3xl ${
                    showContent ? "invisible" : "visible"
                  }`}
                >
                  <img src={designLogo} alt="" className="m-auto" />
                  <div className="w-full text-2xl text-white font-medium text-center mt-8">
                    Design Conclave 2023
                  </div>
                  <PiArrowFatLinesUpDuotone className="text-5xl text-white m-auto mt-8" />
                </div>
                <div
                  className={`absolute w-full h-[380px] p-3 bg-white rounded-3xl ${
                    showContent ? "top-0 opacity-100" : "top-full opacity-0"
                  } transition-all duration-500 overflow-y-scroll`}
                  style={{
                    backdropFilter: "blur(3px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div className="text-center text-sm font-semibold font-Montserrat">
                    ABOUT DESIGN CONCLAVE 2023
                  </div>
                  <p className="font-normal text-sm text-black text-center mt-2">
                    “Design Conclave” aims at highlighting innovative products &
                    technologies that are changing the world of Architecture,
                    Design & application practices. It involves a stringent
                    process of vetting the nominations by an eminent jury of
                    leading Architects and Designers.The final scores penned by
                    the eminent jury elect the winners who would ultimately be
                    displayed on the splendid digital wall created at the venue
                    during the days of the event. Strategizing on the previous
                    editions, Design Conclave includes much-needed “One-on-One”
                    business interactive meetings.
                  </p>
                </div>
              </div>

              <div
                className="relative h-[380px] bg-cover bg-center cursor-pointer rounded-3xl"
                style={{
                  backgroundImage: `url('${wallBG}')`,
                }}
                onClick={toggleContentTwo}
              >
                <div
                  className="absolute inset-0 bg-cover border rounded-3xl"
                  style={{ backdropFilter: "blur(5px)" }}
                ></div>
                <div
                  className={`relative grid justify-center items-center z-10 px-8 py-16 rounded-3xl ${
                    showContentTwo ? "invisible" : "visible"
                  }`}
                >
                  <img src={wallLogo} alt="" className="pt-6" />
                  <div className="w-full text-2xl text-white font-medium text-center mt-8">
                    Design Wall 2023
                  </div>
                  <PiArrowFatLinesUpDuotone className="text-5xl text-white m-auto mt-16" />
                </div>
                <div
                  className={`absolute w-full h-[380px] p-3 bg-white rounded-3xl ${
                    showContentTwo ? "top-0 opacity-100" : "top-full opacity-0"
                  } transition-all duration-500 overflow-y-auto`}
                  style={{
                    backdropFilter: "blur(3px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div className="text-center text-sm font-semibold font-Montserrat">
                    ABOUT DESIGN WALL
                  </div>
                  <p className="font-normal text-sm text-black text-center mt-2">
                    Design Wall is an initiative undertaken by ACETECH to
                    promote and foster the latest technologies in the
                    architecture, building materials, and design industry. It
                    provides an unrivaled and unequaled platform for product
                    manufacturers and technology developers to unveil and
                    showcase their products, services, and technologies before a
                    jury panel that features the leading names from the
                    construction, architecture, and design fraternity. 
                  </p>
                </div>
              </div>

              <div
                className="relative h-[380px] bg-cover bg-center cursor-pointer rounded-3xl"
                style={{
                  backgroundImage: `url('${connectBG}')`,
                }}
                onClick={toggleContentThree}
              >
                <div
                  className="absolute inset-0 bg-cover border rounded-3xl"
                  style={{ backdropFilter: "blur(5px)" }}
                ></div>
                <div
                  className={`relative z-10 grid justify-center items-center px-8 py-16 rounded-3xl ${
                    showContentThree ? "invisible" : "visible"
                  }`}
                >
                  <img src={aceconnect} alt="" />
                  <div className="w-full text-2xl text-white font-medium text-center mt-12">
                    ACE CONNECT 2023
                  </div>
                  <PiArrowFatLinesUpDuotone className="text-5xl text-white m-auto mt-10" />
                </div>
                <div
                  className={`absolute w-full h-[380px] p-3 bg-white rounded-3xl ${
                    showContentThree
                      ? "top-0 opacity-100"
                      : "top-full opacity-0"
                  } transition-all duration-500 overflow-y-scroll`}
                  style={{
                    backdropFilter: "blur(3px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div className="text-center text-sm font-semibold font-Montserrat">
                    ABOUT ACE CONNECT 2023
                  </div>
                  <p className="font-normal text-sm text-black text-center mt-2">
                    Connect is an incubator of business partnerships. The unique
                    platform is a buyers and vendors meeting point and organizes
                    direct meetings between purchase managers/senior personnel
                    of leading Architects, Design Firms, and Realtors with the
                    brands exhibiting at ACETECH. Express meetings between
                    service providers and top decision-makers from procurement
                    companies are set up, with the aim to generate business
                    leads and inquiries. The procurement teams and senior
                    personnel of leading real estate and contracting companies,
                    architects, and consultants are assigned stalls.
                  </p>
                </div>
              </div>

              <div
                className="relative h-[380px] bg-cover bg-center cursor-pointer rounded-3xl"
                style={{
                  backgroundImage: `url('${standBG}')`,
                }}
                onClick={toggleContentFour}
              >
                <div
                  className="absolute inset-0 bg-cover border rounded-3xl"
                  style={{ backdropFilter: "blur(5px)" }}
                ></div>
                <div
                  className={`relative z-10 grid justify-center items-center px-8 py-16 rounded-3xl ${
                    showContentFour ? "invisible" : "visible"
                  }`}
                >
                  <img src={grandstars} alt="" />
                  <div className="w-full text-2xl text-white font-medium text-center mt-4">
                    Grand Stand Awards
                  </div>
                  <PiArrowFatLinesUpDuotone className="text-5xl text-white m-auto mt-10" />
                </div>
                <div
                  className={`absolute w-full h-[380px] p-3 bg-white rounded-3xl ${
                    showContentFour ? "top-0 opacity-100" : "top-full opacity-0"
                  } transition-all duration-500 overflow-y-auto`}
                  style={{
                    backdropFilter: "blur(3px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div className="text-center text-sm font-semibold font-Montserrat">
                    ABOUT GRAND STAND AWARDS
                  </div>
                  <p className="font-normal text-sm text-black text-center">
                    Grand Stand Awards was specially created to appreciate and
                    honor the efforts of exhibitors and participants who do
                    their best to make their stand spaces spectacular. The
                    stands are judged on the parameters of originality of
                    design, innovation, visual impact, effective use of
                    materials, space, color, texture, lighting, and graphics in
                    booths. Acknowledging the efforts invested into building
                    stellar booths, the Grand Stand Awards puts together a panel
                    of over 500 renowned industry stalwarts. 
                  </p>
                </div>
              </div>

              <div
                className="relative h-[380px] bg-cover bg-center cursor-pointer rounded-3xl"
                style={{
                  backgroundImage: `url('${LDABG}')`,
                }}
                onClick={toggleContentFive}
              >
                <div
                  className="absolute inset-0 bg-cover border rounded-3xl"
                  style={{ backdropFilter: "blur(5px)" }}
                ></div>
                <div
                  className={`relative z-10 grid justify-center items-center px-8 py-16 rounded-3xl ${
                    showContentFive ? "invisible" : "visible"
                  }`}
                >
                  <img src={LDALogo} alt="" />
                  <div className="w-full text-2xl text-white font-medium text-center mt-8">
                    Light Design Automation
                  </div>
                  <PiArrowFatLinesUpDuotone className="text-5xl text-white m-auto mt-8" />
                </div>
                <div
                  className={`absolute w-full h-[380px] p-3 bg-white rounded-3xl ${
                    showContentFive ? "top-0 opacity-100" : "top-full opacity-0"
                  } transition-all duration-500 overflow-y-auto`}
                  style={{
                    backdropFilter: "blur(3px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div className="text-center text-sm font-semibold font-Montserrat">
                    ABOUT LIGHT DESIGN AUTOMATION
                  </div>
                  <p className="font-normal text-sm text-black text-center mt-2">
                    Light, Design & Automation Summit 2023, a new initiative of
                    ACETECH, is a platform to pay tribute to the entire Lighting
                    & Automation industry which has been one of the most
                    supporting and promising segments for the platform. We take
                    great pride and pleasure in inviting you to the premium
                    show: L.D.A at ACETECH Mumbai which includes two days of
                    Conferences & Workshops. We promise you an evening full of
                    sound & lights to remember. Witness the legacy of the Light,
                    Design, and Automation Industry. 
                  </p>
                </div>
              </div>

              <div
                className="relative h-[380px] bg-cover bg-center cursor-pointer rounded-3xl"
                style={{
                  backgroundImage: `url('${standBG}')`,
                }}
                onClick={toggleContentSix}
              >
                <div
                  className="absolute inset-0 bg-cover border rounded-3xl"
                  style={{ backdropFilter: "blur(5px)" }}
                ></div>
                <div
                  className={`relative z-10 grid justify-center items-center px-8 py-16 rounded-3xl ${
                    showContentSix ? "invisible" : "visible"
                  }`}
                >
                  <img src={stopLogo} alt="" />
                  <div className="w-full text-2xl text-white font-medium text-center mt-11">
                    Stop & Shop
                  </div>
                  <PiArrowFatLinesUpDuotone className="text-5xl text-white m-auto mt-14" />
                </div>
                <div
                  className={`absolute w-full h-[380px] p-3 bg-white rounded-3xl ${
                    showContentSix ? "top-0 opacity-100" : "top-full opacity-0"
                  } transition-all duration-500 overflow-y-auto`}
                  style={{
                    backdropFilter: "blur(3px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div className="text-center text-sm font-semibold mt-4 font-Montserrat">
                    ABOUT STOP & SHOP
                  </div>
                  <p className="font-normal text-sm text-black text-center mt-2">
                    Stop & Shop is an informative and educational activity that
                    serves as a platform that allows industry influencers to
                    seamlessly procure for their projects. The activity
                    generates curiosity within the industry, procurement
                    openings, and exposure to the newest innovations in the
                    Luxury realm
                  </p>
                </div>
              </div>

              <div
                className="relative h-[380px] bg-cover bg-center cursor-pointer rounded-3xl"
                style={{
                  backgroundImage: `url('${hostedBG}')`,
                }}
                onClick={toggleContentSeven}
              >
                <div
                  className="absolute inset-0 bg-cover border rounded-3xl"
                  style={{ backdropFilter: "blur(5px)" }}
                ></div>
                <div
                  className={`relative z-10 grid justify-center items-center px-8 py-16 rounded-3xl ${
                    showContentSeven ? "invisible" : "visible"
                  }`}
                >
                  <img src={hosted} alt="" />
                  <div className="w-full text-2xl text-white font-medium text-center mt-10">
                    Hosted Buyer Program
                  </div>
                  <PiArrowFatLinesUpDuotone className="text-5xl text-white m-auto mt-8" />
                </div>
                <div
                  className={`absolute w-full h-[380px] p-3 bg-white rounded-3xl ${
                    showContentSeven
                      ? "top-0 opacity-100"
                      : "top-full opacity-0"
                  } transition-all duration-500 overflow-y-scroll`}
                  style={{
                    backdropFilter: "blur(3px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div className="text-center text-sm font-semibold font-Montserrat">
                    ABOUT ACETECH HOSTED BUYER
                  </div>
                  <p className="font-normal text-sm text-black text-center mt-2">
                    Hosted Buyer Program is a unique program crafted with the
                    aim to foster quality networking and generate profitable
                    leads for the brands showcasing with ACETECH. Participating
                    brands are asked to nominate prime decision makers that they
                    would like to meet at the show, who are then flown down,
                    covering travel, stay, and everything in between. 2019’s
                    edition witnessed over 4000 hosted buyers comprising key
                    decision makers, architects, developers, and procurement
                    teams, resulting in successful and productive networking.
                  </p>
                </div>
              </div>

              <div
                className="relative h-[380px] bg-cover bg-center cursor-pointer rounded-3xl"
                style={{
                  backgroundImage: `url('${alphaBG}')`,
                }}
                onClick={toggleContentEight}
              >
                <div
                  className="absolute inset-0 bg-cover border rounded-3xl"
                  style={{ backdropFilter: "blur(5px)" }}
                ></div>
                <div
                  className={`relative z-10 grid justify-center items-center px-8 py-16 rounded-3xl ${
                    showContentEight ? "invisible" : "visible"
                  }`}
                >
                  <img src={aceAlpha} alt="" />
                  <div className="w-full text-2xl text-white font-medium text-center mt-12">
                    Ace Alpha Awards
                  </div>
                  <PiArrowFatLinesUpDuotone className="text-5xl text-white m-auto mt-14" />
                </div>
                <div
                  className={`absolute w-full h-[380px] p-3 bg-white rounded-3xl ${
                    showContentEight
                      ? "top-0 opacity-100"
                      : "top-full opacity-0"
                  } transition-all duration-500 overflow-y-auto`}
                  style={{
                    backdropFilter: "blur(3px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div className="text-center text-sm font-semibold mt-4 font-Montserrat">
                    ABOUT ACE ALPHA AWARDS
                  </div>
                  <p className="font-normal text-sm text-black text-center mt-2">
                    ACE ALPHA AWARDS identifies and recognizes commendable
                    achievements and remarkable accomplishments in the field of
                    Architecture, Design, Interior & Building Materials.
                    Conceptualized in 2008, the objective of this initiative is
                    to felicitate the pioneers and veterans and create an
                    astounding networking opportunity for young innovators and
                    entrepreneurs. ANAROCK, a leading real estate services
                    company in India, will serve as the Knowledge Partner for
                    this occasion.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <MobileEvent />
            </>
          )}
        </>
      )}

      {pavillions && (
        <>
          {isLaptopScreen ? (
            <div
              className={`w-3/5 m-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 mt-40 lg:mt-20
                  ${pavillions && "animate-fade-left"}
                `}
            >
              <div
                className="relative h-[185px] lg:h-[380px] bg-cover bg-center cursor-pointer rounded-xl lg:rounded-3xl"
                style={{
                  backgroundImage: `url('${alphaBG}')`,
                }}
                onClick={toggleContentNine}
              >
                <div
                  className="absolute inset-0 bg-cover border rounded-xl lg:rounded-3xl"
                  style={{ backdropFilter: "blur(5px)" }}
                ></div>
                <div
                  className={`relative z-10 grid justify-center items-center px-3 py-8 lg:px-8 lg:py-16 rounded-xl lg:rounded-3xl lg:mt-4 ${
                    showContentNine ? "invisible" : "visible"
                  }`}
                >
                  <img src={surface} alt="" className="py-2" />
                  <div className="w-full text-xs lg:text-2xl text-white font-medium text-center mt-3 lg:mt-10">
                    Ace Surface
                  </div>
                  <PiArrowFatLinesUpDuotone className="text-2xl lg:text-5xl text-white m-auto mt-2 lg:mt-8" />
                </div>
                <div
                  className={`absolute w-full h-[185px] lg:h-[380px] p-3 bg-white rounded-xl lg:rounded-3xl ${
                    showContentNine ? "top-0 opacity-100" : "top-full opacity-0"
                  } transition-all duration-500 overflow-y-scroll lg:overflow-auto`}
                  style={{
                    backdropFilter: "blur(3px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div
                    className="text-center text-xs lg:text-sm font-semibold mt-2"
                    style={{ fontFamily: "montserrat" }}
                  >
                    ABOUT ACE SURFACE
                  </div>
                  <p className="font-normal text-xs lg:text-sm text-black text-center mt-2">
                    Design Wall is an initiative undertaken by ACETECH to
                    promote and foster the latest technologies in the
                    architecture, building materials, and design industry. It
                    provides an unrivaled and unequaled platform for product
                    manufacturers and technology developers to unveil and
                    showcase their products, services, and technologies before a
                    jury panel that features the leading names from the
                    construction, architecture, and design fraternity. 
                  </p>
                </div>
              </div>
              <div
                className="relative h-auto h-[185px] lg:h-[380px] bg-cover bg-center cursor-pointer rounded-xl lg:rounded-3xl"
                style={{
                  backgroundImage: `url('${streetBG}')`,
                }}
                onClick={toggleContentTen}
              >
                <div
                  className="absolute inset-0 bg-cover border rounded-xl lg:rounded-3xl"
                  style={{ backdropFilter: "blur(5px)" }}
                ></div>
                <div
                  className={`relative z-10 grid justify-center items-center px-3 py-8 lg:px-8 lg:py-16 rounded-xl lg:rounded-3xl ${
                    showContentTen ? "invisible" : "visible"
                  }`}
                >
                  <img src={streetLogo} alt="" />
                  <div className="w-full text-xs lg:text-2xl text-white font-medium text-center mt-4 lg:mt-12">
                    Ace Street
                  </div>
                  <PiArrowFatLinesUpDuotone className="text-2xl lg:text-5xl text-white m-auto mt-2 lg:mt-8" />
                </div>
                <div
                  className={`absolute w-full h-[185px] lg:h-[380px] p-3 bg-white rounded-xl lg:rounded-3xl ${
                    showContentTen ? "top-0 opacity-100" : "top-full opacity-0"
                  } transition-all duration-500 overflow-y-scroll lg:overflow-auto`}
                  style={{
                    backdropFilter: "blur(3px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div
                    className="text-center text-xs lg:text-sm font-semibold mt-2"
                    style={{ fontFamily: "montserrat" }}
                  >
                    ABOUT Ace Street
                  </div>
                  <p className="font-normal text-xs lg:text-sm text-black text-center mt-2">
                    Design Wall is an initiative undertaken by ACETECH to
                    promote and foster the latest technologies in the
                    architecture, building materials, and design industry. It
                    provides an unrivaled and unequaled platform for product
                    manufacturers and technology developers to unveil and
                    showcase their products, services, and technologies before a
                    jury panel that features the leading names from the
                    construction, architecture, and design fraternity. 
                  </p>
                </div>
              </div>
              <div
                className="relative h-[185px] lg:h-[380px] bg-cover bg-center cursor-pointer rounded-xl lg:rounded-3xl"
                style={{
                  backgroundImage: `url('${connectBG}')`,
                }}
                onClick={toggleContentEle}
              >
                <div
                  className="absolute inset-0 bg-cover border rounded-xl lg:rounded-3xl"
                  style={{ backdropFilter: "blur(5px)" }}
                ></div>
                <div
                  className={`relative z-10 grid justify-center items-center lg:px-8 lg:py-16 px-3 py-8 rounded-xl lg:rounded-3xl ${
                    showContentEle ? "invisible" : "visible"
                  }`}
                >
                  <img src={cermica} alt="" />
                  <div className="w-full text-xs lg:text-2xl text-white font-medium text-center mt-2 lg:mt-12">
                    Ace Cermica
                  </div>
                  <PiArrowFatLinesUpDuotone className="text-2xl lg:text-5xl text-white m-auto mt-2 lg:mt-8" />
                </div>
                <div
                  className={`absolute w-full h-[185px] lg:h-[380px] p-3 bg-white rounded-xl lg:rounded-3xl ${
                    showContentEle ? "top-0 opacity-100" : "top-full opacity-0"
                  } transition-all duration-500 overflow-y-scroll lg:overflow-auto`}
                  style={{
                    backdropFilter: "blur(3px)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div
                    className="text-center text-xs lg:text-sm font-semibold mt-4"
                    style={{ fontFamily: "montserrat" }}
                  >
                    ABOUT Ace Cermica
                  </div>
                  <p className="font-normal text-xs lg:text-sm text-black text-center mt-2">
                    Design Wall is an initiative undertaken by ACETECH to
                    promote and foster the latest technologies in the
                    architecture, building materials, and design industry. It
                    provides an unrivaled and unequaled platform for product
                    manufacturers and technology developers to unveil and
                    showcase their products, services, and technologies before a
                    jury panel that features the leading names from the
                    construction, architecture, and design fraternity. 
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <MobilePavillons />
          )}
        </>
      )}
      <div className="flex py-10 lg:py-0">
        <div className="mx-auto">
          <PrimaryButton onClick={() => navigate("/contact")}>
            Know More
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
