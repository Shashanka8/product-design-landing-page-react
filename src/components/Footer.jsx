import React from "react";

import Logo from "../assets/Logo.png";
import FBLogo from "../assets/facebook-logo.svg";
import TwitterLogo from "../assets/twitter-logo.svg";
import YTLogo from "../assets/youtube-symbol.svg";

function Footer() {
  return (
    <footer className="flex flex-row justify-between py-[2%] px-[3%] lg:px-[10%] bg-[#1e1e1e]">
      <div>
        <img src={Logo} alt="logo" className="h-[30px]" />
      </div>
      <div class="flex flex-row justify-between w-[30%] md:w-[15%] mr-[30%] md:mr-[40%]">
        <img src={FBLogo} alt="facebook-logo" className="h-6 cursor-pointer" />
        <img
          src={TwitterLogo}
          alt="twitter-logo"
          className="h-6 cursor-pointer"
        />
        <img src={YTLogo} alt="youtube-symbol" className="h-6 cursor-pointer" />
      </div>
    </footer>
  );
}

export default Footer;
