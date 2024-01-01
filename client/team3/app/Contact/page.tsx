"use client"
import React, { FC, useState, useEffect } from "react";
import Button from "../Button/page";
import PlaceboxInfo from "../PlaceboxInfo/page";
import { FaSquarePhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { useRouter } from "next/navigation";
import Navbar from "../Nav/page";
import Footer from "../Footer/page";

interface Category {
  userName: string;
  userEmail: string;
  userNumber: string;
  userMessage: string;
}


const Contact: FC = () => {
  const [message, setMessage] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);
  const [show, setShow] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneN, setPhoneN] = useState<string>("");
  const router = useRouter();

  const addmessage = async () => {
    try {
      await fetch(`http://localhost:3000/api/addContact`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: name,
          userNumber: phoneN,
          userEmail: email,
          userMessage: message,
        }),
      });
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <>
      <div>
        <Navbar />

        <div className="bg-white flex flex-row justify-center w-full">
          <div className="bg-bg w-[1437px] h-[500px] relative">
            <div className="absolute w-[800px] h-[457px] top-[100px] left-[504px] bg-primary rounded-[4px] overflow-hidden shadow-categogy-5">
              <div className="flex-col items-end gap-[32px] relative top-[40px] left-[31px]">
                <div className=" items-start gap-[16px] relative flex-[0_0_auto]">
                  <div className="relative w-[235px] h-[50px] bg-secondary rounded-[4px]">
                    <p className="text-transparent absolute top-[12px] left-[16px] opacity-50 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                      <span className="text-black font-title-16px-regular [font-style:var(--title-16px-regular-font-style)] font-[number:var(--title-16px-regular-font-weight)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] text-[length:var(--title-16px-regular-font-size)]">
                        <input type="text" placeholder="Your Name"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </span>
                      <span className="text-[#db4444] font-title-16px-regular [font-style:var(--title-16px-regular-font-style)] font-[number:var(--title-16px-regular-font-weight)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] text-[length:var(--title-16px-regular-font-size)]">
                        *
                      </span>
                    </p>
                  </div>
                  <div className="relative w-[235px] h-[50px] bg-secondary rounded-[4px]">
                    <p className="text-transparent absolute top-[12px] left-[16px] opacity-50 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                      <span className="text-black font-title-16px-regular [font-style:var(--title-16px-regular-font-style)] font-[number:var(--title-16px-regular-font-weight)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] text-[length:var(--title-16px-regular-font-size)]">
                        <input type="text" placeholder="Your Email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </span>
                      <span className="text-[#db4444] font-title-16px-regular [font-style:var(--title-16px-regular-font-style)] font-[number:var(--title-16px-regular-font-weight)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] text-[length:var(--title-16px-regular-font-size)]">
                        *
                      </span>
                    </p>
                  </div>
                  <div className="relative w-[235px] h-[50px] bg-secondary rounded-[4px]">
                    <p className="text-transparent absolute top-[12px] left-[16px] opacity-50 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                      <span className="text-black font-title-16px-regular [font-style:var(--title-16px-regular-font-style)] font-[number:var(--title-16px-regular-font-weight)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] text-[length:var(--title-16px-regular-font-size)]">
                        <input type="text" placeholder="Phone Number"
                          onChange={(e) => {
                            setPhoneN(e.target.value);
                          }}
                        />
                      </span>
                      <span className="text-[#db4444] font-title-16px-regular [font-style:var(--title-16px-regular-font-style)] font-[number:var(--title-16px-regular-font-weight)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] text-[length:var(--title-16px-regular-font-size)]">
                        *
                      </span>
                    </p>
                  </div>
                  <input type="text" placeholder="Your message Here"
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        />
                </div>
               
               
                <button
                  className="bg-black mt-5 h-11 w-52 text-white mb-10 shadow-md rounded"
                  onClick={() => {
                    addmessage({ Name: name, phone: phoneN, Email: email, message: message });
                    // router.push('/Admin/Contact')
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div className="absolute w-[340px] h-[457px] top-[170px] left-[135px] bg-primary rounded-[4px] overflow-hidden shadow-categogy-5">
            <div className="inline-flex flex-col items-start gap-[32px] relative top-[40px] left-[35px]">
              <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                  <FaSquarePhone className="!relative !w-[40px] !h-[40px]" />
                  <div className="relative w-fit font-title-16px-medium font-[number:var(--title-16px-medium-font-weight)] text-black text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap [font-style:var(--title-16px-medium-font-style)]">
                    Call To Us
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                  <p className="relative w-[262px] mt-[-1.00px] font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-2 text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                    We are available 24/7, 7 days a week.
                  </p>
                  <div className="relative w-fit font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-2 text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap [font-style:var(--title-14px-regular-font-style)]">
                    Phone: +8801611112222
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                  <GoMail className="!relative !w-[40px] !h-[40px] fill-red" />
                  <div className="relative w-fit font-title-16px-medium font-[number:var(--title-16px-medium-font-weight)] text-black text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap [font-style:var(--title-16px-medium-font-style)]">
                    Write To US
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                  <p className="relative w-[250px] mt-[-1.00px] font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-2 text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <div className="relative w-fit font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-2 text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap [font-style:var(--title-14px-regular-font-style)]">
                    Emails: customer@exclusive.com
                  </div>
                  <div className="relative w-fit font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-2 text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap [font-style:var(--title-14px-regular-font-style)]">
                    Emails: support@exclusive.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact;
