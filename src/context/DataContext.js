import React, { createContext, useState, useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const DataContext = createContext({});
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, storage, database, reference } from "../../firebase";
import { set, get, child, update } from "firebase/database";
import { useRouter } from "next/navigation";

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
            router.push("/login");
            setUserIdentify(userId);
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

  return (
    <DataContext.Provider
      value={{
        // State
        firstname,
        lastname,
        phone,
        email,
        password,
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        setPassword,
        // functioins
        signIn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
