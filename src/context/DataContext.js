import React, { createContext, useState, useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const DataContext = createContext({});
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updatePhoneNumber,
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
  const [loading, setLoading] = useState(null);

  const signIn = () => {
    // notifying user
    const notify = () =>
      toast.success("Signed Up", {
        icon: "🎉",
        position: toast.POSITION.TOP_CENTER,
        progressStyle: { backgroundColor: "blue" },
        hideProgressBar: true,
        style: {
          backgroundColor: "#00b4c5",
          fontSize: "15px",
          color: "white",
          textAlign: "center",
        },
      });
    const errorMessage = (message) =>
      toast.success(message, {
        icon: "🎉",
        position: toast.POSITION.TOP_CENTER,
        progressStyle: { backgroundColor: "blue" },
        hideProgressBar: true,
        style: {
          backgroundColor: "#00b4c5",
          fontSize: "15px",
          color: "white",
          textAlign: "center",
        },
      });
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoading(false);
        setUser(user);
        set(reference(database, "users/" + userId), {
          id: userId,
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
        })
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: userId,
            });
          })
          .catch((error) => {
            errorMessage(error.code);
            setLoading(false);
            // ..
          })
          .then(() => {
            console.log("Done");
            notify();
            setTimeout(() => {
              router.push("/login");
            }, 2000);
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
        progressStyle: { backgroundColor: "blue" },
        hideProgressBar: true,
        style: {
          backgroundColor: "#00b4c5",
          fontSize: "15px",
          color: "white",
          textAlign: "center",
        },
      });
    const errorMessage = (message) =>
      toast.success(message, {
        icon: "🎉",
        position: toast.POSITION.TOP_CENTER,
        progressStyle: { backgroundColor: "blue" },
        hideProgressBar: true,
        style: {
          backgroundColor: "#00b4c5",
          fontSize: "15px",
          color: "white",
          textAlign: "center",
        },
      });
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        // setSigned(true);
        setLoading(false);
        setEmail("");
        setPassword("");
        console.log("Done");
        notify();
        setTimeout(() => {
          router.push(`/Home/${userCredential.user.displayName}`);
        }, 2000);
      })
      .catch((error) => {
        // setError(error.code);
        errorMessage(error.code);
        console.log(error.code);
        setLoading(false);
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
        loading,
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
