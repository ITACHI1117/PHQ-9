import React, { useEffect } from "react";
import Auth from "@/styles/Auth.module.css";
import { Poppins, Shadows_Into_Light_Two } from "next/font/google";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function SignUp() {
  const router = useRouter();
  const {
    // State
    firstname,
    lastname,
    phone,
    email,
    setFirstName,
    setLastName,
    setPhone,
    setEmail,
    setPassword,
    // function
    signIn,
    user,
    error,
    loading,
  } = useContext(DataContext);

  return (
    <>
      <ToastContainer limit={1} />
      <div className={Auth.Container}>
        <div className={Auth.LogoAndImg}>
          <img className={Auth.Logo} src="/phq-9.png" alt="" width="70px" />
          <img className={Auth.NurseImg} src="/SignUpNurse.png" alt="" />
        </div>
        <div className={Auth.signUpForm}>
          <h1 className={poppins.className}> Sign Up</h1>
          <form action="">
            <input
              className={poppins.className}
              type="text"
              placeholder="First Name"
              value={firstname}
              name="names"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className={poppins.className}
              type="text"
              placeholder="Last Name"
              value={lastname}
              name="names"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className={poppins.className}
              type="email"
              placeholder="Email"
              value={email}
              name="names"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={poppins.className}
              type="tel"
              placeholder="Phone"
              value={phone}
              name="names"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className={poppins.className}
              type="password"
              placeholder="Password"
              name="names"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <button className={poppins.className} onClick={() => signIn()}>
            Sign Up
          </button>
          <h1 className={poppins.className}>or</h1>
          <a
            onClick={() => router.push("/login")}
            className={poppins.className}
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
}

export default SignUp;
