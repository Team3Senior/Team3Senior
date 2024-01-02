"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link";
import { CgProfile } from 'react-icons/cg';
import { FaRegHeart } from "react-icons/fa6";
import { setRef } from '@mui/material';
import { IoSearchOutline } from "react-icons/io5";
import DeleteIcon from "@mui/icons-material/Delete";
interface Product {
  id: string;
  ProductID: string;
  ProductImage: string;
  Name: string;
  Description: string;
  Price: number;
  Availability: string;
  Quantity: number;
  Discount: number;
  Color: string;
  Size: string;
  userID: number;
}



const AllmySales: React.FC<Product> = ({ userID }) => {
  const [allSales, setAllSales] = useState<Product[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [show, setShow] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [availability, setAvailability] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [color, setColor] = useState<string>('');
  const [size, setSize] = useState<string>('');

  console.log('monji', userID);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/prodsOfUser/2`);
      const data = await res.json();
      setAllSales(data);

    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [refresh]);



  const updated : any = {
    Name: name,
    Description: description,
    Price: price,
    Availability: availability,
    Quantity: quantity,
    Discount: discount,
    Color: color,
    Size: size,
  };

  console.log('allsalrs', allSales);


 
  const deleteProd = async (productID: number) => {
    try {
      await fetch(
        `http://localhost:3000/api/products/deleteProd/${productID}`,
        {
          method: "DELETE",
        }
      );
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };


  const updateProd = async (id: number,prod : Product) => {
    try {
      await fetch(`http://localhost:3000/api/products/updateProd/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prod),
      });
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <div className='flex items-center gap-2 h-10 bg-black text-white justify-center align-middle'>
          <h3 className='text-'>Make Discount on your sales and win Gold Coupon </h3>
        </div>
        <div className='flex justify-center gap-8 mt-11 mb-6'>
          <Link href={'/Seller'}>Home</Link>
          <Link href={'/ContactAdmin'}>Contact Administration</Link>
          <Link href={'/Addforsale'}>Add For Sale</Link>
          <Link href={'/Allmysales'}>All My Sales </Link>

          <div className='w-auto h-8 flex float-right gap-16 absolute right-10 top-20'>
            <CgProfile size={25} />
          </div>
        </div>
      </div>

      <div className='mr-10 ml-10 mb-20 gap-7'>
        <h1 className='text-gray-300'>
          Home / <span className='text-black'> AllProducts</span>
        </h1>

        <div className='grid grid-cols-3 gap-4 overflow-hidden shadow-sm'>
          {allSales.map((el, i) => (
            <div key={i} className=''>
              {el.ProductImage[0]}
              <div className='w-80 h-72 bg-gray mt-10 flex-wrap'>
                {el.Discount ? <div className=' top-full left-0 w-20 rounded h-8 bg-red flex justify-center items-center text-white '>-{el.Discount}%</div> : ''}
                <img className=' w-50 h-52 ml-16 ' src={el.ProductImage} alt="" />

                <div>{el.Availability === 'In Stock' ? <h1 className=' font-semibold text-lime-600 my-3' style={{ 'color': 'green' }}> In Stock </h1> : <h1 className='text-red'> Out of Stock </h1>}</div>

              </div>
              <h1>{el.Name}</h1>
              <div className='flex gap-4'>
                <h1 className='text-red'>${el.Price}</h1><h1 className='text-gray-800 line-through	'>{(el.Price / (1 - el.Discount / 100)).toFixed(2)}</h1>

              </div>
              <button className="hover:shadow-lg hover:text-red px-6 py-3 mb-1 mr-1 text-sm font-bold text-black bg-white uppercase rounded shadow "
                type="button" onClick={() => { deleteProd(Number(el.ProductID)) }}> Delete </button>
              <button className="hover:shadow-lg hover:text-red px-6 py-3 mb-1 mr-1 text-sm font-bold text-black bg-white uppercase rounded shadow "
                type="button" onClick={() => { setShow(show === el.ProductID ? null : el.ProductID) }}> Update</button>
              <div>{show === el.ProductID &&
                <div className='border'>
                  <div className="pt-0 mb-3 my-10">
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
                      required
                      onChange={(e) => { setName(e.target.value) }}
                    />
                  </div>
                  <div className="pt-0 mb-3 ">
                    <input
                      type='number'
                      placeholder="Quantity to put in stock"
                      className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
                      onChange={(e) => { setQuantity(Number(e.target.value)) }}
                    />
                  </div>
                  <div className="pt-0 mb-3 ">
                    <input
                      type='number'
                      placeholder="Product unit Price"
                      className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
                      onChange={(e) => { setPrice(Number(e.target.value)) }}
                    />
                  </div>

                  <div className="pt-0 mb-3 ">
                    <input
                      type='number'
                      placeholder="Product Discount"
                      className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
                      onChange={(e) => { setDiscount(Number(e.target.value)) }}
                    />
                  </div>
                  <div className="pt-0 mb-3 ">
                    <input
                      type="text"
                      placeholder="Product Color"
                      className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
                      onChange={(e) => { setColor(e.target.value) }}
                    />
                  </div>
                  <div className="pt-0 mb-3 ">
                    <input
                      type="text"
                      placeholder="Product Size"
                      className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
                      onChange={(e) => { setSize(e.target.value) }}
                    />
                  </div>
                  <div className="pt-0 mb-3 ">
                    <fieldset>
                      <div className='flex items-center w-full gap-8'>
                        <div>
                          <input type="checkbox" name="In Stock" value="In Stock" onChange={() => { setAvailability('In Stock') }} />
                          <label htmlFor="In Stock">In Stock</label>
                        </div>

                        <div>
                          <input type="checkbox" id="Out of Stock" value="Out of Stock" name="Out of Stock for now" onChange={() => { setAvailability("Out Of Stock") }} />
                          <label htmlFor="Out of Stock">Out of Stock</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="pt-0 mb-3">
                    <textarea
                      placeholder="Description"
                      className="relative w-full h-24 px-3 py-3 text-sm text-red-600 placeholder-gray-400 bg-gray border-0 rounded shadow"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <button className='hover:shadow-lg hover:bg-white px-6 py-3 mb-1 mr-1 text-sm font-bold text-black bg-red uppercase rounded shadow'
                    onClick={() => { updateProd(Number(el.ProductID), updated); setShow(null) }}> Validate </button>
                </div>
              }</div>
            </div>
          ))}

        </div>
      </div>

      
    </>
  );
};

export default AllmySales;