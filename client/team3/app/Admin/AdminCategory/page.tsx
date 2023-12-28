"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Category {
  CategoryID: number;
  CategoryImage: string;
  NameCategory: string;
}

const AdminCat = () => {
  const [categs, setCategs] = useState<Category[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [show, setShow] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const router = useRouter();

  console.log('name', name);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/categories/allCategories');
      const data = await res.json();
      setCategs(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh, router]);

  const deleteCateg = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/categories/deleteCategory/${id}`, {
        method: 'DELETE',
      });
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };

  const updateCateg = async (id: number, newdata: { NameCategory: string }) => {
    try {
      await fetch(`http://localhost:3000/api/categories/updateCategory/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newdata),
      });
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <div className="flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center">
          <Link href="/addCategory">Add New Category</Link>
          <Link href="/admin">Get Back to Administration</Link>
          <div>
            <input
              type="search"
              placeholder="Search Category"
              className="bg-gray-200 p-2 text-xs rounded w-56 h-9 right-10"
            />
          </div>
        </div>
        <div className="flex justify-center my-40 bg-white gap-40 items-center text-center rounded-s align-middle" style={{ flexWrap: 'wrap' }}>
          {categs.map((el) => (
            <div key={el.CategoryID} className="flex-wrap grid-cols-5 mb-6 hover:box-content">
              <img className="h-40 w-30 shadow-lg rounded-3xl" src={el.CategoryImage} alt="" />
              <h1 className="text-">{el.NameCategory}</h1>
              <button
                className="bg-white hover:bg-red text-black rounded w-20 h-9 my-5"
                onClick={() => {
                  deleteCateg(el.CategoryID);
                }}
              >
                delete
              </button>
              <button
                className="bg-white hover:bg-red text-black rounded w-20 h-9 my-5"
                onClick={() => {
                  setShow(el.CategoryID);
                }}
              >
                Update
              </button>
              <div>
                {show === el.CategoryID && (
                  <div className="border">
                    <div className="pt-0 mb-3 my-10">
                      <input
                        type="text"
                        placeholder="Category Name"
                        className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>

                    <button
                      className="hover:shadow-lg hover:bg-white px-6 py-3 mb-1 mr-1 text-sm font-bold text-black bg-red uppercase rounded shadow"
                      onClick={() => {
                        updateCateg(el.CategoryID, { NameCategory: name });
                        setShow(0);
                      }}
                    >
                      Validate
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCat;
