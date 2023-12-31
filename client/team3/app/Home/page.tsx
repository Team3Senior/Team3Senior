
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
  
  
const addWish=(product:{Name:string,Price:number})=>{
const wished={
  NameWish:product.Name,
  WishPrice:product.Price,
 
}
axios.post("http://localhost:3000/api/wish/addwish",wished).then((result:any)=>{
  console.log('added with success!',result.data)
}).catch((error:any)=>{
  console.log(error)
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
      {All.map((All,i)=>(
        <div key={i} className=''>
          <div className='w-80 h-72 bg-gray mt-10 flex-wrap'
          onMouseEnter={()=>{setShowAddToCart(!showAddToCart)
            setIndex(i)}}
          onMouseLeave={()=>{setShowAddToCart(!showAddToCart)
          setIndex(-1)}}>
          <div className=' top-full left-0 w-20 rounded h-8 bg-red flex justify-center items-center text-white '>-{All.Discount}%</div>
          <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center float-right'><FaRegHeart onClick={()=>{addWish(All)}} size={20}/> </div>
          <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center float-right'><MdOutlineRemoveRedEye size={20}/></div>
          {index===i&&showAddToCart&&<button style={{'margin-top': '214px'}} className='cursor-pointer w-80 h-11 bg-black text-white flex justify-center items-center absolute' onClick={()=>{addCart({NameCart:All.Name,CartImage:All.ProductImage,Price:All.Price,Quantity:All.Quantity,userUserID:2})}} >Add To Cart</button>}
            <Link href={'/SingleProducts'}><img className=' w-40' src={All.ProductImage} alt="no-content" /></Link>
            
          </div>
          <h1>{All.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>${All.Price}</h1><h1 className='text-gray-300 line-through	'>{(All.Price / (1 - All.Discount/ 100)).toFixed(2)}</h1>
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

