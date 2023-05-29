import Image from "next/image";
import LandingPage from "@/styles/LandingPage.module.css";
import Home from "@/styles/Home.module.css";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

function NavBar() {
  return (
    <>
      <nav className={LandingPage.nav}>
        {/* <Image className="phq-9 logo" src="/phq-9.png" alt="phq-9 logo" /> */}
        <div className={Home.LogoAndGreeting}>
          <img src="/phq-9.png" alt="" width="70px" />
          <h2 className={poppins.className}>Good Day John</h2>
        </div>
        <div className={Home.navBoxContainer}>
          <ul>
            <li>
              <a className={poppins.className} href="#">
                Test History
              </a>
            </li>
            <li>
              <a className={poppins.className} href="#">
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
