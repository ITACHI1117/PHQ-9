import React from "react";
import Auth from "@/styles/Auth.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function SignUp() {
  return (
    <>
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
            />
            <input
              className={poppins.className}
              type="text"
              placeholder="Last Name"
            />
            <input
              className={poppins.className}
              type="email"
              placeholder="Email"
            />
            <input
              className={poppins.className}
              type="tel"
              placeholder="Phone"
            />
            <input
              className={poppins.className}
              type="password"
              placeholder="Password"
            />
          </form>
          <button className={poppins.className}>Sign Up</button>
          <h1 className={poppins.className}>or</h1>
          <a href="#" className={poppins.className}>
            Login
          </a>
        </div>
      </div>
    </>
  );
}

export default SignUp;
