import React from "react";

import InformationLanding from "../../components/InformationLanding";
import { NavbarLanding } from "../../components/NavbarLanding";
import { Pricing } from "../../components/pricing";
import ContactUs from "../../components/ContactUs";
import { Courses } from "../../components/Courses";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-t from-blue-600 to-blue-400">
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2"></div>
      <NavbarLanding />
      <InformationLanding />
      <Courses />
      <Pricing />
      <ContactUs />
    </div>
  );
}
