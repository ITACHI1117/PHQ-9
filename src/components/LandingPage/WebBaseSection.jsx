import React from "react";
import LandingPage from "@/styles/LandingPage.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function WebBaseSection() {
  return (
    <>
      <div className={LandingPage.WebBaseSection}>
        <h1 className={poppins.className}>Web Based PHQ-9</h1>
        <p className={poppins.className}>
          We have integrated the PHQ-9 which is a multipurpose instrument for
          screening, diagnosing, monitoring and measuring the severity of
          depression into the web for easy access to users{" "}
        </p>
      </div>
    </>
  );
}

export default WebBaseSection;
