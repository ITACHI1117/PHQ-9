import React from "react";
import NavBar from "./NavBar";
import LandingPage from "@/styles/LandingPage.module.css";
import { Poppins } from "next/font/google";
import WebBaseSection from "./WebBaseSection";
import SectionTwo from "./SectionTwo";
import Instructions from "./Instructions";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Header() {
  return (
    <div className={LandingPage.Container}>
      <NavBar />
      <div className={LandingPage.Hero}>
        <div className={LandingPage.HeroTexts}>
          <h1 className={poppins.className}>PHQ-9</h1>
          <p className={poppins.className}>
            The PHQ-9 is a multipurpose instrument for screening, diagnosing,
            monitoring and measuring the severity of depression.
          </p>
          <button className={poppins.className}>Take Test</button>
        </div>
        <div className={LandingPage.HeroImage}>
          <img src="/HeroNurse.png" alt="" width="550px" />
        </div>
      </div>
      <WebBaseSection />
      <SectionTwo />
      <Instructions />
    </div>
  );
}

export default Header;
