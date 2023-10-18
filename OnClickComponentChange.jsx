import React, { useEffect, useState } from "react";
import sofaIcon from "../assets/sofa icon.png";
import bathroomIcon from "../assets/bathroom icon.png";
import homeIcon from "../assets/home icon.png";
import wireIcon from "../assets/electric icon.png";
import tileIcom from "../assets/tile icon.png";
import doorIcom from "../assets/door icon.png";
import acIcon from "../assets/ac icon.png";
import kitchenIcon from "../assets/kitchen icon.png";
import paintIcon from "../assets/paint icon.png";
import fireIcon from "../assets/fire icon.png";
import decoIcon from "../assets/decorative icon.png";
import escaIcon from "../assets/escator icon.png";
import glassIcon from "../assets/glass icon.png";
import harwareIcon from "../assets/hardware icon.png";
import landIcon from "../assets/landscap icon.png";
import pipesIcon from "../assets/pipes icon.png";
import roofIcon from "../assets/roofing icon.png";
import steelIcon from "../assets/steel icon.png";
import stonesIcon from "../assets/stones icon.png";
import switchICon from "../assets/switch icon.png";
import waterIcon from "../assets/water icon.png";
import woodIcon from "../assets/wood icon.png";
import "../Styles/Segment.css";
import { useMediaQuery } from "react-responsive";
import { SegmentMobileScreen } from "./SegmentMobileScreen";
import "../App.css";

const CoverComponent = ({ bgCover, num, name, title, fadeIn }) => {
  return (
    <div
      className={`bg-cover h-screen transition-opacity duration-500 ease-in-out ${
        fadeIn && "animate-fade-up"
      }`}
      style={{
        backgroundImage: `url(${bgCover})`,
      }}
    >
      <div className="flex justify-center items-center">
        <div className="text-7xl font-normal text-white text-center mt-10 font-Playfair-Display">
          {num}
        </div>
        <div className="text-6xl font-normal text-white text-center ml-2 mt-10 font-Playfair-Display">
          {name}
        </div>
      </div>
      <div className="w-full leading-relaxed text-4xl text-white text-center py-8 font-Playfair-Display">
        {title}
      </div>
    </div>
  );
};

const IconComponent = ({ img, title, alt }) => {
  return (
    <div>
      <div className="w-[5rem] h-[5rem] m-auto rounded-full flex justify-center items-center bg-[#BDBDBD]">
        <img src={img} alt={alt} className="w-[3rem] h-[3rem]" />
      </div>
      <div className="text-white text-center text-xs mt-2 font-medium font-Montserrat">
        {title}
      </div>
    </div>
  );
};

export const Segment = () => {
  const isLaptopScreen = useMediaQuery({ minWidth: 770 });
  const [selectedIcon, setSelectedIcon] = useState(7);
  const [fadeIn, setFadeIn] = useState(false);

  const handleIconClick = (index) => {
    setSelectedIcon(index);
    setFadeIn(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [selectedIcon]);

  const images = [
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694521475/AceTech%20Website/Bath_xp7gcz.jpg"
      }
      num={22}
      name={"Segment"}
      title={"BATH & SANITATION"}
      fadeIn={selectedIcon === 0 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525299/AceTech%20Website/Furniture_jwxq6w.jpg"
      }
      num={22}
      name={"Segment"}
      title={"INTERNATIONAL FURNITURE"}
      fadeIn={selectedIcon === 1 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525436/AceTech%20Website/homeBG_anmcvc.jpg"
      }
      num={22}
      name={"Segment"}
      title={"HOME & OFFICE AUTOMATION"}
      fadeIn={selectedIcon === 2 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525907/AceTech%20Website/wires_dqsbt3.jpg"
      }
      num={22}
      name={"Segment"}
      title={"ELECTRICALS, WIRE & CABLES"}
      fadeIn={selectedIcon === 3 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525757/AceTech%20Website/tiles_odaewu.jpg"
      }
      num={22}
      name={"Segment"}
      title={"TILES & CERAMICS"}
      fadeIn={selectedIcon === 4 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525174/AceTech%20Website/Doors_tr9vsh.jpg"
      }
      num={22}
      name={"Segment"}
      title={" DOORS & WINDOWS"}
      fadeIn={selectedIcon === 5 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694521403/AceTech%20Website/AC_czvi3t.jpg"
      }
      num={22}
      name={"Segment"}
      title={"AIR CONDITIONING & REFRIGERATION"}
      fadeIn={selectedIcon === 6 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525473/AceTech%20Website/kitchen_ty0l8g.jpg"
      }
      num={22}
      name={"Segment"}
      title={"INTERNATIONAL CUCINE & KITCHEN TECHNOLOGIES"}
      fadeIn={selectedIcon === 7 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694526218/AceTech%20Website/paint_photo_fqpcup.jpg"
      }
      num={22}
      name={"Segment"}
      title={"PAINTS, COATS & WALL COVERINGS"}
      fadeIn={selectedIcon === 8 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525644/AceTech%20Website/saftey_ynfhsa.jpg"
      }
      num={22}
      name={"Segment"}
      title={"SAFTEY, SECURITY & FIRE PROTECTION"}
      fadeIn={selectedIcon === 9 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525095/AceTech%20Website/decorative_jhtvxe.jpg"
      }
      num={22}
      name={"Segment"}
      title={"DECORATIVE & ARCHITECTURAL LIGHTING"}
      fadeIn={selectedIcon === 10 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525347/AceTech%20Website/glass_ryxdcs.jpg"
      }
      num={22}
      name={"Segment"}
      title={"GLASS GLAZING & FACADES"}
      fadeIn={selectedIcon === 11 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525717/AceTech%20Website/stones_ei9sp5.jpg"
      }
      num={22}
      name={"Segment"}
      title={"NATURAL ENGINEERED MARBEL & STONES"}
      fadeIn={selectedIcon === 12 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525678/AceTech%20Website/steel_t5nn97.jpg"
      }
      num={22}
      name={"Segment"}
      title={"STEEL & CONCRETE"}
      fadeIn={selectedIcon === 13 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525516/AceTech%20Website/pipes_higq91.jpg"
      }
      num={22}
      name={"Segment"}
      title={"PLUMBING PIPES & FITINGS"}
      fadeIn={selectedIcon === 14 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525613/AceTech%20Website/landscapes_byjuk7.jpg"
      }
      num={22}
      name={"Segment"}
      title={"LANDSCAPES"}
      fadeIn={selectedIcon === 15 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525872/AceTech%20Website/water_v5ro6h.jpg"
      }
      num={22}
      name={"Segment"}
      title={"WATER TECHNOLOGIES"}
      fadeIn={selectedIcon === 16 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525251/AceTech%20Website/elevators_c7t5cg.jpg"
      }
      num={22}
      name={"Segment"}
      title={"ELEVATORS & ESCALATORS"}
      fadeIn={selectedIcon === 17 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525941/AceTech%20Website/wood_q8osdt.jpg"
      }
      num={22}
      name={"Segment"}
      title={"WOOD, VENEER & FLOORINGS"}
      fadeIn={selectedIcon === 18 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525550/AceTech%20Website/roofing_vptfih.jpg"
      }
      num={22}
      name={"Segment"}
      title={"ROOFING & CLADDING"}
      fadeIn={selectedIcon === 19 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525802/AceTech%20Website/switch_blfkxf.jpg"
      }
      num={22}
      name={"Segment"}
      title={"SWITCHES & SWITCHGEAR"}
      fadeIn={selectedIcon === 20 ? fadeIn : false}
    />,
    <CoverComponent
      bgCover={
        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694525391/AceTech%20Website/hardware_hxfu9z.jpg"
      }
      num={22}
      name={"Segment"}
      title={"HARDWARE & FITTINGS"}
      fadeIn={selectedIcon === 21 ? fadeIn : false}
    />,
  ];

  const icons = [
    <IconComponent
      img={bathroomIcon}
      title={"BATH & SANITATION"}
      alt={"BATH"}
    />,
    <IconComponent
      img={sofaIcon}
      title={"International Funriture"}
      alt={"Funriture"}
    />,
    <IconComponent
      img={homeIcon}
      title={"HOME & OFFICE AUTOMATION"}
      alt={"HOME"}
    />,
    <IconComponent
      img={wireIcon}
      title={"ELECTRICALS, WIRE & CABLES"}
      alt={"ELECTRICALS"}
    />,
    <IconComponent img={tileIcom} title={"TILES & CERAMICS"} alt={"TILES"} />,
    <IconComponent img={doorIcom} title={"DOORS & WINDOWS"} alt={"DOORS"} />,
    <IconComponent
      img={acIcon}
      title={"AIR CONDITIONING & REFRIGERATION"}
      alt={"REFRIGERATION"}
    />,
    <IconComponent
      img={kitchenIcon}
      title={"INTERNATIONAL CUCINE & KITCHEN TECHNOLOGIES"}
      alt={"KITCHEN"}
    />,
    <IconComponent
      img={paintIcon}
      title={"PAINTS, COATS & WALL COVERINGS"}
      alt={"PAINTS"}
    />,
    <IconComponent
      img={fireIcon}
      title={"Safety, Security & fire Protection"}
      alt={"Safety"}
    />,
    <IconComponent
      img={decoIcon}
      title={"Decorative & Architectural Lighting"}
      alt={"Decorative"}
    />,
    <IconComponent
      img={glassIcon}
      title={"Glass Glazing & Facades"}
      alt={"Glass"}
    />,
    <IconComponent
      img={stonesIcon}
      title={"Natural Engineered Marble Stones"}
      alt={"Stones"}
    />,
    <IconComponent img={steelIcon} title={"Steel & Concrete"} alt={"Steel"} />,
    <IconComponent
      img={pipesIcon}
      title={"Plumbing Pipes & Fittings"}
      alt={"Pipes"}
    />,
    <IconComponent img={landIcon} title={"Landscapes"} alt={"Landscapes"} />,
    <IconComponent
      img={waterIcon}
      title={"Water Technologies"}
      alt={"Water"}
    />,
    <IconComponent
      img={escaIcon}
      title={"Elevators & Escalators"}
      alt={"Elevators"}
    />,
    <IconComponent
      img={woodIcon}
      title={"Wood, Veneer & Floorings"}
      alt={"Wood"}
    />,
    <IconComponent
      img={roofIcon}
      title={"Roofing & Cladding"}
      alt={"Roofing"}
    />,
    <IconComponent
      img={switchICon}
      title={"Switches & Switchgear"}
      alt={"Switches"}
    />,
    <IconComponent
      img={harwareIcon}
      title={"Harware & Fittings"}
      alt={"Harware"}
    />,
  ];

  return (
    <>
      {isLaptopScreen ? (
        <div className="flex flex-col items-center">
          <div className="w-full relative">
            <div className="w-full h-screen">{images[selectedIcon]}</div>
            <div className="w-full h-auto grid grid-cols-3 md:grid-cols-7 lg:grid-cols-11 justify-center items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 backdrop-blur-lg">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  onClick={() => handleIconClick(index)}
                  className={`p-2 flex justify-center items-center cursor-pointer transition-transform transform${
                    selectedIcon === index
                      ? "border-4 border-white rounded-full"
                      : ""
                  }`}
                >
                  <div className="flex justify-center items-center">{icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <SegmentMobileScreen />
      )}
    </>
  );
};
