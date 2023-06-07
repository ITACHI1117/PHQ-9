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
  const { LogIn, setEmail, setPassword } = useContext(DataContext);
  const router = useRouter();
  return (
    <>
      <ToastContainer limit={1} />
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
