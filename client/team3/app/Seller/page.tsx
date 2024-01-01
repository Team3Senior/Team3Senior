'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import Footer from '../Footer/page'
// import BrowseCategory from './BrowseCategory';
import { CgProfile } from "react-icons/cg";
import Concurrences from './Concurrences/page';
// import AccountDropDown from './AccountDropDown';


const Seller = () => {

    // const[s,setS]=useState<boolean>(false)

  return (
    
    <div>
   
 <img className='w-full h-96' src='https://www.business2community.com/wp-content/uploads/2020/11/ecommerce-2140603_1920-1.jpg'/>
<div className='my-40'>
<Concurrences/>
</div>
<div className='my-40'>
{/* <BrowseCategory /></div> */}

</div>
</div>

  )

}

export default Seller;