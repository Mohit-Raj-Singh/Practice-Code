import React from "react";

const Accordion = ({ title, content, isOpen, toggleAccordion, icon }) => {
  return (
    <div
      className="w-full border shadow-md mt-4 lg:p-6"
      style={{ border: "1px solid #BFBFBF", borderRadius: "20px" }}
      // style={{ border: "1px solid red", borderRadius: "20px" }}
    >
      <div
        className="flex items-center justify-between p-2 cursor-pointer lg:p-4"
        style={{ fontFamily: "montserrat" }}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <div className="w-12 h-12 lg:mr-2" style={{ color: "#EC008C" }}>
            {icon}
          </div>
          <div className="text-xs ml-1 font-semibold lg:text-2xl ml-4">
            {title}
          </div>
        </div>
        <div
          className="w-8 h-8 rounded-full transition-transform transform flex items-center justify-center text-lg font-normal lg:text-5xl lg:w-12 lg:h-12"
          style={{ backgroundColor: "#ECECEC" }}
        >
          {isOpen ? "-" : "+"}
        </div>
      </div>
      {isOpen && (
        <div className="p-2 lg:p-4 text-xs lg:text-xl text-left font-normal ml-14">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
