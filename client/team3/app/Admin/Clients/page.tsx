"use client";
import React, { useEffect, useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

import { IoSearchOutline } from "react-icons/io5";
import DeleteIcon from "@mui/icons-material/Delete";
import { setRef } from "@mui/material";

interface Client {
  UserID: number;
  FirstName: string;
  LastName: string;
  Email: string;
}

const AdminClients : React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [id,setId] = useState<number>(0);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users/clients");
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
        method: "DELETE",
      });
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    setRefresh(!refresh)
    setShow(!show)
  }

  const handleConfirm = () => {
  
     deleteClient(id)
     setShow(!show)
  }

  return (
    <div>
      <div>
        <div className="grid grid-cols-3 mx-44 justify-center my-40 bg-white gap-40 items-center text-center rounded-s align-middle">
          {clients.map((el) => (
            
            <div
              key={el.UserID}
      
              className="flex-wrap mb-6 hover:box-content -mt-28 mr-60 shadow-2xl border-black border rounded w-60"
            >
              <h1 className="font-bold">{el.FirstName}</h1>
              <h1>{el.LastName}</h1>
              <h1>{el.Email}</h1>
              <button className="bg-red text-white rounded w-40 h-9 my-5">
                {" "}
                Send an email{" "}
              </button>
              <br />
              <DeleteIcon onClick={() => {setShow(!show);setId(el.UserID)}} />
              <div>

              {show && <ConfirmDelete  onConfirm={handleConfirm} onCancel={handleCancel}/>}
              </div>

            </div>

          ))}
        </div>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default AdminClients;
