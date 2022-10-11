import React from "react";

import ProfileMan from "../assets/Profile-Man.png";

function Hero() {
  return (
    <section className="flex flex-col sm:flex-row pt-[3%] px-[3%] lg:pt-[3%] lg:pl-[6%] lg:pr-[10%]">
      <div className="h-[330px] sm:h-[400px] lg:h-[550px] my-[2%] lg:my-0 mx-[-50px] md:mx-0">
        <img src={ProfileMan} alt="Profile-Man" />
      </div>
      <div className="pb-[2%] sm:py-[5%] lg:pb-[12%] lg:pt-[12%]">
        <p className="text-xl font-bold text-customred">Hello I'm Shashanka</p>
        <h1 className="text-[52px] lg:text-[66px] font-bold leading-none">
          Visual Designer
        </h1>
        <p className="mt-2.5 w-full lg:w-4/5 mb-8 leading-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
          deserunt mollitia laborum sit vel ipsa quibusdam, autem quasi nulla
          illum soluta ad, ut aperiam cumque.
        </p>
        <button className="bg-customred text-white px-[30px] py-[15px] font-bold border-none">
          ABOUT ME
        </button>
      </div>
    </section>
  );
}

export default Hero;
