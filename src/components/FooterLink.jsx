import React from "react";

function FooterLink({ linkText }) {
  return (
    <p className="mx-[3%] cursor-pointer uppercase text-sm font-bold">
      {linkText}
    </p>
  );
}

export default FooterLink;
