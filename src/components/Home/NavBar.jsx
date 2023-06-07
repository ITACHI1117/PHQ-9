import Image from "next/image";
import LandingPage from "@/styles/LandingPage.module.css";
import Home from "@/styles/Home.module.css";
import DataContext from "../../context/DataContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import { database } from "../../../firebase";
import {
  ref,
  child,
  get,
  serverTimestamp,
  set,
  push,
  onDisconnect,
  onValue,
} from "firebase/database";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

function NavBar() {
  const router = useRouter();
  const {
    // function
    logOut,
    user,
  } = useContext(DataContext);

  const [allUsers, setAllUsers] = useState();

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setAllUsers(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
        setLoadError(error);
      });
  });

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
