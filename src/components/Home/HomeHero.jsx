import Home from "@/styles/Home.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
function HomeHero() {
  return (
    <>
      <div className={Home.HeroSection}>
        <img src="/TakeTheTest.png" alt="" width={"250px"} />
        <button className={poppins.className}>Start</button>
      </div>
    </>
  );
}

export default HomeHero;
