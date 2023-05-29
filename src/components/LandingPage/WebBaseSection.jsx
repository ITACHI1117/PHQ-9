import React from "react";
import LandingPage from "@/styles/LandingPage.module.css";

function WebBaseSection() {
  return (
    <>
      <div className={LandingPage.WebBaseSection}>
        <h1>Web BAsed PHQ-9</h1>
        <p>
          We have integrated the PHQ-9 which is a multipurpose instrument for
          screening, diagnosing, monitoring and measuring the severity of
          depression into the web for easy access to users{" "}
        </p>
      </div>
    </>
  );
}

export default WebBaseSection;
