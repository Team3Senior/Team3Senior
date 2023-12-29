"use client"
import React,{useEffect, useState} from 'react';
import Link from 'next/link';
import Footer from '../../Footer/page'
import { IoSearchOutline } from "react-icons/io5";
import DeleteIcon from '@mui/icons-material/Delete';

interface Client {
    UserID: number;
    FirstName: string;
    LastName: string;
    Email: string;
  }
  
  const AdminClients = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
  
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/users/clients');
        const data = await res.json();
        setClients(data);
      } catch (err) {
        console.error(err);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [refresh]);
  
    const deleteClient = async (userId: number) => {
      try {
        await fetch(`http://localhost:3000/api/users/deleteUser/${userId}`, {
          method: 'DELETE',
        });
        setRefresh(!refresh);
      } catch (err) {
        console.error(err);
      }
    };
  
    return (
      <div>
        <nav>
          <div className="flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center">
            <Link href="/admin">Administration</Link>
            <Link href="/Admin/AdminClient">Clients</Link>
            <Link href="../AdminSeller">Sellers</Link>
            <Link href="/adminCategories">Categories</Link>
            <Link href="/adminProducts">Products</Link>
            <div>
              <input
                type="search"
                placeholder="What are you looking for?"
                className="bg-gray-200 p-2 text-xs rounded w-56 h-9 right-36"
              />
              <IoSearchOutline size={25} className="absolute right-10 top-7" />
            </div>
          </div>
        </nav>
        <div>
          <div className="grid grid-cols-3 mx-44 justify-center my-40 bg-white gap-40 items-center text-center rounded-s align-middle">
            {clients.map((el) => (
              <div key={el.UserID} className="flex-wrap mb-6 hover:box-content -mt-28 mr-60 shadow-2xl border-black border rounded w-60">
                <h1 className="font-bold">{el.FirstName}</h1>
                <h1>{el.LastName}</h1>
                <h1>{el.Email}</h1>
                <button className="bg-red text-white rounded w-40 h-9 my-5"> Send an email </button>
                <br />
                <DeleteIcon onClick={() => deleteClient(el.UserID)} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default AdminClients;