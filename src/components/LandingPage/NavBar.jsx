import Image from "next/image";
import LandingPage from "@/styles/LandingPage.module.css";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

function NavBar() {
  return (
    <>
      <nav className={LandingPage.nav}>
        {/* <Image className="phq-9 logo" src="/phq-9.png" alt="phq-9 logo" /> */}
        <img src="/phq-9.png" alt="" width="70px" />
        <div className={LandingPage.navBoxContainer}>
          <a className={poppins.className} href="#">
            Login/Sign up
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
