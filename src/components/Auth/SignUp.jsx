import React from "react";
import Auth from "@/styles/Auth.module.css";

function SignUp() {
  return (
    <>
      <div className={Auth.Container}>
        <div className={Auth.LogoAndImg}>
          <img src="/SignUpNurse.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default SignUp;
