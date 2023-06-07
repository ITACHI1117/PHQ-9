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
          {loading ? (
            <div className="loading">
              <svg
                class="ip"
                viewBox="0 0 256 128"
                width="106px"
                height="128px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#5ebd3e" />
                    <stop offset="33%" stop-color="#ffb900" />
                    <stop offset="67%" stop-color="#f78200" />
                    <stop offset="100%" stop-color="#e23838" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stop-color="#e23838" />
                    <stop offset="33%" stop-color="#973999" />
                    <stop offset="67%" stop-color="#009cdf" />
                    <stop offset="100%" stop-color="#5ebd3e" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke-linecap="round" stroke-width="16">
                  <g class="ip__track" stroke="#ddd">
                    <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
                    <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
                  </g>
                  <g stroke-dasharray="180 656">
                    <path
                      class="ip__worm1"
                      stroke="url(#grad1)"
                      stroke-dashoffset="0"
                      d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"
                    />
                    <path
                      class="ip__worm2"
                      stroke="url(#grad2)"
                      stroke-dashoffset="358"
                      d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"
                    />
                  </g>
                </g>
              </svg>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default SignUp;
