import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import aceStreet from "../assets/ace street.png";
import logoG from "../assets/Grand Stand.png";
import LDA from "../assets/LDA Logo.png";
import cermicaLogo from "../assets/cermica.png";
import aceSurfaceLogo from "../assets/surface.png";
import wallLogo from "../assets/wallLogo.png";
import aceET from "../assets/acetechET.png";
import "../App.css";
import { PrimaryButton, SecondaryButton } from "./CTAButtons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AceCeramica = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover h-auto lg:h-auto"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051214/AceTech%20Website/ACE_CERAMICA_jvzzt2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-70 py-6 lg:py-10">
        <div className="w-full h-full flex">
          <div className="text-center text-white w-full h-full gap-3 lg:gap-10 flex items-center flex-col">
            <h1 className="font-[400] text-[24px] lg:text-5xl leading-[51px] lg:leading-[62px] font-Playfair-Display">
              Ace Ceramica
            </h1>
            <div className="flex justify-center w-1/2 lg:w-auto">
              <img
                src={cermicaLogo}
                alt=""
                className="h-full w-full rounded-xl"
              />
            </div>

            <div className="flex gap-8 lg:gap-20 font-[400] text-[16px] lg:text-2xl leading-[18px] lg:leading-[31px] text-left font-Playfair-Display">
              <ul className="flex flex-col gap-2 lg:gap-2">
                <li>
                  <span className="list-bullet" />
                  Title Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Powered by Partner
                </li>
              </ul>
              <ul className="flex flex-col gap-2 lg:gap-2">
                <li>
                  <span className="list-bullet" />
                  Delegate Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Associate by Partner
                </li>
              </ul>
            </div>

            <div className="flex gap-8 lg:gap-8">
              <PrimaryButton
                className="text-sm"
                onClick={() => navigate("/contact")}
              >
                EXPLORE
              </PrimaryButton>
              <SecondaryButton className="text-sm">
                <Link to="https://online.fliphtml5.com/cyizs/yntm/#p=1">
                  VIEW BROCHURE
                </Link>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AceSurfaces = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover h-auto lg:h-auto"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051321/AceTech%20Website/ACE_SURFACES_fysgnw.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-70 py-6 lg:py-10">
        <div className="w-full h-full flex m-auto">
          <div className="text-center text-white w-full gap-3 lg:gap-10 flex items-center flex-col">
            <h1 className="font-[400] text-[24px] lg:text-5xl leading-[51px] lg:leading-[62px] font-Playfair-Display">
              Ace Surfaces
            </h1>
            <div className="flex justify-center w-1/2 lg:w-auto bg-white px-2 rounded-xl">
              <img src={aceSurfaceLogo} alt="" className="h-full w-full " />
            </div>
            <div className="flex gap-8 lg:gap-20 font-[400] text-[16px] mt-7 lg:mt-0 lg:text-2xl leading-[18px] lg:leading-[31px] text-left font-Playfair-Display">
              <ul className="flex flex-col gap-2 lg:gap-2">
                <li>
                  <span className="list-bullet" />
                  Title Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Powered by Partner
                </li>
              </ul>
              <ul className="flex flex-col gap-2 lg:gap-2">
                <li>
                  <span className="list-bullet" />
                  Delegate Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Associate by Partner
                </li>
              </ul>
            </div>

            <div className="flex gap-8 lg:gap-8">
              <PrimaryButton
                className="text-sm"
                onClick={() => navigate("/contact")}
              >
                EXPLORE
              </PrimaryButton>
              <SecondaryButton className="text-sm">
                <Link to="https://online.fliphtml5.com/cyizs/yntm/#p=1">
                  VIEW BROCHURE
                </Link>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LightDesignAutomation = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover h-full lg:h-auto"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051515/AceTech%20Website/LDA_kubesu.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-70 py-6 lg:py-10">
        <div className="w-full h-full flex m-auto">
          <div className="text-center text-white w-full gap-2 lg:gap-10 flex items-center flex-col">
            <h1 className="font-[400] text-[24px] lg:text-5xl leading-[52px] font-Playfair-Display">
              Light Design Automation
            </h1>
            <div className="flex justify-center w-1/2 lg:w-auto">
              <img src={LDA} alt="" className="h-full w-full" />
            </div>
            <div className="flex gap-8 lg:gap-20 font-[400] text-[16px] lg:text-2xl leading-[18px] lg:leading-[21px] text-left font-Playfair-Display">
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li>
                  <span className="list-bullet" />
                  Powered By Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Supporting Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Session Partner
                </li>
              </ul>
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li>
                  <span className="list-bullet" />
                  Associate Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Youth Award Partner
                </li>
              </ul>
            </div>

            <div className="flex gap-8 lg:gap-8">
              <PrimaryButton
                className="text-sm"
                onClick={() => navigate("/contact")}
              >
                EXPLORE
              </PrimaryButton>
              <SecondaryButton className="text-sm">
                <Link to="https://online.fliphtml5.com/cyizs/yntm/#p=1">
                  VIEW BROCHURE
                </Link>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AceStreet = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover h-full lg:h-auto"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051615/AceTech%20Website/ACE_STREET_k3avyw.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-70 py-6 lg:py-10">
        <div className="w-full h-full flex m-auto">
          <div className="text-center text-white w-full gap-2 lg:gap-10 flex items-center flex-col">
            <h1 className="font-[400] text-[24px] lg:text-5xl leading-[51px] lg:leading-[52px] font-Playfair-Display">
              Ace Street
            </h1>
            <div className="flex justify-center w-1/2 lg:w-auto">
              <img src={aceStreet} alt="" className="h-full w-full" />
            </div>
            <div className="flex gap-8 lg:gap-20 font-[400] text-[16px] lg:text-2xl leading-[18px] lg:leading-[21px] text-left font-Playfair-Display">
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li>
                  <span className="list-bullet" />
                  Water bottle Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Kitbag Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Registration Partner
                </li>
              </ul>
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li>
                  <span className="list-bullet" />
                  Lanyard Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  AceStreet Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  AceLounge Partner
                </li>
              </ul>
            </div>

            <div className="flex gap-8 lg:gap-8">
              <PrimaryButton
                className="text-sm"
                onClick={() => navigate("/contact")}
              >
                EXPLORE
              </PrimaryButton>
              <SecondaryButton className="text-sm">
                <Link to="https://online.fliphtml5.com/cyizs/yntm/#p=1">
                  VIEW BROCHURE
                </Link>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesignWall = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover h-auto lg:h-auto"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051410/AceTech%20Website/DESIGN_WALL_ddttsx.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-70 py-6 lg:py-10">
        <div className="w-full h-full flex m-auto">
          <div className="text-center text-white w-full gap-3 lg:gap-10 flex items-center flex-col">
            <h1 className="font-[400] text-[24px] lg:text-5xl leading-[51px] lg:leading-[62px] font-Playfair-Display">
              Design Wall 2023
            </h1>
            <div className="flex justify-center w-1/2 lg:w-auto bg-white py-2 rounded-xl">
              <img src={wallLogo} alt="" className="h-full w-full" />
            </div>
            <div className="flex gap-8 lg:gap-20 font-[400] text-[16px] mt-2 lg:mt-0 lg:text-2xl leading-[18px] lg:leading-[31px] text-left font-Playfair-Display">
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li>
                  <span className="list-bullet" />
                  Title Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Powered by Partner
                </li>
              </ul>
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li>
                  <span className="list-bullet" />
                  Delegate Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Associate by Partner
                </li>
              </ul>
            </div>

            <div className="flex gap-8 lg:gap-8">
              <PrimaryButton
                className="text-sm"
                onClick={() => navigate("/contact")}
              >
                EXPLORE
              </PrimaryButton>
              <SecondaryButton className="text-sm">
                <Link to="https://online.fliphtml5.com/cyizs/yntm/#p=1">
                  VIEW BROCHURE
                </Link>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GrandStand = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover h-auto lg:h-auto"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051091/AceTech%20Website/GSA_zo1oyi.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-70 py-6 lg:py-10">
        <div className="w-full h-full flex m-auto">
          <div className="text-center text-white w-full gap-3 lg:gap-10 flex items-center  flex-col">
            <h1 className="font-[400] text-[24px] lg:text-5xl leading-[51px] lg:leading-[62px] font-Playfair-Display">
              Grand Stand Awards 2023
            </h1>
            <div className="flex justify-center w-1/2 lg:w-auto">
              <img src={logoG} alt="" className="h-full w-full" />
            </div>
            <div className="flex gap-8 lg:gap-20 font-[400] text-[16px] lg:text-2xl leading-[18px] lg:leading-[31px] text-left font-Playfair-Display">
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li>
                  <span className="list-bullet" />
                  Title Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Digital Partner
                </li>
              </ul>
            </div>

            <div className="flex gap-8 lg:gap-8">
              <PrimaryButton
                className="text-sm"
                onClick={() => navigate("/contact")}
              >
                EXPLORE
              </PrimaryButton>
              <SecondaryButton className="text-sm">
                <Link to="https://online.fliphtml5.com/cyizs/yntm/#p=1">
                  VIEW BROCHURE
                </Link>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesignWallTwo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover h-auto lg:h-auto"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695049504/AceTech%20Website/ACETECH_DESIGN_DISTRICT_vqjwjv.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-70 py-6 lg:py-10">
        <div className="w-full h-full flex">
          <div className="text-center text-white w-full gap-3 lg:gap-10 flex items-center flex-col">
            <h1 className="font-[400] text-[24px] lg:text-5xl leading-[51px] lg:leading-[62px] font-Playfair-Display">
              Design Wall 2023
            </h1>
            <div className="flex justify-center w-1/2 lg:w-auto bg-white px-2 py-2 rounded-xl">
              <img src={aceET} alt="" className="h-full w-full" />
            </div>
            <div className="flex gap-8 lg:gap-20 font-[400] text-[16px] -mt-4 lg:mt-0 lg:text-2xl leading-[18px] lg:leading-[31px] text-left font-Playfair-Display">
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li>
                  <span className="list-bullet" />
                  Registration Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Kitbag Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Ace Street Partner
                </li>
              </ul>
              <ul className="flex flex-col gap-2 lg:gap-4">
                <li>
                  <span className="list-bullet" />
                  Water Bottle Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  Lanyard Partner
                </li>
                <li>
                  <span className="list-bullet" />
                  AceLounge Partner
                </li>
              </ul>
            </div>

            <div className="flex gap-8 lg:gap-8">
              <PrimaryButton
                className="text-sm"
                onClick={() => navigate("/contact")}
              >
                EXPLORE
              </PrimaryButton>
              <SecondaryButton className="text-sm">
                <Link to="https://online.fliphtml5.com/cyizs/yntm/#p=1">
                  VIEW BROCHURE
                </Link>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CarouselComponent = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col bg-black w-full items-center justify-center py-5">
          <h1 className="text-xl lg:text-4xl leading-[39px] lg:leading-[65px] font-Playfair-Display text-[#F9F9F9] text-center mx-5 lg:mx-0 mb-5 lg:mb-0">
            WANT TO SPONSOR THE EVENTS?
          </h1>
          <h2 className="w-11/12 lg:w-[80%] text-xs lg:text-xl font-[400] font-Montserrat text-[#F9F9F9] text-center mx-5 lg:mx-0">
            Join us in shaping the future of architecture, design, and building
            materials at ACETECH Exhibitions. Explore unique sponsorship
            opportunities that allow you to elevate your brand and connect with
            industry leaders and innovators.
          </h2>
        </div>
        <div className="z-10 h-auto">
          <Carousel
            showStatus={false}
            // centerMode={window.innerWidth >= 768 ? true : false}
            showArrows={true}
            infiniteLoop
            showIndicators={false}
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
            <AceCeramica />
            <AceSurfaces />
            <LightDesignAutomation />
            <AceStreet />
            <GrandStand />
            <DesignWall />
            <DesignWallTwo />
          </Carousel>
        </div>
      </div>
    </>
  );
};
