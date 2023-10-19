import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Bg from "../assets/Shuvam/Rectangle-404.png";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { RxCross1 } from "react-icons/rx";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";

const EventCard = ({ img, id, heading, desc, cardData, event, bgCover }) => {
  return (
    <div
      className="w-full h-auto"
      id={id}
      style={{
        backgroundImage: `url(${bgCover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-70 py-10">
        <div className="text-white w-full h-full flex items-center justify-center">
          <div className="w-[90%] h-auto z-10 rounded-none lg:rounded-[50px] border-none lg:border-[1px] border-[#7E7E7E] bg-transparent lg:bg-[#FFFFFF] bg-opacity-0 lg:bg-opacity-10 flex flex-col gap-10 lg:gap-20  text-white p-[0.2%] lg:p-[5%] ">
            <h1 className="font-[400] font-Playfair-Display text-[2rem] lg:text-[3em] leading-none lg:leading-[1.5em] text-center mt-20 lg:mt-0">
              {heading}
            </h1>

            <div className="flex gap-4 lg:gap-36 items-center justify-center w-full h-full">
              <div className="w-1/2 lg:w-[20%] h-auto border-[1px] border-[#797979] bg-[#FFFFFF] bg-opacity-10 flex flex-col justify-center items-center">
                <img
                  src={img}
                  alt=""
                  className="w-full lg:w-[90%] h-full lg:h-[90%] m-2 lg:m-auto rounded-xl object-cover lg:object-contain"
                />
                <h1 className="text-xs lg:text-xl font-Montserrat font-[400]">
                  {event}
                </h1>
              </div>

              <p className="text-[0.7rem] lg:text-[1.25em] leading-[0.9rem] lg:leading-[1.5em] font-[400] w-[80%] h-auto font-Montserrat">
                {desc}
              </p>
            </div>

            {/* <div
              // className="w-[400px] h-full flex gap-8 ite justify-center mx-auto"
              className={`${
                cardData.length <= 3 ? "w-full lg:w-[45rem]" : "w-full"
              } h-full grid grid-cols-3 grid-rows-2 lg:flex gap-4 lg:gap-8 mx-auto`}
            >
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="h-auto w-full lg:w-1/3 flex flex-col gap-1 lg:gap-3 mx-auto"
                >
                  <div
                    className={
                      "w-[7rem] lg:w-full h-full border-[1px] border-[#797979] bg-[#FFFFFF] bg-opacity-10 flex py-1 px-1 lg:px-0 lg:py-0"
                    }
                  >
                    {img && (
                      <img
                        src={card.img}
                        alt=""
                        className="w-full lg:w-[90%] h-full lg:h-[90%] object-cover m-auto rounded-xl"
                      />
                    )}
                  </div>
                  <h1 className="text-center font-[400] font-Montserrat text-[0.5rem] lg:text-[1em] leading-none lg:leading-[1em]">
                    {card.desc}
                  </h1>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Sponsors = () => {
  const [wantToSponsorUs, setWantToSponsorUs] = useState(true);

  const handleWantToSponsorUs = () => {
    setWantToSponsorUs(false);
  };

  const [scrollToId, setScrollToId] = useState("");

  const handleScrollToEvent = (id) => {
    setScrollToId(id);
  };

  useEffect(() => {
    if (scrollToId) {
      const eventCard = document.getElementById(scrollToId);
      if (eventCard) {
        eventCard.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollToId]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <>
      <div
        className="w-full"
        style={{
          backgroundImage: `url('${Bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="w-full h-full flex flex-col bg-opacity-50 backdrop-blur-sm">
          <div className="flex-1 mt-20 mb-20 lg:mt-32 lg:mb-24 text-white">
            <div className="w-[95%] h-full mx-auto rounded-none lg:rounded-[50px] border-none lg:border-[1px] border-[#7E7E7E] bg-transparent lg:bg-[#FFFFFF] bg-opacity-0 lg:bg-opacity-10 flex flex-col gap-5 px-4 lg:px-20 py-10">
              <h1 className="w-full  h-auto font-[400] text-[2rem] leading-none lg:text-[3em] lg:leading-[1.5em] text-center font-Playfair-Display text-white">
                EVENTS
              </h1>

              <p className="font-[400] text-[0.75rem] lg:text-xl leading-none lg:leading-[1.5em] text-left lg:text-center font-Montserrat text-white mx-[0] lg:mx-[5%]">
                ACETECH hosts diverse events and conferences for architecture,
                construction, and design professionals, including Grand Stand
                Awards, Ace Connect, Design Wall, Design Conclave, Ace Alpha
                Awards, LDA, Stop & Shop, Design District, and Hosted Buyer
                Program, fostering engagement and knowledge-sharing in the
                industry
              </p>

              <div className="flex flex-col items-center justify-center gap-12 lg:gap-8 w-full h-full mt-5 lg:mt-0">
                <div className="flex gap-5 lg:gap-40 w-full h-full">
                  <button
                    className="w-1/3 h-1/3 lg:w-[20%] lg:h-[20%] border-[1px] border-[#797979] bg-[#FFFFFF] bg-opacity-10 flex flex-col justify-center items-center mx-auto rounded-xl"
                    onClick={() => handleScrollToEvent("ACETECH")}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694681496/ALL_LOGO-01_cgxewe.jpg"
                      }
                      alt=""
                      className="w-[80%] h-[90%] m-auto my-3"
                    />
                    <h1 className="text-xs lg:text-xl font-Montserrat font-[400]">
                      ACETECH
                    </h1>
                  </button>

                  <button
                    className="w-1/3 h-1/3 lg:w-[20%] lg:h-[20%] border-[1px] border-[#797979] bg-[#FFFFFF] bg-opacity-10 flex flex-col justify-center items-center mx-auto rounded-xl"
                    onClick={() => handleScrollToEvent("DESIGN-WALL")}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694682647/ALL_LOGO-08_odwmen.jpg"
                      }
                      alt=""
                      className="w-[90%] h-[90%] m-auto my-3"
                    />
                    <h1 className="text-xs lg:text-xl font-Montserrat font-[400]">
                      DESIGN WALL
                    </h1>
                  </button>

                  <button
                    className="w-1/3 h-1/3 lg:w-[20%] lg:h-[20%] border-[1px] border-[#797979] bg-[#FFFFFF] bg-opacity-10 flex flex-col justify-center items-center mx-auto rounded-xl"
                    onClick={() => handleScrollToEvent("ACE-CERMICA")}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536980/AceTech%20Website/Sponsors/Events/cermica_nkq3je.png"
                      }
                      alt=""
                      className="w-[90%] h-[90%] m-auto my-3"
                    />
                    <h1 className="text-xs lg:text-xl font-Montserrat font-[400]">
                      ACE CERMICA
                    </h1>
                  </button>
                </div>

                <div className="flex gap-5 lg:gap-40 w-full h-full">
                  <button
                    className="w-1/3 h-1/3 lg:w-[20%] lg:h-[20%] border-[1px] border-[#797979] bg-[#FFFFFF] bg-opacity-10 flex flex-col justify-center items-center mx-auto rounded-xl"
                    onClick={() => handleScrollToEvent("ACE-SURFACES")}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694689903/ALL_LOGO-06_1_ooaqzl.jpg"
                      }
                      alt=""
                      className="w-[90%] h-[100%] m-auto my-3"
                    />
                    <h1 className="text-xs lg:text-xl font-Montserrat font-[400]">
                      ACE SURFACES
                    </h1>
                  </button>

                  <button
                    className="w-1/3 h-1/3 lg:w-[20%] lg:h-[20%] border-[1px] border-[#797979] bg-[#FFFFFF] bg-opacity-10 flex flex-col justify-center items-center mx-auto rounded-xl"
                    onClick={() => handleScrollToEvent("LDA")}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694682845/ALL_LOGO-10_dg7ojl.jpg"
                      }
                      alt=""
                      className="w-[90%] h-[70%] m-auto my-3"
                    />
                    <h1 className="text-xs lg:text-xl font-Montserrat font-[400]">
                      LDA 2023
                    </h1>
                  </button>

                  <button
                    className="w-1/3 h-1/3 lg:w-[20%] lg:h-[20%] border-[1px] border-[#797979] bg-[#FFFFFF] bg-opacity-10 flex flex-col justify-center items-center mx-auto rounded-xl"
                    onClick={() => handleScrollToEvent("GRAND-STAND")}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694681880/ALL_LOGO-02_x2kasc.jpg"
                      }
                      alt=""
                      className="w-[90%] h-[90%] m-auto my-3"
                    />
                    <h1 className="text-xs lg:text-xl font-Montserrat font-[400]">
                      GRAND STAND
                    </h1>
                  </button>
                </div>

                <div className="flex w-full h-full">
                  <button
                    className="w-1/3 h-1/3 lg:w-[20%] lg:h-[20%] border-[1px] border-[#797979] bg-[#FFFFFF] bg-opacity-10 flex flex-col justify-center items-center mx-auto rounded-xl"
                    onClick={() => handleScrollToEvent("ACE-STREET")}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694683066/ALL_LOGO-15_sjhsft.jpg"
                      }
                      alt=""
                      className="w-[90%] h-[90%] m-auto my-3"
                    />
                    <h1 className="text-xs lg:text-xl font-Montserrat font-[400]">
                      ACE STREET
                    </h1>
                  </button>

                  <button
                    className="w-1/3 h-1/3 lg:w-[20%] lg:h-[20%] border-[1px] border-[#797979] bg-[#FFFFFF] bg-opacity-10 flex flex-col justify-center items-center mx-auto rounded-xl"
                    onClick={() => handleScrollToEvent("ACE-LOUNGE")}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694681496/ALL_LOGO-01_cgxewe.jpg"
                      }
                      alt=""
                      className="w-[90%] h-[90%] m-auto my-3"
                    />
                    <h1 className="text-xs lg:text-xl font-Montserrat font-[400]">
                      ACE LOUNGE
                    </h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EventCard
        id={"ACETECH"}
        bgCover={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695049504/AceTech%20Website/ACETECH_DESIGN_DISTRICT_vqjwjv.jpg"
        }
        img={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694681496/ALL_LOGO-01_cgxewe.jpg" //logo
        }
        heading={"ACETECH"}
        desc={
          "Each year, ACETECH brings a brand new proposition to the table, a beneficial initiative, an unforeseen opportunity, or a sub-platform to enhance productivity to its maximum. This year, we introduced Ace Surfaces in Mumbai – A platform conceptualized with an undivided focus on the ever-evolving segment of Surfaces."
        }
        cardData={[
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/adidas_vt6ll5.png",
            desc: "Registration Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/nikon_ewerfl.png",
            desc: "Water Bottle Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/bisleri_vtfu5s.png",
            desc: "Kitbag Partners",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/rustomjee_zfk7co.png",
            desc: "Landyard Partners",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/urbanic_bbd4oy.png",
            desc: "AceStreet Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/canon_dc7lwl.png",
            desc: "AceLounge Partner",
          },
        ]}
        event={"ACETECH"}
      />
      <EventCard
        id={"GRAND-STAND"}
        bgCover={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051091/AceTech%20Website/GSA_zo1oyi.jpg"
        }
        img={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694681880/ALL_LOGO-02_x2kasc.jpg"
        }
        heading={"GRAND STAND AWARDS"}
        desc={
          "The Grand Stand Awards honor exhibitors for outstanding booth designs, considering factors like creativity, innovation, visual impact, material use, and lighting. A panel of 500 industry experts, including architects and designers, serves as judges, acknowledging exceptional booth efforts at ACETECH events."
        }
        cardData={[
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/bisleri_vtfu5s.png",
            desc: "Title Partners",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/rustomjee_zfk7co.png",
            desc: "Digital Partners",
          },
        ]}
        event={"GRAND STAND"}
      />
      <EventCard
        id={"ACE-CERMICA"}
        bgCover={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051214/AceTech%20Website/ACE_CERAMICA_jvzzt2.jpg"
        }
        img={
          "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536980/AceTech%20Website/Sponsors/Events/cermica_nkq3je.png"
        }
        heading={"ACE CERAMICA"}
        desc={
          "ACETECH, Asia's largest Architecture, Building Material, and Design Exhibition, introduces Ace Ceramica, an exclusive trade show for the Ceramics & Sanitary industry. It features a diverse range of products, promoting the convergence of design and functionality, and offers industry professionals a one-stop solution to access top national and international brands."
        }
        cardData={[
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/adidas_vt6ll5.png",
            desc: "Title Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/nikon_ewerfl.png",
            desc: "Powered by Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/bisleri_vtfu5s.png",
            desc: "Delegate Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/rustomjee_zfk7co.png",
            desc: "Delegate Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/urbanic_bbd4oy.png",
            desc: "Water Bottle Partner",
          },
        ]}
        event={"ACE CERAMICA"}
      />
      <EventCard
        id={"ACE-SURFACES"}
        bgCover={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051321/AceTech%20Website/ACE_SURFACES_fysgnw.jpg"
        }
        img={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694689903/ALL_LOGO-06_1_ooaqzl.jpg"
        }
        heading={"ACE SURFACES"}
        desc={
          "ACETECH annually introduces innovative initiatives, and this year, Ace Surfaces emerged in Mumbai, targeting the evolving Surfaces sector. It served as a dedicated pavilion for architectural surface sourcing, enhancing networking and featuring a range of international and national products like wood, veneers, laminates, and more for industry professionals and visitors."
        }
        cardData={[
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/adidas_vt6ll5.png",
            desc: "Powered by Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/nikon_ewerfl.png",
            desc: "Supporting Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/bisleri_vtfu5s.png",
            desc: "Session Partners",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/rustomjee_zfk7co.png",
            desc: "Associate Partners",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/urbanic_bbd4oy.png",
            desc: "Youth Award Partner",
          },
        ]}
        event={"ACE SURFACES"}
      />
      <EventCard
        id={"DESIGN-WALL"}
        bgCover={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051410/AceTech%20Website/DESIGN_WALL_ddttsx.jpg"
        }
        img={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694682647/ALL_LOGO-08_odwmen.jpg"
        }
        heading={"DESIGN WALL"}
        desc={
          "Design Wall, a vital platform for emerging brands, has garnered industry recognition with support from figures like Niranjan Hiranandani, Ar. Hafeez Contractor, Boman Irani, and many more. This initiative has gained prominence in recent years, providing a platform for design enthusiasts and benefiting from the backing of influential personalities in the field."
        }
        cardData={[
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/adidas_vt6ll5.png",
            desc: "Powered by Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/nikon_ewerfl.png",
            desc: "Supporting Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/bisleri_vtfu5s.png",
            desc: "Session Partners",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/rustomjee_zfk7co.png",
            desc: "Associate Partners",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/urbanic_bbd4oy.png",
            desc: "Youth Award Partner",
          },
        ]}
        event={"DESIGN WALL"}
      />
      <EventCard
        id={"LDA"}
        bgCover={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051515/AceTech%20Website/LDA_kubesu.jpg"
        }
        img={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694682845/ALL_LOGO-10_dg7ojl.jpg"
        }
        heading={"LIGHT DESIGN AUTOMATION"}
        desc={
          "The Light Design & Automation Summit 2022 is an ACETECH initiative and serves as a platform to honor the Lighting, Interior, Architecture, and Automation Industry, which has proven to be a highly supportive and promising segment within the industry."
        }
        cardData={[
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/adidas_vt6ll5.png",
            desc: "Powered by Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/nikon_ewerfl.png",
            desc: "Supporting Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/bisleri_vtfu5s.png",
            desc: "Session Partners",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/rustomjee_zfk7co.png",
            desc: "Associate Partners",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/urbanic_bbd4oy.png",
            desc: "Youth Award Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/canon_dc7lwl.png",
            desc: "Kitbag Partner",
          },
        ]}
        event={"LDA 2023"}
      />

      <EventCard
        id={"ACE-STREET"}
        bgCover={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051615/AceTech%20Website/ACE_STREET_k3avyw.jpg"
        }
        img={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694683066/ALL_LOGO-15_sjhsft.jpg"
        }
        heading={"ACESTREET"}
        desc={
          "ACETECH goes beyond visual displays, fostering brand-creative partnerships. Installations tell meaningful stories, amplifying the exhibition's significance. They showcase the power of creativity and collaboration, urging us to appreciate the beauty in life's minutiae."
        }
        cardData={[
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/adidas_vt6ll5.png",
            desc: "Registration Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/nikon_ewerfl.png",
            desc: "Water Bottle Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/bisleri_vtfu5s.png",
            desc: "Kitbag Partners",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/rustomjee_zfk7co.png",
            desc: "Landyard Partners",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536982/AceTech%20Website/Sponsors/Events/urbanic_bbd4oy.png",
            desc: "AceStreet Partner",
          },
          {
            img: "https://res.cloudinary.com/dfxwoaico/image/upload/v1694536981/AceTech%20Website/Sponsors/Events/canon_dc7lwl.png",
            desc: "AceLounge Partner",
          },
        ]}
        event={"ACESTREET"}
      />
      <EventCard
        id={"ACE-LOUNGE"}
        bgCover={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1695051696/AceTech%20Website/ACE_LOUNGE_njqgjz.jpg"
        }
        img={
          "https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694681496/ALL_LOGO-01_cgxewe.jpg"
        }
        heading={"ACE LOUNGE"}
        desc={
          "Each year, ACETECH brings a brand new proposition to the table, a beneficial initiative, an unforeseen opportunity, or a sub-platform to enhance productivity to its maximum. This year, we introduced Ace Surfaces in Mumbai – A platform conceptualized with an undivided focus on the ever-evolving segment of Surfaces."
        }
        cardData={[]}
        event={"ACE LOUNGE"}
      />

      <div className="fixed right-6 bottom-5 px-4 py-4 lg:w-[20rem] lg:h-[10rem] bg-[#FFFFFF] bg-opacity-100 border-2 border-[#EC008C] drop-shadow-2xl  rounded-[16px] lg:flex flex-col justify-center items-center gap-8 z-20">
        <div className="relative">
          <h1 className="text-xs text-center lg:text-2xl font-[400] font-Playfair-Display">
            Let's talk sponsorship.
          </h1>
          <div className="absolute -top-3 -right-1 lg:-right-9 lg:-top-3 rounded-full bg-[#EC008C] bg-opacity-30 p-1">
            <RxCross1
              className="w-2 h-2 lg:w-3 lg:h-3 cursor-pointer"
              color="white"
              onClick={handleWantToSponsorUs}
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4 lg:mt-0 lg:gap-10">
          <button className="rounded-full bg-[#EC008C] w-8 h-8 lg:w-12 lg:h-12">
            {/* <button className="rounded-full bg-[#EC008C] p-3 lg:p-3"> */}
            <Link to={"mailto:miraz.q@abec.asia,Ali.s@abec.asia"}>
              <SiGmail
                className="w-3 h-3 lg:w-6 lg:h-6 cursor-pointer m-auto"
                color="white"
              />
            </Link>
          </button>
          <button className="rounded-3xl bg-[#EC008C] w-8 h-8 lg:w-12 lg:h-12">
            <Link to={"tel:9833237174,9324553996"}>
              <IoMdCall
                className="w-3 h-3 lg:w-6 lg:h-6 cursor-pointer m-auto"
                color="white"
              />
            </Link>
          </button>
          <button className="rounded-3xl bg-[#EC008C] w-8 h-8 lg:w-12 lg:h-12">
            <Link to={"https://wa.me/+919833237174"}>
              <BsWhatsapp
                className="w-3 h-3 lg:w-6 lg:h-6 cursor-pointer m-auto"
                color="white"
              />
            </Link>
          </button>
        </div>
      </div>

      <Footer />

    </>
  );
};

export default Sponsors;