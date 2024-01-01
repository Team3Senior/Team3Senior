"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link'

export default function Home() {
  const { push } = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      Email: event.currentTarget.email.value,
      Password: event.currentTarget.password.value,
    };

    console.log("payload",payload)
    try {
      const logUser  = await axios.post("http://localhost:3000/api/auth/login", payload);

      alert(JSON.stringify(logUser));

      console.log("data ", logUser)
if(logUser.data.Role === "admin") {
  push("/Admin")
}
 if(logUser.data.Role === "client") {
  push('/Home')
}
      
      // redirect the user to home 
      // push("/Home");

    } catch (e) {
      const error = e as AxiosError;

      alert(error.message);
    }
  };

  return (
     <div className='bg-white grid grid-cols-2 gap-96 w-full' >
     <div>  <img
                className="absolute w-[805px] h-[706px] top-[270px] left-0"
                alt="Dl beatsnoop"
                src="https://i.imgur.com/nxyvDFz.png"
              /></div>

    <div className="grid h-screen w-96 mt-20">
      <div className="shadow-xl p-5 rounded-lg border-t-4 border-black">
        <h1 className="text-4xl  text-center font-bold my-4 py-20"> ℰ-ℳ𝒶𝓁𝓁 🛒 <h3 className="text-xs mt-3"> Welcome Back</h3></h1>
       

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
   
          <input
            type="text"
            placeholder="Email"
          />
          <input
            type="password"
            placeholder="Password"
          />
         
          <button className="bg-cyan-50 text-black font-bold cursor-pointer px-6 py-2 hover:bg-red-500">
            Log In
          </button>

          <Link className="text-sm mt-3 text-center" href="/Signup">
            You Don't Have an Account? <span className="underline font-bold font-red-500 hover:">Register Now</span>
          </Link>
        </form>
        
      </div>
      
    </div>
    </div>
  );
}
