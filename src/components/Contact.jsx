import React from "react";

function Contact() {
  return (
    <section class="my-[2%] mx-[3%] lg:mx-[10%] py-[4%] px-[3%] bg-[#1e1e1e] flex flex-col md:flex-row justify-between items-center">
      <div class="w-full my-[2%] mx-auto md:m-0 md:w-1/2">
        <h1 className="text-[36px] md:text-[44px] font-bold leading-tight">
          Let&#8217;s work together on your next project
        </h1>
        <p className="text-[16px] leading-normal mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          cumque dolore eveniet laboriosam perferendis consequuntur.
        </p>
      </div>
      <div class="w-[45%] text-center">
        <button className="font-bold px-[30px] py-[15px] bg-customred">
          CONTACT
        </button>
      </div>
    </section>
  );
}

export default Contact;
