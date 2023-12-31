
"use client"

import Footer from "../Footer/page";
import Nav from "../Nav/page";
import { ElementError } from "../NotFound/page";
import React, { useState, useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import axios from "axios"
import Link from 'next/link'; 
const Product: React.FC = () => {
  const [All, setAll] = useState<any[]>([]);
  const [showAddToCart, setShowAddToCart] = useState<boolean>(false);
const [index, setIndex] = useState<number>(-1);
const [img,setImg] =useState('')
  const[name,setName] = useState('')
  const [counter, setCounter] = useState<number>(0); 
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products/allProducts');
        if (!response.ok) {
          throw new Error('Error fetching all products');
        }
        const data = await response.json();
        setAll(data);
        
       
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  
  const addCart=(obj:object)=>{
    setCounter(counter+1)
    axios.post("http://localhost:3000/api/cart/addCart",obj)
    .then((res)=>{console.log(res)})
    .catch((err)=>console.log(err))

  }
  
  
const addWished=(product:{NameWish:string,Price:number})=>{
  console.log('function addwish working')
const wished={
  NameWish:product.NameWish,
  WishPrice:product.Price,
  userUserID:2
}
axios.post("http://localhost:3000/api/wish/addwish",wished).then((results:any)=>{
  console.log(results.data)
}).catch((err:any)=>{
  console.log(err)
})
}




return (
    <>

    <div  className='mr-10 ml-10 mb-20 gap-7'>
      <Nav   />
          <h1 className='text-gray-300'>
          Home / <span className='text-black'> AllProducts</span>
        </h1>
      <div className='flex  gap-4 flex-wrap shadow-sm'>
      {All.map((all,i)=>(
        <div key={i} className=''>
          <div className='w-80 h-72 bg-gray mt-10 flex-wrap'
          onMouseEnter={()=>{setShowAddToCart(!showAddToCart)
            setIndex(i)}}
          onMouseLeave={()=>{setShowAddToCart(!showAddToCart)
          setIndex(-1)}}>
          <div className=' top-full left-0 w-20 rounded h-8 bg-red flex justify-center items-center text-white '>-{all.Discount}%</div>
          <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center float-right'><FaRegHeart onClick={()=>{addWished(all)}} size={20}/> </div>
          <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center float-right'><MdOutlineRemoveRedEye size={20}/></div>
          {index===i&&showAddToCart&&<button style={{'margin-top': '214px'}} className='cursor-pointer w-80 h-11 bg-black text-white flex justify-center items-center absolute' onClick={()=>{addCart({NameCart:all.Name,CartImage:all.ProductImage,Price:all.Price,Quantity:all.Quantity,userUserID:2})}} >Add To Cart</button>}
            <Link href={'/SingleProducts'}><img className=' w-40' src={all.ProductImage} alt="no-content" /></Link>
            
          </div>
          <h1>{all.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>${all.Price}</h1><h1 className='text-gray-300 line-through	'>{(all.Price / (1 - all.Discount/ 100)).toFixed(2)}</h1>
         </div>
        </div>
      ))}
        
      </div>
    
<Footer/>
    </div>

    </>
  )
}

export default Product;

