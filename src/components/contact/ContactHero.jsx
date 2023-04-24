import React from "react";
import banner from "../../assets/images/technical-support-dark-green.png";

export default function ContactHero() {
  return (
    <div className="hidden lg:flex items-center inset-0 w-2/5 bg-white">
      <img className="mx-auto" src={banner} alt="Contact Banner" />
    </div>
  );
}
