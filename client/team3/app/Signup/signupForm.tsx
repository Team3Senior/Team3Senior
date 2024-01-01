"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import cookie from 'js-cookie'



export default function RegisterForm() {

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const router = useRouter();


  

  const handleSubmit = async (e :  React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    if (!firstName ||!lastName ||!role || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    const validateEmail = function(address : string){
      let notValidChar = ["/",";",",","*","<",">","?","§","!","%","$"]
      let count =0
      
     if(address.length<4 || (!address.includes("@"))){
      setError("Email not valid")
      alert("length not valid. Please Try again")
      return false;
    }

     for(let i=1; i<address.length-2;i++){
     if( address[i]==="@"){count++}
     if(notValidChar.includes(address[i])){
      console.log(address[i])
      setError("Email not valid")
      alert("Should only contain characters,numbers, dot or dash. Please Try again")
      return false;
    }
    
      }
    if(count>1 || count===0){
      setError("Email not valid")
      alert("should not contain more than one @ and it shouldn't be in the limits of your email.  Please Try again")
      return false; 
    }
    
     
     for(let k=address.indexOf("@"); k<address.length; k++){
      if(!address.includes(".")){
        setError("Email not valid")
        alert("Should contain a dot in the second part.  Please Try again")
        return false;
      }
   
     }
    
    if(address[address.length-1]==="." || address[0]==="." ){
   
      setError("Email not valid")
      alert("You shouldn't put dot in the start or in last of the email.  Please Try again")

      return false; 
    }
    
    if( address[address.indexOf("@")+1]==="." || address[address.indexOf("@")-1]==="."){
      setError("Email not valid")
      alert("you shouldn't put dot in after or before @.  Please Try again")

      return false;
    }
    
    };


   let verf = validateEmail(email)
   
   if(verf === false) {
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
        alert("User already exists")
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
        const token = await res.json();
        cookie.set('e-mall', token);
        router.push("/Login");
        console.log('res',res)
      } else {
        console.log("User registration failed.");
        alert("Email already exists. Try another one ")
        router.push("/Signup");
  
      }
    } catch (error) {
      console.log("Error during registration: ", error);
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
            placeholder="Specify : seller / client "
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
