"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import cookie from 'js-cookie'


export default function LoginForm() {
  const { push } = useRouter();



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      Email: event.currentTarget.Email.value,
      Password: event.currentTarget.Password.value,
    };



    console.log("payload",payload)

    try {
      const logUser  = await axios.post("http://localhost:3000/api/auth/login", payload);

      console.log("logUser.data", logUser.data)

    

      const token = await logUser.data.token;
      if (logUser.data.Role === "admin") {
        


        cookie.set('e-mall', "true");
        alert('Hello Admin')
        push("/Admin");
      } else if (logUser.data.Role === "client" ) {
        
   
        cookie.set('e-mall', token);
        alert('Logged in Successfully')
       push('/Home')
      }
      else if(logUser.data.Role === "seller"){
        cookie.set('e-mall', "true");
        alert('Welcome to your products manager')
        push('/Seller')
      }


    } catch (e) {
      const error = e as AxiosError;

      alert(error.message);
    }
  };

  return (
     <div className='bg-white grid grid-cols-2 gap-96 w-full mt-44 ' >
     <div>  <img
                className="absolute"
                alt="Dl beatsnoop"
                src="https://i.imgur.com/nxyvDFz.png"
              /></div>

    <div className="grid h-screen w-96 ">
      <div className="shadow-xl p-5 rounded-lg border-t-4 border-black">
        <h1 className="text-4xl  text-center font-bold my-4 py-20"> ℰ-ℳ𝒶𝓁𝓁 🛒 <h3 className="text-xs mt-3"> Welcome Back</h3></h1>
       

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
   
          <input
          name ='Email'
            type="text"
            placeholder="Email"
          />
          <input
          name='Password'
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
