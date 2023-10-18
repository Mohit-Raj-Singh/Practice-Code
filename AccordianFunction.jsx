import React, { useEffect, useRef, useState } from "react";
import Accordion from "./Accordion";
import { IoMdPersonAdd, IoIosPeople } from "react-icons/io";
import { BiRecycle, BiSolidCalendar, BiSolidHourglass } from "react-icons/bi";
import { BsCreditCardFill } from "react-icons/bs";

const Faq = () => {
  const [countE, setCountE] = useState(0);
  const [countDisplay, setCountDisplay] = useState(0);
  const [countVisitors, setCountVisitors] = useState(0);
  const [countArea, setCountArea] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const targetCountE = 4095;
  const targetCountDisplay = 5500;
  const targetCountVisitors = 867194;
  const totalArea = 2500000;

  const countingRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start counting when the component is visible
          let currentCountE = 0;
          const interval = setInterval(() => {
            if (currentCountE <= 4095) {
              setCountE(currentCountE);
              currentCountE += 45;
            } else {
              clearInterval(interval);
            }
          }, 5);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (countingRef.current) {
      observer.observe(countingRef.current);
    }

    return () => {
      if (countingRef.current) {
        observer.unobserve(countingRef.current);
      }
    };
  }, []);

  //   exhibitors
  // useEffect(() => {
  //   const intervalE = setInterval(() => {
  //     if (countE < targetCountE) {
  //       setCountE(countE + 45);
  //     } else {
  //       clearInterval(intervalE);
  //     }
  //   }, 5);

  //   return () => clearInterval(intervalE);
  // }, [countE]);

  //   display
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start counting when the component is visible
          let currentCountD = 0;
          const interval = setInterval(() => {
            if (currentCountD <= 5500) {
              setCountDisplay(currentCountD);
              currentCountD += 50;
            } else {
              clearInterval(interval);
            }
          }, 5);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (countingRef.current) {
      observer.observe(countingRef.current);
    }

    return () => {
      if (countingRef.current) {
        observer.unobserve(countingRef.current);
      }
    };
  }, []);

  // useEffect(() => {
  //   const intervalD = setInterval(() => {
  //     if (countDisplay < targetCountDisplay) {
  //       setCountDisplay(countDisplay + 50);
  //     } else {
  //       clearInterval(intervalD);
  //     }
  //   }, 5);

  //   return () => clearInterval(intervalD);
  // }, [countDisplay]);

  //visitors

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start counting when the component is visible
          let currentCountV = 0;
          const interval = setInterval(() => {
            if (currentCountV <= 867194) {
              setCountVisitors(currentCountV);
              currentCountV += 4402;
            } else {
              clearInterval(interval);
            }
          }, 0.00001);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (countingRef.current) {
      observer.observe(countingRef.current);
    }

    return () => {
      if (countingRef.current) {
        observer.unobserve(countingRef.current);
      }
    };
  }, []);

  // useEffect(() => {
  //   const intervalV = setInterval(() => {
  //     if (countVisitors < targetCountVisitors) {
  //       setCountVisitors(countVisitors + 4402);
  //     } else {
  //       clearInterval(intervalV);
  //     }
  //   }, 0.00001);

  //   return () => clearInterval(intervalV);
  // }, [countVisitors]);

  //totalArea
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start counting when the component is visible
          let currentCountTA = 0;
          const interval = setInterval(() => {
            if (currentCountTA <= 2500000) {
              setCountArea(currentCountTA);
              currentCountTA += 10000;
            } else {
              clearInterval(interval);
            }
          }, 0.000000001);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (countingRef.current) {
      observer.observe(countingRef.current);
    }

    return () => {
      if (countingRef.current) {
        observer.unobserve(countingRef.current);
      }
    };
  }, []);

  // useEffect(() => {
  //   const intervalA = setInterval(() => {
  //     if (countArea < totalArea) {
  //       setCountArea(countArea + 10000);
  //     } else {
  //       clearInterval(intervalA);
  //     }
  //   }, 0.000000001);

  //   return () => clearInterval(intervalA);
  // }, [countArea]);

  const toggleAccordion = (index) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const accordionData = [
    {
      icon: (
        <IoMdPersonAdd className="w-8 h-8 p-1 bg-white rounded-full border lg:w-10 lg:h-10" />
      ),
      title: "I want to visit the exhibition. How can I register for it ?",
      content:
        "You can register for the expo through the link on our website or contact our registration team directly.",
    },
    {
      icon: (
        <BsCreditCardFill className="w-8 h-8 p-1 bg-white rounded-full border lg:w-10 lg:h-8" />
      ),
      title:
        "Is there an admission fee for the exhibition?",
      content:
        "This exhibition is open to trade visitors and there is a nominal fee applicable for visitors in all  four cities of ACETECH",
    },
    {
      icon: (
        <BiSolidCalendar className="w-8 h-8 p-1 bg-white rounded-full border lg:w-10 lg:h-10" />
      ),
      title: "What are the dates and location of the expo?",
      content:
        "The event dates and location are available on our website. Please check the schedule for specific details.",
    },
    {
      icon: (
        <IoIosPeople className="w-8 h-8 p-1 bg-white rounded-full border lg:w-10 lg:h-10" />
      ),
      title:
        "Is the exhibition open to both trade visitors and the general public?",
      content:
        "The exhibition is open for trade visitors as well as the general public who are interested in acquiring knowledge about latest product innovations and new launches in the market and purchasing from the suppliers in the building materials segment",
    },
    {
      icon: (
        <BiRecycle className="w-8 h-8 p-1 bg-white rounded-full border lg:w-10 lg:h-10" />
      ),
      title:
        "Can I enter and exit the exhibition more than once with my ticket?",
      content: "Yes, re-entries are allowed.",
    },
    {
      icon: (
        <BiSolidHourglass className="w-8 h-8 p-1 bg-white rounded-full border lg:w-10 lg:h-10" />
      ),
      title: "What are the hours of the exhibition? ",
      content:
        "The exhibition is open from 10 am – 7 pm on the scheduled exhibition dates and 10 am to 5.30 pm on the last day of the exhibition.",
    },
  ];

  return (
    <div className="">
      <div className="py-8 px-4 lg:py-10">
        <div className="w-full grid grid-cols-2 gap-6 lg:gap-10 lg:grid-cols-4">
          <div className="">
            <div
              ref={countingRef}
              className=" text-xl font-semibold text-center lg:text-4xl"
              style={{ fontFamily: "montserrat", color: "#2E2E2E9E" }}
            >
              {countE}+{/* {formatAmount(countE)}+ */}
            </div>
            <div
              className="text-center text-medium text-sm mt-1 lg:text-2xl lg:mt-4"
              style={{ fontFamily: "montserrat", color: "#2E2E2E9E" }}
            >
              Exhibitors
            </div>
          </div>

          <div className="">
            <div
              ref={countingRef}
              className="text-xl font-semibold text-center lg:text-4xl"
              style={{ fontFamily: "montserrat", color: "#2E2E2E9E" }}
            >
              {/* {formatAmount(countDisplay)}+ */}
              {countDisplay}+
            </div>
            <div
              className="text-center text-medium text-sm mt-1 lg:text-2xl lg:mt-4"
              style={{ fontFamily: "montserrat", color: "#2E2E2E9E" }}
            >
              Brands On Display
            </div>
          </div>

          <div className="">
            <div
              ref={countingRef}
              className="text-xl font-semibold text-center lg:text-4xl"
              style={{ fontFamily: "montserrat", color: "#2E2E2E9E" }}
            >
              {countVisitors}+
            </div>
            <div
              className="text-center text-medium text-sm mt-1 lg:text-2xl lg:mt-4"
              style={{ fontFamily: "montserrat", color: "#2E2E2E9E" }}
            >
              Visitors
            </div>
          </div>
          <div className="-mt-2 p-2">
            <div
              ref={countingRef}
              className="flex text-xl font-semibold text-center justify-center items-center lg:text-4xl"
              style={{ fontFamily: "montserrat", color: "#2E2E2E9E" }}
            >
              {countArea}
              <div className="text-sm lg:text-xl">sq.Ft</div>
            </div>
            <div
              className="text-center text-medium text-sm mt-1 lg:text-2xl lg:mt-4"
              style={{ fontFamily: "montserrat", color: "#2E2E2E9E" }}
            >
              Total Exhibition Area
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full m-auto bg-opacity-42"
        style={{
          backgroundColor: "#faf5f8",
        }}
        id="faq"
      >
        <div
          className="text-center text-3xl font-semibold pt-6 lg:text-5xl lg:pt-16"
          style={{ fontFamily: "montserrat" }}
        >
          FAQs
        </div>
        <div
          className="w-11/12 m-auto text-base text-center font-normal mt-4 lg:text-xl lg:w-5/6"
          style={{ fontFamily: "montserrat" }}
        >
          Know more about the event and how it works.
        </div>
        <div className="w-11/12 m-auto lg:w-3/4 pb-10 lg:pb-20">
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
  );
};

export default Faq;
