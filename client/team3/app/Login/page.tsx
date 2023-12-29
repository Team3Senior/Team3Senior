'use client'
import Footer from "../Footer/page";
import React, {useState} from "react";
import Nav from "../Nav/page";
import Link from "next/link"


export default function Login(){

    const [chType,setChType]=useState<string>('')
    const [show,setShow ]=useState<boolean>(false)
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')


    return (
      <div>
      <Nav/>
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-bg w-[1440px] h-[1561px]">
          <div className="items-center gap-[129px] top-[200px] inline-flex relative">
            <div className="relative w-[805px] h-[781px] bg-[#cbe4e8] rounded-[0px_4px_4px_0px] overflow-hidden">
              <img
                className="absolute w-[805px] h-[706px] top-[75px] left-0"
                alt="Dl beatsnoop"
                src="https://i.imgur.com/nxyvDFz.png"
              />
            </div>
        
            <div className="flex-col items-start gap-[40px] flex-[0_0_auto] inline-flex relative">
              <div className="flex-col items-start gap-[48px] flex-[0_0_auto] inline-flex relative">
                <div className="flex-col items-start gap-[24px] flex-[0_0_auto] inline-flex relative">
                  <div className="font-bold text-black-700 relative w-fit mt-[-1.00px] font-heading-36px-medium ">
                    Log into E-Mall</div>
                  <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                    Enter your details below
                  </div>
                </div>
                <div className="flex-col items-start gap-[40px] flex-[0_0_auto] inline-flex relative">
                  <div className="flex-col items-start gap-[8px] flex-[0_0_auto] inline-flex relative">
                    <div className="relative w-fit mt-[-1.00px] opacity-40 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                      <input type="text" placeholder="Enter your email" className="w-96 h-9"
                      onChange={(event)=>{setEmail(event.target.value)}}/>
                    </div>
                  </div>
                  <div className="flex-col items-start gap-[8px] flex-[0_0_auto] inline-flex relative">
                    <div className="relative w-fit mt-[-1.00px] opacity-40 font-title-16px-regular">
                      <input type="password" placeholder="Enter your password" className="w-96 h-9"
                      onChange={(event)=>{setPassword(event.target.value)}}/>
                      <br/>
                      <div>
                      <div className=" w-fit font-title-16px-regular text-black">Forget Password?</div>
                      
                    </div>
                    
                    </div>
                    <div className=" w-fit font-title-16px-regular text-black">Don’t have an account yet? <a className="text-sm text-[#7747ff]" href="/">Sign up</a></div>

                  </div>
                </div>
              </div>
              <div>
                    <button className="mt-[60px] bg-red-500 w-32 h-10 border rounded text-white text-sm" onClick={()=>setShow(!show)}>Select Type !</button>
                    {show&& <select className="  rounded  text-black " multiple >
                      
                      <option value="client"onClick={()=>{setChType('client')}}>Client</option>
                      <option value="seller"onClick={()=>{setChType('seller')}}>Seller</option>
                      <option value="admin" onClick={()=>{setChType('admin')}} >Admin</option>
                    </select>}
              </div>
              <div className="items-center gap-[87px] flex-[0_0_auto] inline-flex relative">
                <div className="flex-col items-start gap-[16px] flex-[0_0_auto] inline-flex relative">
                  <button onClick={()=>{
                    if(chType === 'client'){<Link href='/home'></Link>}
                    else if(chType === 'seller'){<Link href='/sellerInterface'></Link>}
                    else {<Link href='/admin'></Link>}

                  }} className=" bg-red-500 w-32 h-10 border rounded text-white text-sm mr-1"> Log-In </button>
                </div>
              </div>
            </div>
          </div>
          <br/>
   
        
        
        </div>
      </div>
      <Footer/>
      </div>
    );
  };

  