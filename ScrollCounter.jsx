/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "./CTAButtons";
import { useNavigate } from "react-router";
export const Benfitis = () => {
  const navigate = useNavigate();
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const countingRefOne = useRef(null);
  const countingRefTwo = useRef(null);
  const countingRefThree = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let currentCountE = 0;
          const interval = setInterval(() => {
            if (currentCountE <= 1000000) {
              setCounter1(currentCountE);
              currentCountE += 10000;
            } else {
              clearInterval(interval);
            }
          }, 0.0000001);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );
    if (countingRefOne.current) {
      observer.observe(countingRefOne.current);
    }
    return () => {
      if (countingRefOne.current) {
        observer.unobserve(countingRefOne.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let currentCountD = 0;
          const interval = setInterval(() => {
            if (currentCountD <= 1000) {
              setCounter2(currentCountD);
              currentCountD += 10;
            } else {
              clearInterval(interval);
            }
          }, 5);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );
    if (countingRefTwo.current) {
      observer.observe(countingRefTwo.current);
    }
    return () => {
      if (countingRefTwo.current) {
        observer.unobserve(countingRefTwo.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let currentCountE = 0;
          const interval = setInterval(() => {
            if (currentCountE <= 300) {
              setCounter3(currentCountE);
              currentCountE += 5;
            } else {
              clearInterval(interval);
            }
          }, 5);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );
    if (countingRefThree.current) {
      observer.observe(countingRefThree.current);
    }
    return () => {
      if (countingRefThree.current) {
        observer.unobserve(countingRefThree.current);
      }
    };
  }, []);
  return (
    <div
      className="lg:h-auto h-[75vh]"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/da05bn5ub/image/upload/q_auto/v1694514333/AceTech%20Website/ace_bg_cover_me7eel.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      <div className="flex flex-col px-2 text-white mt-0 h-full w-full">
        {" "}
        <div className="text-3xl lg:text-6xl font-normal mt-7 text-center font-Playfair-Display">
          {" "}
          BENEFITS{" "}
        </div>{" "}
        <div className="text-xs lg:text-lg w-72 lg:w-4/5 text-center m-auto mt-4 font-Montserrat">
          {" "}
          Experience unparalleled networking and business growth opportunities.{" "}
        </div>{" "}
        <div className="w-11/12 h-[90%] grid grid-cols-3 gap-80 lg:gap-5 mt-4 overflow-x-auto lg:overflow-hidden mx-0 lg:mx-auto">
          {" "}
          <div
            className="text-white rounded-3xl px-2 py-2 w-[300px] h-[95%] lg:h-full lg:w-full"
            style={{ backgroundColor: "#39393a" }}
          >
            {" "}
            <div
              className="text-3xl lg:text-4xl  text-center mt-2 lg:mt-6 font-Playfair-Display"
              ref={countingRefOne}
            >
              {" "}
              {counter1} +{" "}
            </div>{" "}
            <div className="text-xl lg:text-2xl text-center mt-2 lg:mt-6 font-Playfair-Display">
              {" "}
              Event Exhibitors{" "}
            </div>{" "}
            <div className="py-2 px-10">
              {" "}
              <ul
                className="list-disc mt-2 lg:mt-6 text-xs lg:text-[1rem] lg:leading-5"
                style={{ fontFamily: "montserrat" }}
              >
                {" "}
                <li>
                  {" "}
                  Network with renowned architects and prominent industry
                  professionals nationwide, fostering valuable partnerships.
                  Enhance brand visibility through one-on-one interaction and
                  strategic engagement with key decision-makers.{" "}
                </li>{" "}
                <li className="mt-5">
                  {" "}
                  Enhance brand visibility on one-on-one interaction and
                  strategic engagement with key decision-makers{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className="text-white rounded-3xl px-2 py-3 w-[300px] h-[95%] lg:h-full lg:w-full"
            style={{ backgroundColor: "#39393a" }}
          >
            {" "}
            <div
              className="text-3xl lg:text-4xl text-center mt-2 lg:mt-6 font-Playfair-Display"
              ref={countingRefTwo}
            >
              {" "}
              {counter2} +{" "}
            </div>{" "}
            <div className="text-xl lg:text-2xl text-center mt-2 lg:mt-6 font-Playfair-Display">
              {" "}
              Event in over 30 cities{" "}
            </div>{" "}
            <div className="py-2 px-10">
              {" "}
              <ul
                className="list-disc mt-2 lg:mt-6 text-xs lg:text-[1rem] lg:leading-5"
                style={{ fontFamily: "montserrat" }}
              >
                {" "}
                <li>
                  {" "}
                  A pivotal platform to showcase the latest products and
                  innovations for potential lead generation. An opportunity to
                  engage in business collaborations amidst the purchase teams
                  looking for honorable solutions for their projects{" "}
                </li>{" "}
                <li className="mt-5">
                  {" "}
                  An opportunity to engage in business collaborations amidst the
                  purchase teams looking for honourable solutions for their
                  projects{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className="text-white rounded-3xl px-2 py-3 w-[300px] h-[95%] lg:h-full lg:w-full"
            style={{ backgroundColor: "#39393a" }}
          >
            {" "}
            <div
              className="text-3xl lg:text-4xl text-center mt-2 lg:mt-6 font-Playfair-Display"
              ref={countingRefThree}
            >
              {" "}
              {counter3} +{" "}
            </div>{" "}
            <div className="text-xl lg:text-2xl text-center mt-2 lg:mt-6 font-Playfair-Display">
              {" "}
              Brand Evaluations{" "}
            </div>{" "}
            <div className="py-2 px-7">
              {" "}
              <ul
                className="list-disc mt-2 lg:mt-6 text-xs lg:text-[1rem] lg:leading-5"
                style={{ fontFamily: "montserrat" }}
              >
                {" "}
                <li>
                  {" "}
                  Delve into sponsorship opportunities to elevate brand
                  recognition. Gain accolades through awards that recognize
                  talent and innovation.{" "}
                </li>{" "}
                <li className="mt-5">
                  {" "}
                  Gain accolades through awards that recognize talent and
                  innovation{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-36 h-9 lg:w-56 lg:h-12 mb-14 lg:mb-20 mx-auto">
          {" "}
          <PrimaryButton onClick={() => navigate("/contact")}>
            {" "}
            Know More{" "}
          </PrimaryButton>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
