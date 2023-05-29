import LandingPage from "@/styles/LandingPage.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Instructions() {
  return (
    <>
      <div className={LandingPage.Instructions}>
        <h1 className={poppins.className}>Instructions</h1>
        <ul className={poppins.className}>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
        </ul>
      </div>
    </>
  );
}

export default Instructions;
