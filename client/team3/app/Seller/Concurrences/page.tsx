'use Client'
import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Link from 'next/link';



interface product {
    ProductID: number;
    Name: string;
    ProductImage: string;
    Price: number;
    Discount: number;
  }

const Concurrence = () => {

const [prods,setProds] = useState<product[]>([])


const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products/allProducts");
      const data = await res.json();
      setProds(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='ml-10'>
    <div className='mb-10'>
    <div className=' w-5 h-10 bg-red rounded'></div>
    <h1 className='text-red absolute left-16 -mt-8 font-bold'>In Same Context</h1>
    </div>
    <div className='grid grid-cols-2'>
    <h1 className='text-5xl font-medium '>Concurrence</h1>
    <div className=' w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-14'><FaArrowLeft /></div>
    <div className='w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-0'><FaArrowRight /></div>
    </div>
    <div className='flex gap-7 overflow-hidden'>
    {prods.map((el,i)=>(
      <div key = {i} className=''>
      <div className='w-80 h-72 bg-gray flex justify-center items-center mt-11'>
      <div>
                         
        <div className=' top-full left-0  w-20 rounded h-8 bg-red-500 flex justify-center items-center text-white'>-{el.Discount}%</div>
        <div>
        <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center'><FaRegHeart size={20}/></div> 
        <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center'><MdOutlineRemoveRedEye size={20}/></div>

        </div>
        <img className=' w-40 ' src={el.ProductImage} alt="" />
        </div>

  
         </div>
         <br/>
         <br/>
         <h1>{el.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>${el.Price}</h1><h1 className='text-gray-300 line-through	'>$9720</h1>
         </div>
         </div>
    ))
    
        }
        </div>
        <div  className='flex justify-center items-center w-80 h-16 bg-red mt-16 '>
         <Link href='/AllProducts'> <h1 className='text-white cursor-pointer' > View All Concurrences</h1> </Link>
        </div>
      <hr className='w-5/6 ml-20 text-gray-300 mb-32'/>
        
   
    </div>
   
  )
}

export default Concurrence;