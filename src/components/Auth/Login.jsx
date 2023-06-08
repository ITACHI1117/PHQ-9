import Auth from "@/styles/Auth.module.css";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Login() {
  const { LogIn, setEmail, setPassword, loading, user } =
    useContext(DataContext);
  const router = useRouter();
  return (
    <>
      <ToastContainer />
      <div className={Auth.Container}>
        <div className={Auth.signUpForm}>
          <h1 className={poppins.className}>Login</h1>
          <form action="">
            <input
              className={poppins.className}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={poppins.className}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <button onClick={() => LogIn()} className={poppins.className}>
            Login
          </button>
          <h1 className={poppins.className}>or</h1>
          <a
            onClick={() => router.push("/signUp")}
            className={poppins.className}
          >
            Sign Up
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
        <div className={Auth.LogoAndImg2}>
          <img className={Auth.Logo2} src="/phq-9.png" alt="" width="70px" />
          <img className={Auth.NurseImg} src="/LoginNurse.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Login;
