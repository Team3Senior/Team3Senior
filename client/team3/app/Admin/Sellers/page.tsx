"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../../Footer/page";
import { IoSearchOutline } from "react-icons/io5";
import DeleteIcon from "@mui/icons-material/Delete";

interface Seller {
  UserID: number;
  FirstName: string;
  LastName: string;
  Email: string;
}

const Sellers = () => {
  const [sels, setSels] = useState<Seller[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users/sellers");
      const data = await res.json();
      setSels(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const deleteSeller = async (userId: number) => {
    try {
      await fetch(`http://localhost:3000/api/users/deleteUser/${userId}`, {
        method: "DELETE",
      });
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-3 mx-44 justify-center my-40 bg-white gap-40 items-center text-center rounded-s align-middle">
          {sels.map((el) => (
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
              <DeleteIcon onClick={() => deleteSeller(el.UserID)} />
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

export default Sellers;
