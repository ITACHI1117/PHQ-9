import React, { createContext, useState, useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const DataContext = createContext({});
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, storage, database, reference } from "../../firebase";
import { set, get, child, update } from "firebase/database";

import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DataProvider = ({ children }) => {
  const router = useRouter();
  const userId = uuidv4();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const signIn = () => {
    const notify = () =>
      toast.success("Signed Up", {
        icon: "🎉",

        position: toast.POSITION.TOP_CENTER,
      });
    // setLoading(true);
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        // setLoading(false);
        setUser(user);
        set(reference(database, "users/" + userId), {
          id: userId,
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
        })
          .then(() => {
            console.log("Done");
            notify();
            setTimeout(() => {
              router.push("/login");
            }, 5000);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            // ..
          });
      }
    );
  };

  //   login Function
  function LogIn() {
    const notify = () =>
      toast.success("Welcome", {
        icon: "🎉",
        position: toast.POSITION.TOP_CENTER,
        progressClassName: "fancy-progress-bar",
      });
    // setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        // setSigned(true);
        // setLoading(false);
        console.log("Done");
        notify();
        setTimeout(() => {
          router.push("/home");
        }, 5000);
      })
      .catch((error) => {
        // setError(error.code);
        console.log(error.code);
        // setLoading(false);
      });
  }

  // sing out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out");
        router.replace("/login");
      })
      .catch((error) => {
        console.log("Sign out unsuccessful");
        // An error happened.
      });
  };

  return (
    <DataContext.Provider
      value={{
        // State
        firstname,
        lastname,
        phone,
        email,
        password,
        user,
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        setPassword,
        // functioins
        signIn,
        LogIn,
        logOut,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
