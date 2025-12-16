import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  //   function save() {
  //     console.log("Save func");

  //     axios
  //       .post(`${API_URL}/auth/login`, {
  //         email,
  //         password,
  //       })
  //       .then(async (res) => {
  //         const data = await res.data;
  //         localStorage.setItem("userId", data.id);
  //       });
  //   }

  //       useEffect(() => {
  //     if(localStorage.getItem("userId")){
  //       navigate("/messages")
  //     }
  //   })

  return (
    <main className="">
      <form className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="email"
          className="border-2 rounded-md p-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="********"
          className="border-2 rounded-md p-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="button"
          value="Bejelentkezes"
          className="border-2 rounded-md hover:bg-blue-300 hover:cursor-pointer"
          //   onClick={save}
        />
        <a href="/Register">Még nincs fiókom...!</a>
      </form>
    </main>
  );
}
