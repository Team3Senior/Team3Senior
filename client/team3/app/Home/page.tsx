"use client"
import React, { useState } from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CiHeadphones } from 'react-icons/ci';
import { BsSmartwatch } from 'react-icons/bs';
import { IoCameraOutline } from 'react-icons/io5';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { SiYoutubegaming } from 'react-icons/si';


const BrowseCategory = ({ handlerFunction }: { handlerFunction: (category: string) => void }) => {
 

  const [change, setChange] = useState(false);
  const [index, setIndex] = useState(1);

  return (
    <div className="ml-10">
      <div className="mb-10">
        <div className="w-5 h-10 bg-red rounded"></div>
        <h1 className="text-red absolute left-16 -mt-8 font-bold">Categories</h1>
      </div>
      <h1 className="text-5xl font-medium mb-20">Browse By Category</h1>
      <div
        onClick={() => {
          setChange(true);
          setIndex(index - 1);
        }}
        style={{ top: '219%' }}
        className="w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-14"
      >
        <FaArrowLeft />
      </div>
      <div
        onClick={() => {
          setChange(true);
          setIndex(index + 1);
        }}
        style={{ top: '219%' }}
        className="w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-0"
      >
        <FaArrowRight />
      </div>

      <div className="flex gap-6">
        {['Phones', 'HeadPhones', 'SmartWatch', 'Camera', 'Computers', 'Gaming'].map((category, idx) => (
          <div
            key={idx}
            tabIndex={idx}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handlerFunction(category);
              }
            }}
            style={{ background: change && index === idx + 1 ? '#db4444' : 'white' }}
            className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20"
            onClick={() => {
              setChange(true);
              setIndex(idx + 1);
            }}
          >
            <div>
              {(() => {
                switch (category) {
                  case 'Phones':
                    return <IoIosPhonePortrait size={90} style={{ color: change && index === idx + 1 ? 'white' : 'black' }} />;
                  case 'HeadPhones':
                    return <CiHeadphones size={90} style={{ color: change && index === idx + 1 ? 'white' : 'black' }} />;
                  case 'SmartWatch':
                    return <BsSmartwatch size={90} style={{ color: change && index === idx + 1 ? 'white' : 'black' }} />;
                  case 'Camera':
                    return <IoCameraOutline size={90} style={{ color: change && index === idx + 1 ? 'white' : 'black' }} />;
                  case 'Computers':
                    return (
                      <HiOutlineComputerDesktop size={90} style={{ color: change && index === idx + 1 ? 'white' : 'black' }} />
                    );
                  case 'Gaming':
                    return <SiYoutubegaming size={90} style={{ color: change && index === idx + 1 ? 'white' : 'black' }} />;
                  default:
                    return null;
                }
              })()}
              <h1 className="ml-5" style={{ color: change && index === idx + 1 ? 'white' : 'black' }}>
                {category}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <hr className="text-gray-300 w-5/6 mb-14" />
    </div>
  );
};

export default BrowseCategory;


