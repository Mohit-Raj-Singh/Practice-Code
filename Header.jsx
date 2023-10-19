import React from "react";

const HeroComponent = ({ bgcover, title }) => {
  return (
    <div
      className={`h-[40vh] lg:h-[75vh] grid justify-center items-center bg-cover bg-no-repeat bg-fixed z-0 `}
      style={{ backgroundImage: `url(${bgcover})` }}
    >
      <div className="text-white text-4xl lg:text-7xl font-normal">{title}</div>
    </div>
  );
};

export default HeroComponent;
