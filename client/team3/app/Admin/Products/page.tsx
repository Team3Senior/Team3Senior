"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../../Footer/page";
import { IoSearchOutline } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface Product {
  ProductID: number;
  Name: string;
  ProductImage: string;
  Price: number;
  Discount: number;
}

const AdminProducts = () => {
  const [adminData, setAdminData] = useState<Product[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products/allProducts");
      const data = await res.json();
      setAdminData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

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

  const modify = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/products/updateProd/${id}`, {
        method: "PUT",
      });
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex grid grid-cols-3 gap-4 overflow-hidden shadow-2xl">
        {adminData.map((el) => (
          <div key={el.ProductID} className="">
            <div className="w-80 h-72 flex justify-center items-center mt-11">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                <button onClick={() => modify(el.ProductID)}>
                  <GrUpdate size={20} />
                </button>
              </div>
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                <button onClick={() => deleteProd(el.ProductID)}>
                  <MdOutlineRemoveRedEye size={20} />
                </button>
              </div>

              <img className="w-40" src={el.ProductImage[0]} alt="" />
            </div>

            <h1>{el.Name}</h1>
            <div className="flex gap-4">
              <h1 className="text-red">${el.Price}</h1>
              <h1 className="text-gray-300 line-through">
                ${(el.Price / (1 - el.Discount / 100)).toFixed(2)}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
