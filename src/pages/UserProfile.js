import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar";

export default function UserProfile(){
  const [user, setUser] = useState({})
  const userId = useParams().id;

  useEffect(() =>{
    fetch(`http://localhost:4000/users/${userId}`)
    .then(r => r.json())
    .then(data => setUser(data))
    .catch(error => console.error(error))
  }, [userId]);

  if(!user.name){
    return <h1>Loading...</h1>
  }
    return(
        <>
          <header>
            <NavBar />
          </header>
          <main>
            <h1>{user.name}</h1>
          </main>
        </>
      );
}