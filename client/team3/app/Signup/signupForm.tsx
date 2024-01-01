"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../Footer/page";

export default function RegisterForm() {

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e :  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName ||!lastName ||!role || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         FirstName:  firstName,
          LastName : lastName,
          Email: email,
          Password : password,
          Role : role
        }),
      });

      if (res.ok) {

        router.push("/Login");

      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };





  return (
    <div className='bg-white grid grid-cols-2 gap-96 w-full' >
     <div>  <img
                className="absolute w-[805px] h-[706px] top-[75px] left-0"
                alt="Dl beatsnoop"
                src="https://i.imgur.com/nxyvDFz.png"
              /></div>

    <div className="grid h-screen w-96 mt-20">
      <div className="shadow-xl p-5 rounded-lg border-t-4 border-black">
        <h1 className="text-4xl  text-center font-bold my-4 py-20"> ℰ-ℳ𝒶𝓁𝓁 🛒<h3 className="text-xs mt-3"> Register And Start Shopping !</h3></h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="first Name"
          />
            <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"
          />
          
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
            <input
            onChange={(e) => setRole(e.target.value)}
            type="Role"
            placeholder="Role"
          />
          <button className="bg-cyan-50 text-black font-bold cursor-pointer px-6 py-2 hover:bg-red-500">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-center" href="/Login">
            Already have an account? <span className="underline font-bold font-red-500">Login</span>
          </Link>
        </form>
        
      </div>
      
    </div>
    </div>
  );
}
