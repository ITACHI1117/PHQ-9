import Auth from "@/styles/Auth.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Login() {
  return (
    <>
      <div className={Auth.Container}>
        <div className={Auth.signUpForm}>
          <h1 className={poppins.className}> Sign Up</h1>
          <form action="">
            <input
              className={poppins.className}
              type="email"
              placeholder="Email"
            />
            <input
              className={poppins.className}
              type="password"
              placeholder="Password"
            />
          </form>
          <button className={poppins.className}>Login</button>
          <h1 className={poppins.className}>or</h1>
          <a href="/signUp" className={poppins.className}>
            Sign Up
          </a>
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
