import LandingPage from "@/styles/LandingPage.module.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function SectionTwo() {
  return (
    <>
      <div className={LandingPage.SectionTwo}>
        <div className={LandingPage.CircleContainer}>
          <div className={LandingPage.CircleOne}>
            <img src="/Time.png" alt="" width={"200px"} borderRadius={"100%"} />
          </div>
          <h2 className={poppins.className}>Time Saving</h2>
        </div>
        <div className={LandingPage.CircleContainer}>
          <div className={LandingPage.CircleOne}>
            <img src="/Easy.png" alt="" width={"200px"} borderRadius={"100%"} />
          </div>
          <h2 className={poppins.className}>Easy to Use</h2>
        </div>
        <div className={LandingPage.CircleContainer}>
          <div className={LandingPage.CircleOne}>
            <img
              src="/Connivent.png"
              alt=""
              width={"200px"}
              borderRadius={"100%"}
            />
          </div>
          <h2 className={poppins.className}>Connivent</h2>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
