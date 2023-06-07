import Image from "next/image";
import LandingPage from "@/styles/LandingPage.module.css";
import Home from "@/styles/Home.module.css";
import DataContext from "../../context/DataContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

function NavBar() {
  const router = useRouter();
  const {
    // function
    logOut,
    user,
  } = useContext(DataContext);
  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);
  console.log(user);

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
              <a on onClick={() => logOut(user)} className={poppins.className}>
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
