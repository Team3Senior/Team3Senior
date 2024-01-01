import React,{useState} from 'react'
import Navbar from '../Nav/page'
import Footer from '../Footer/page'


interface wish {
    NameWish : string;
    WishPrice : number;
    WishImage : string;
   }


const WishList = (userID :number) => {
    const[wishes,setWishes]=useState<wish[]>([])
    console.log(userID);


const fetchWishes = async (userID : number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/wish/getwishes/${userID}`);
      const tempData = await response.json();
      setWishes(tempData)
    } catch (error) {console.error(error)}
  };


  return (
    <div>
        <Navbar/>
        <h1 className='text-gray-300 ml-20 mt-10'>
          Home / <span className='text-black'> WishList</span>
        </h1>
        <div className='mb-20 mt-[35px] ml-20 shadow-md rounded w-5/6 h-20 bg-white flex items-center justify-center gap-96'>
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Image</h1>
        </div>
           

        {wishes.length&&wishes.map((e,i)=>(
                    <div className='mb-20 mt-28 ml-20 shadow-md rounded w-5/6 h-20 bg-white flex items-center justify-center gap-96'>

     
        <h1>{e.NameWish}</h1>
        <h1>{e.WishPrice}$</h1>
        <img className='w-20 mb-10 mr-10' src={e.WishImage} alt="" />
       
        </div>

        ))}

        <Footer/>
    </div>
  )
}

export default WishList