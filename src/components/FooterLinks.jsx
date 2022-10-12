import React from "react";
import FooterLink from "./FooterLink";

function FooterLinks() {
  return (
    <div class="flex flex-row justify-center m-[10%] sm:mt-[6%] sm:mb-[3%]">
      {["Home", "About", "Projects", "Contact"].map((link) => (
        <FooterLink key={link} linkText={link} />
      ))}
    </div>
  );
}

export default FooterLinks;
