import React from "react";

import { useState } from "react";


function Footer() {
  let [navbar, setNavbar] = useState();
  return (
    <div className="w-full py-10 bg-black flex flex-col justify-center items-center gap-y-3">
      <div className="flex items-center">
      
        <p>ABC Company</p>
      </div>
      <div className="flex gap-x-8">

      </div>
      <div className="flex gap-x-3 text-xs text-opacity-60">
        <p>Terms and Conditions</p>
        <p>Referral Terms</p>
        <p>Media Kit</p>
      </div>
    </div>
  );
}

export default Footer;
