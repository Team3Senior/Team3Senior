"use client"
import Nav from "../Nav/page";
import React,{useEffect,useState} from "react";
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoIosPhonePortrait } from 'react-icons/io';
import { CiHeadphones } from 'react-icons/ci';
import { BsSmartwatch } from 'react-icons/bs';
import { IoCameraOutline } from 'react-icons/io5';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { SiYoutubegaming } from 'react-icons/si';
import Image from 'next/image';
import img from "../Image/high.png"
import { log } from "console";
import { useCartStore } from "../stores/CartStore";
const Home: React.FC = () => {
  const cartStore = useCartStore();
  const [products, setProducts] = useState<any[]>([]);
  const [showAddToCart, setShowAddToCart] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const [exp, setExp] = useState<any[]>([]);
  const [flash, setFlash] = useState<any[]>([]);
  const [change, setChange] = useState(false);
  const [index1, setIndex1] = useState(1);
  const [best,setBest]=useState([]);
  const userId = localStorage.getItem('userId');
   const router = useRouter();
  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/allProducts`)
      .then(r => {
        setProducts(r.data);
        console.log(r.data);
        let d = r.data.filter(e => {
          return e.Discount;
        });
        setFlash(d);
        setExp(r.data.slice(0, 8));
        setBest(d.slice(2))
      })
      .catch(err => console.log(err));
  }, []);

  const addCart = (obj: object) => {
    cartStore.setCart([...cartStore.cart, obj]);
    axios.post("http://localhost:3000/api/cart/addCart", obj)
      .then((res) => { console.log(res); })
      .catch((err) => console.log(err));
  };
const addWished=(wished:any)=>{
  console.log("add to wishlist working fine!")
const toWishlist={
  NameWish:wished.Name,
  WishPrice:wished.Price,
  userUserID:userId
}
axios.post("http://localhost:3000/api/wish/addwish",toWishlist).then((result)=>{
  console.log(result.data)
}).catch((err)=>{console.log(err.message)})
}
  return(
    <>
<Nav/>




<div>
<hr className='text-gray-300'/>
<hr className='text-gray-300'/>
           <div className=' flex justify-start m-11 gap-32 mt-40'>
           <div id="unique">
           <p><h1>women's fashion</h1></p>
           <p><h1>men's fashion</h1></p>
           <p ><h1>Electronics</h1></p>
           <p><h1>Home & LifeStyle</h1></p>
           <p><h1>Medecine</h1></p>
           <p><h1>Sports & Outdoor</h1></p>
           <p><h1>Baby's & Toys</h1></p>
           <p><h1>Groceries & Pets</h1></p>
           <p><h1>Health & Beauty</h1></p>
           </div>
           <div className=' w-4/5 h-96 bg-black grid grid-cols-2'>
            <div className='flex items-center ml-32'>
            <div className='grid gap-8'>
            <span>
            <h1 className='text-white float-right text-2xl ml-4 mt-3'>iPhone 14 Series</h1>
            <img className=' w-12 overflow-hidden' src="data:image/png;base64,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" alt="" />
            </span>
            <h1 className='text-5xl text-white	'>Up to 10%<br/> of Voucher</h1>
            </div>
            <button id='button-home' className='text-white absolute underline'>Shop Now</button>
            <FaArrowRight id='arrow-id' color='white' size={25}/>
            </div>
            <img className=' w-full' src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_810,w_1440,x_0,y_0/dpr_2.0/c_limit,w_600/f_jpg/fl_lossy,q_auto/v1663274763/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large_zkrjt9" alt="" />
           </div>
           </div>
           <hr id="hr-unique" className=' rotate-90 w-96 absolute top-16 text-gray-300'/>
           </div>




<div>
<div className='ml-10'>
    <div className='mb-10'>
    <div className=' w-5 h-10 bg-red rounded'></div>
    <h1 className='text-red absolute left-16 -mt-8 font-bold'>Today's</h1>
    </div>
    <div className='grid grid-cols-2'>
    <h1 className='text-5xl font-medium '>Flash Sales</h1>
    <div className=' w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-14'><FaArrowLeft /></div>
    <div className='w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-0' ><FaArrowRight /></div>
    
    </div>
    <div style={{}}  id="div-div" className='flex gap-7 overflow-auto'>
      {flash.map((el,i)=>(
        <div  >
        <div className='w-80 h-72 bg-gray mt-10 flex-wrap'
          onMouseEnter={()=>{setShowAddToCart(!showAddToCart)
            setIndex(i)}}
          onMouseLeave={()=>{setShowAddToCart(!showAddToCart)
          setIndex(-1)}}>
          <div className=' top-full left-0 w-20 rounded h-8 bg-red flex justify-center items-center text-black '>-{el.Discount}%</div>
          <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center float-right'><FaRegHeart onClick={()=>{addWished(el)}}size={20}/> </div>
          <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center float-right'><MdOutlineRemoveRedEye size={20}/></div>
          {index === i && showAddToCart && (
          <button
            className="cursor-pointer w-80 h-11 bg-black text-white flex justify-center items-center absolute mt-56"
            onClick={() =>{
              addCart({
                NameCart: el.Name,
                CartImage: el.ProductImage,
                Price: el.Price,
                Quantity: el.Quantity,
                userUserID: userId,
              })
            }}
          >
            Add To Cart
          </button>
        )}          <Link href={`/ProductDetails/${el.ProductID}`} ><img className=' w-40' src={el.ProductImage[0]?el.ProductImage[0]:el.ProductImage} alt="" onClick={()=>{
            }} /></Link>
            
          </div>
          <h1>{el.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>${el.Price}</h1><h1 className='text-gray-300 line-through	'>{(el.Price / (1 - el.Discount/ 100)).toFixed(2)}</h1>
         </div>
   
         </div>
                ))}
                 </div>
                 <div style={{'margin-left':'40%','margin-bottom':'10%'}} className='flex justify-center items-center w-80 h-16 bg-red mt-16 '>
         <Link href='/Product' > <h1 onClick={()=>{}} className='text-white cursor-pointer' > View el Products</h1>   </Link>
        </div>
      <hr className='w-5/6 ml-20 text-gray-300 mb-32'/>
    </div>
    </div>
 



    <div>
    <div className="ml-10">
      <div className="mb-10">
        <div className="w-5 h-10 bg-red rounded"></div>
        <h1 className="text-red absolute left-16 -mt-8 font-bold">Categories</h1>
      </div>
      <h1 className="text-5xl font-medium mb-20">Browse By Category</h1>
      <div
        onClick={() => {
          setChange(true);
          setIndex1(index1 - 1);
        }}
        style={{ top: '219%' }}
        className="w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-14"
      >
        <FaArrowLeft />
      </div>
      <div
        onClick={() => {
          setChange(true);
          setIndex1(index1 + 1);
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
          
            style={{ background: change && index1 === idx + 1 ? '#db4444' : 'white' }}
            className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20"
            onClick={() => {
              setChange(true);
              setIndex1(idx + 1);
            }}
          >
            <div>
              {(() => {
                switch (category) {
                  case 'Phones':
                    return <IoIosPhonePortrait size={90} style={{ color: change && index1 === idx + 1 ? 'white' : 'black' }} />;
                  case 'HeadPhones':
                    return <CiHeadphones size={90} style={{ color: change && index1 === idx + 1 ? 'white' : 'black' }} />;
                  case 'SmartWatch':
                    return <BsSmartwatch size={90} style={{ color: change && index1 === idx + 1 ? 'white' : 'black' }} />;
                  case 'Camera':
                    return <IoCameraOutline size={90} style={{ color: change && index1 === idx + 1 ? 'white' : 'black' }} />;
                  case 'Computers':
                    return (
                      <HiOutlineComputerDesktop size={90} style={{ color: change && index1 === idx + 1 ? 'white' : 'black' }} />
                    );
                  case 'Gaming':
                    return <SiYoutubegaming size={90} style={{ color: change && index1 === idx + 1 ? 'white' : 'black' }} />;
                  default:
                    return null;
                }
              })()}
              <h1 className="ml-5" style={{ color: change && index1 === idx + 1 ? 'white' : 'black' }}>
                {category}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <hr className="text-gray-300 w-5/6 mb-14" />
    </div>
    </div>





<div>
<div className="ml-10">
      <div className="mb-10">
        <div className="w-5 h-10 bg-red rounded"></div>
        <h1 className="text-red absolute left-16 -mt-8 font-bold ">This Month</h1>
        <div className="grid grid-cols-2 mb-20">
          <h1 className="text-5xl font-medium mt-10">Best Selling Products</h1>
          <button
            onClick={() => {
              router.push('/Product');
              
            }}
            className="absolute right-60 mt-8 text-red  w-32 h-12"
          >
            View All
          </button>
        </div>
      </div>
      <div className="flex gap-6">
        {best.map((e, index) => (
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

</div>





<div>
<div>
        <div className='ml-10'>
         <div className=' mb-10'>
    <div className=' w-5 h-10 bg-red rounded'></div>
    <h1 className='text-red absolute left-16 -mt-8 font-bold '>Our Products</h1>
    <div className='grid grid-cols-2 mb-20'>
    <h1 className='text-5xl font-medium mt-10'>Explore Our Products</h1>
    <Link href='/Product'><button className='absolute right-60 mt-8 text-white bg-red w-32 h-12'>View All</button></Link>
    </div>
    </div>
    <div className='flex gap-6 flex-wrap'>
      {exp.map((el,i)=>(
       <div className='w-80 h-72 bg-gray flex justify-center items-center mt-11'>
       <div>
       <img className=' w-32 ' src={el.ProductImage[0]?el.ProductImage[0]:el.ProductImage} alt="" />
       <h1>{el.Name}</h1>
        <div className='flex gap-4'>
        <h1 className='text-red'>${el.Price}</h1>
        </div>
        </div>
        </div>
    )
    )}   
        </div>
    </div>
    </div>
    </div>





    <div>
    <div className='ml-80 grid grid-cols-3 '>
        <div>
        <img className='rounded-full w-40 ml-4' src="https://st.depositphotos.com/27392032/60952/i/450/depositphotos_609525608-stock-photo-fast-shipping-delivery-truck-icon.jpg" alt="" />
        <h1 className='font-bold text-lg'>FREE AND FAST DELIVERY</h1>
        <h3 className='-ml-2'>Free delivery for all orders over $140</h3>
        </div>
        <div>
        <img className='rounded-full w-28 ml-4 mt-12' src="https://static.thenounproject.com/png/4074783-200.png" alt="" />
        <h1 className='font-bold text-lg'>24/7 CUSTOMER SERVICE</h1>
        <h3 className='-ml-2'>Friendly 24/7 customer support</h3>
        </div>
        <div>
            <img className='rounded-full w-28 ml-4 mt-12' src="https://cdn-icons-png.flaticon.com/512/95/95454.png" alt="" />
            <h1 className='font-bold text-lg'>24/7 CUSTOMER SERVICE</h1>
        <h3 className='-ml-2'>Friendly 24/7 customer support</h3>
        </div>
    </div>
    </div>
</>
  );
}
export default Home;