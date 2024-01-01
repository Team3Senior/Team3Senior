import React from "react"
import next from "next"
import Link from "next/link"
export default function AdminLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav >
        
        <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
         
          <Link href='/Seller' > Home </Link>
        <Link href='/Seller/ContactAdmin'>Contact Administration </Link>
        <Link href='/Seller/AddForSale'> Add For Sale </Link>
        <Link href='/Seller/AllMySales'>All my Sales </Link>
        <div>
        <input type="search"
            placeholder='What are you looking for?'
            className='bg-gray-200 p-2 text-xs rounded w-56 h-9 right-36'/>
              {/* <IoSearchOutline size={25} className='absolute right-10 top-7'/> */}
        </div>
        </div>
       </nav>
{children}
      </section>
    )
  }