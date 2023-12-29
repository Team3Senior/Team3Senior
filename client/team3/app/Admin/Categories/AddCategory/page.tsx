"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Footer from '../../../Footer/page';

const AddCateg = () => {
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string>('');
  const [catName, setCatName] = useState<string>('');
  const [ref, setRef] = useState<boolean>(false);

  
  const router = useRouter();

  const addCat = async (newCat: { NameCategory: string; CategoryImage: string }) => {
    try {
      await fetch('http://localhost:3000/api/categories/addCategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCat),
      });
      
    } catch (err) {
      console.log(err);
    }
  };

  const uploadImage = async () => {
    try {
      const data = new FormData();
      if (image) {
        data.append('file', image);
        data.append('upload_preset', 'project');
        data.append('cloud_name', 'ds3tmq5iw');
        const response = await fetch('https://api.cloudinary.com/v1_1/ds3tmq5iw/image/upload', {
          method: 'POST',
          body: data,
        });
        const responseData = await response.json();
        setUrl(responseData.secure_url);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center'>
        <Link href='/addCategory'>Add New Category</Link>
        <Link href='/admin'>Get Back to Administration </Link>
      </div>

      <div className='grid justify-center align-middle items-center box-border rounded-lg shadow-2xl border-black mt-30 gap-x-64 bg-gray-200 h-auto w-2/4 ml-96 '>
        <div>
          <h1 className='text-xl font-bold text-red mt-8'>Name of Category :</h1> <br />
          <input
            className='bg-white shadow-md rounded pe-40 pt-2 pb-2 w-10/12 mb-4 text-center gap-40'
            placeholder='Category Name '
            onChange={(e) => {
              setCatName(e.target.value);
            }}
          />
        </div>

        <div className='fit-content mb-4 font-extrabold lg:text-xl'>
          <h1 className='text-xl font-bold text-red mt-8'> Picture of Category :</h1> <br />
          <Button component='label' variant='contained'>
            <input type='file' onChange={(e) => setImage(e.target.files?.[0] || null)}></input>
          </Button>

          <Button onClick={() => uploadImage()}>
            {' '}
            <AddAPhotoIcon sx={{ width: 40, height: 40 }} /> <br />{' '}
          </Button>
          <div>
            <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url} />
          </div>
        </div>
        <h1 className='text-xl font-bold text-red mt-7'>Confirm :</h1>
        
          {' '}
          <button
            className='bg-black mt-5 h-11 w-52 text-white mb-10 shadow-md rounded'
            onClick={() => {
              addCat({ NameCategory: catName, CategoryImage: url }); 
              router.push('/Admin/Categories')
            }}
          >
            Join to Categories{' '}
          </button>
        
      </div>

      <Footer />
    </div>
  );
};

export default AddCateg;
