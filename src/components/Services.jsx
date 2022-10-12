import React from "react";

import UIDesign from "../assets/ui-design.png";
import ProductDesign from "../assets/product-design.png";
import Branding from "../assets/branding.png";

function Services() {
  return (
    <section className="services-section px-3% py-[5%] md:p-[3%] lg:p-[6%] h-[700px] lg:h-[800px] relative sm:absolute">
      <div className="flex flex-col sm:flex-row justify-between lg:mx-[5%]">
        <div className="bg-[#1e1e1e] p-2.5 md:px-[25px] md:py-[10px] lg:px-[50px] lg:py-[30px] mb-5 mt-[2%] sm:mx-[2%]">
          <img
            src={UIDesign}
            alt="ui-design"
            className="h-[50px] md:h-[66px] mb-5"
          />
          <h2>UI Design</h2>
          <p className="leading-[1.5] my-2.5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h5 className="text-customred text-base">KNOW MORE &#8594;</h5>
        </div>

        <div className="service-card active bg-customred p-2.5 md:px-[25px] md:py-[10px] lg:px-[50px] lg:py-[30px] mb-5 mt-[2%] sm:mx-[2%]">
          <img
            src={ProductDesign}
            alt="product-design"
            className="h-[50px] md:h-[66px] mb-5"
          />
          <h2>Product Design</h2>
          <p className="leading-[1.5] my-2.5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h5 className="text-white text-base">KNOW MORE &#8594;</h5>
        </div>

        <div className="bg-[#1e1e1e] p-2.5 md:px-[25px] md:py-[10px] lg:px-[50px] lg:py-[30px] mb-5 mt-[2%] sm:mx-[2%]">
          <img
            src={Branding}
            alt="branding"
            className="h-[50px] md:h-[66px] mb-5"
          />
          <h2>Branding</h2>
          <p className="leading-[1.5] my-2.5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h5 className="text-customred text-base">KNOW MORE &#8594;</h5>
        </div>
      </div>

      <div className="statistics-section grid sm:grid-cols-3 grid-cols-1 text-center md:mx-[3%] md:my-[5%] lg:mx-[7%] lg:my-[8%]">
        <div className="left-section px-[2%] py-[5%] sm:py-[30%] md:py-[10%]">
          <h1 className="text-[66px] md:text-[84px] text-customred font-extrabold">
            12
          </h1>
          <p className="font-bold text-[24px]">Years Experience</p>
        </div>
        <div>
          <div className="bg-[#1e1e1e] px-[30px] py-[20px] m-[2%]">
            <h2 className="text-[36px] text-customred">60+</h2>
            <p className="m-2.5">Clients</p>
          </div>
          <div className="bg-[#1e1e1e] px-[30px] py-[20px] m-[2%]">
            <h2 className="text-[36px] text-customred">122+</h2>
            <p className="m-2.5">Completed Projects</p>
          </div>
        </div>
        <div>
          <div className="bg-[#1e1e1e] px-[30px] py-[20px] m-[2%]">
            <h2 className="text-[36px] text-customred">08</h2>
            <p className="m-2.5">Years Experience</p>
          </div>
          <div className="bg-[#1e1e1e] px-[30px] py-[20px] m-[2%]">
            <h2 className="text-[36px] text-customred">10</h2>
            <p className="m-2.5">Achievements</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
