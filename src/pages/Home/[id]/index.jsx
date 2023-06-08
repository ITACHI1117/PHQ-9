import HomeHero from "@/components/Homepage/HomeHero";
import NavBar from "@/components/HomePage/NavBar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { database } from "../../../../firebase";
import { ref, child, get } from "firebase/database";

function Home() {
  const [user, setUser] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const dbRef = ref(database);
    const getuserData = async () => {
      await get(child(dbRef, `users/${id}`))
        .then((snapshot) => {
          let data = snapshot.val();
          setUser(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getuserData();
  }, [user]);

  return (
    <>
      <NavBar user={user} />
      <HomeHero />
    </>
  );
}

export default Home;
