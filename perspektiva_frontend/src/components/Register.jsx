import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  // function save(){
  //     console.log("Save func");

  //     axios.post(`${API_URL}/auth/register`,{
  //         email,
  //         username,
  //         fullName,
  //         password,
  //         password2
  //     }).then(async (res) => {
  //         console.log(await res.data);

  //     })
  //   }

  //     useEffect(() => {
  //       if(localStorage.getItem("userId")){
  //         navigate("/Home")
  //       }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan-500/50 shadow-lg shadow-cyan-500/50 max-h-120 min-w-lg rounded-xl ">
      <h1 className="text-3xl font-bold mb-6">Regisztráció</h1>
      <main className="">
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Username"
            className="border-2 rounded-md p-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
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
            type="password"
            placeholder="********"
            className="border-2 rounded-md p-1"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <input
            type="text"
            placeholder="Gipsz Jakab"
            className="border-2 rounded-md p-1"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="button"
            value="Regisztráció"
            className="border-2 rounded-md hover:bg-blue-300 hover:cursor-pointer"
            //   onClick={save}
          />
          <a className="a2 h-2" href="/">
            Van fiókom...!
          </a>
        </form>
      </main>
    </div>
  );
}
