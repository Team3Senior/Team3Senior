"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img from "../Image/high.png"
import { useRouter } from 'next/navigation';

const BestSellingProducts = ({ refresh, setRefresh }: { refresh: boolean; setRefresh: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products/allProducts');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
        
      } catch (error) {
        console.error('Error fetching data');
      }
    };

    fetchData();
  }, []);
  console.log(data)

  return (
    <div className="ml-10">
      <div className="mb-10">
        <div className="w-5 h-10 bg-red rounded"></div>
        <h1 className="text-red absolute left-16 -mt-8 font-bold ">This Month</h1>
        <div className="grid grid-cols-2 mb-20">
          <h1 className="text-5xl font-medium mt-10">Best Selling Products</h1>
          <button
            onClick={() => {
              router.push('/AllProducts');
              setRefresh(!refresh);
            }}
            className="absolute right-60 mt-8 text-white bg-red w-32 h-12"
          >
            View All
          </button>
        </div>
      </div>
      <div className="flex gap-6">
        {data.map((e, index) => (
          <div key={index}>
            <div className="w-80 h-72 bg-gray flex justify-center items-center mt-11">
              <img src={e.ProductImage[0]?e.ProductImage[0]:e.ProductImage} alt="" width={160} height={160} />
            </div>
            <h1>{e.Name}</h1>
            <div className="flex gap-4">
              <h1 className="text-red">${e.Price}</h1>
              <h1 className="text-gray-300 line-through">$360</h1>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '26%',
          marginLeft: '19%',
          width: '10%',
          height: '7%',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}
        className="absolute w-28 h-20 bg-gray"
      ></div>
      <br/><br/><br/>
      <center>
      <Image src={img} alt="" width={1200} height={1500} />
      </center>
    </div>
  );
};

export default BestSellingProducts;
