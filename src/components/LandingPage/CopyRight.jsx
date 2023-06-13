import LandingPage from "@/styles/LandingPage.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function CopyRight() {
  return (
    <div className={LandingPage.copyright}>
      <p className={poppins.className}>Copy Right 2023</p>
    </div>
  );
}

export default CopyRight;
