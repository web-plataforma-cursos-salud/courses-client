import React from "react";
import logo from "../../assets/logo/FisiomFulness.png";
import InformationLanding from "../../components/InformationLanding";
import { NavbarLanding } from "../../components/NavbarLanding";
import { Pricing } from "../../components/pricing";
import ContactUs from "../../components/ContactUs";
import { Courses } from "../../components/Courses";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-t from-[#1e40af] to-[#089ecc]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-[#089ecc] to-transparent rounded-full"></div>
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2"></div>
      <NavbarLanding />
      <InformationLanding />
      <Courses />
      <Pricing />
      <ContactUs />
    </div>
  );
}
