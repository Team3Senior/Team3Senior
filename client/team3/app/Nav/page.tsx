"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const Nav: React.FC = () => {
  const router = useRouter()
  console.log(router);
  
  const [searchValue, setSearchValue] = useState<String>('');
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0); 

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
          <Link href='/'><p style={{ marginRight: '5%' }}>Sign Up</p></Link>
     
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
            <FaRegHeart size={25} />
            <div className='w-5 h-5 bg-red-500 rounded-full flex justify-center items-center text-white'>
              {counter}
            </div>
            <AiOutlineShoppingCart
              className='cursor-pointer'
              size={25}
              onClick={() => navigateTo('/cart')}
            />
            <CgProfile size={25} onClick={() => setShowAccount(!showAccount)} />
             {/*showAccount && <AccountDropDown />*/}  
          </div>
        </div>
      </nav>
      <hr className='text-gray-300' />
    </div>
  );
};

export default Nav;