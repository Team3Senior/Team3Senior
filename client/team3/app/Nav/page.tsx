"use client"
import { useState ,useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Logout from '../Logout';
import axios from 'axios';
import { useCartStore } from '../stores/CartStore';


const Nav: React.FC = (props:{}) => {
  const router = useRouter()
  console.log(router);
  const userId = localStorage.getItem('userId');
  const [cartData, setCartData] =  useState<[]>([]);
  const [searchValue, setSearchValue] = useState<String>('');
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(cartData.length); 
  const cartStore = useCartStore();
  useEffect(() => {
    axios.get(`http://localhost:3000/api/cart/UserCart/${userId}`)
      .then((response) => {
        console.log('houss', response.data);
        setCartData(response.data);
       
      })
      .catch((error) => console.log(error));
  }, [])
  
  const handleSearch = () => {
    console.log('Search value:', searchValue);
    router.push('/AllProducts');
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className='w-full bg-white z-10'>
      <nav>
        <div className='flex items-center justify-center gap-2 h-16 bg-black text-white'>
          <h3 className='text-sm md:text-base'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h3>
          <span className='text-base underline cursor-pointer ml-11'>Shop Now!</span>
          <select name='language' className='text-white bg-black'>
            <option>English</option>
          </select>
        </div>
        <div className='flex justify-center gap-8 mt-11 mb-6 ml-20'>
          <h1 className='absolute left-10 font-bold text-3xl mb-7 mr-36'>ℰ-ℳ𝒶𝓁𝓁 🛒</h1>
  
          <Link href='../Home'>Home</Link>
          <Link href='../Contact'>Contact</Link>
          <Link href='../AboutUS'>AboutUs</Link>
          <Link href='../Signup'><p style={{ marginRight: '5%' }}>Sign Up</p></Link>
     
          <div className='w-auto h-8 flex items-center gap-16 right-10 ml-10'>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              type='search'
              placeholder='What are you looking for?'
              className='bg-gray-200 p-2 text-xs rounded w-56 h-9'
            />
            <IoSearchOutline
              onClick={handleSearch}
              size={25}
              className='cursor-pointer'
            />
            <FaRegHeart  onClick={() => navigateTo('/wishlist')}  size={25} />
            <div className='w-5 h-5 bg-red-500 rounded-full flex justify-center items-center text-white'>
              {cartStore.cart.length}
            </div>
            <AiOutlineShoppingCart
              className='cursor-pointer'
              size={25}
              onClick={() => navigateTo('/cart')}
            /><div className="userDropdown">
             {userId ? <img className="w-12 h-10 relative right-[-10px]" src="https://images-ext-1.discordapp.net/external/XjoCJLwMNJQrMq0DTYawsY9vY5xN64W8eyoIOoLqT1k/https/cdn-icons-png.flaticon.com/512/149/149071.png?format=webp&quality=lossless&width=581&height=581" alt=""/> : "" } 
            {/* {showAccount && <AccountDropDown />}  */}
            </div>
            
            <Logout/>
            
          </div>
        </div>
      </nav>
      <hr className='text-gray-300' />
    </div>
  );
};

export default Nav;