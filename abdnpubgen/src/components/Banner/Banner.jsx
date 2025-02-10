// import React from "react";
import topBanner from "/images/top-banner.svg";

const Banner = () => {
  return (
    <div>
      <div>
        <h1 className="w-full karla bg-fd-blue font-bold text-sm p-0 text-center border-b-black border-b-2">
          Fine Day Studio presents...
        </h1>
      </div>
      <div>
        <img src={topBanner} alt="" />
      </div>
      <div>
        <p className="karla font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-6 p-6">
          Aberdeen Pub Decider
        </p>
        <p className="souvenir font-bold text-4xl md:text-5xl lg:text-6xl text-center p-8 md:p-12 lg:p-20">
          Let&apos;s Spin the Wheel!
        </p>
      </div>
    </div>
  );
};

export default Banner;
