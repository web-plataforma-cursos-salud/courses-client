import React, { useState } from "react";
import InformationLanding from "../../components/InformationLanding";
import { NavbarLanding } from "../../components/NavbarLanding";
import { Pricing } from "../../components/pricing";
import ContactUs from "../../components/ContactUs";
import { Courses } from "../../components/Courses";
import CardLogin from "../../components/CardLogin";
import CardSignup from "../../components/CardSignup";


export default function LandingPage() {

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSingUpVisible, setSignUpVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginVisible(true);
  };

  const handleCloseLogin = () => {
    setIsLoginVisible(false);
  };


  
  const handleSignUpClick = () => {
    setSignUpVisible(true);
    setIsLoginVisible(false);

  };

  const handleCloseSingUp = () => {
    setSignUpVisible(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-t from-blue-600 to-blue-400">
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2"></div>
      <NavbarLanding onLoginClick={handleLoginClick}  onSignUpClick={handleSignUpClick} />
      <InformationLanding  />
      <Courses />
      <Pricing onLoginClick={handleLoginClick} />
      <ContactUs />
      
       {/* Mostrar el login card cuando isLoginVisible sea true */}
       {isLoginVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0" onClick={handleCloseLogin}></div>
          <CardLogin onClose={handleCloseLogin} onSignUpClick={handleSignUpClick} />
        </div>
      )}

        {/* Mostrar el Sing card cuando isSignUpVisible sea true */}
        {isSingUpVisible && (
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="bg-black bg-opacity-50 absolute inset-0" onClick={handleCloseSingUp}></div>
    <CardSignup onClose={handleCloseSingUp} />
  </div>
)}

      
    </div>
  );
}
