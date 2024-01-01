'use client'
import React,{useState ,ChangeEvent} from 'react'
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import Footer from '../../Footer/page';
import Link from 'next/link';
import { useRouter } from "next/navigation";




const AddForSale : React.FC = () => {


    
const { push } = useRouter();
const [image, setImage ] = useState<File | string>("");
const [ url, setUrl ] = useState<string>("");
const [name, setName] = useState<string>("")
const [description,setDescription] = useState<string>("")
const [quantity,setQuantity] = useState<number>(0)
const [price,setPrice] = useState<number>(0)
const [availability,setAvailability] = useState<string>("")
const [discount,setDiscount] = useState<number>(0)
const [color,setColor] = useState<string>("")
const [size,setSize] = useState<string>("")

type product = {
    Name : string,
    Description : String,
    Price : number,
    Availability : string,
    Quantity : number,
    Discount : number,
    Color : string,
    Size : string,
    ProductImage : File | string,
  }

  const prod :product= {
    Name : name,
    Description : description,
    Price : price,
    Availability : availability,
    Quantity : quantity,
    Discount : discount,
    Color : color,
    Size : size,
    ProductImage : url
}

const addProd = async (prod : product) => {
    try {
      await fetch('http://localhost:3000/api/products/addProd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prod),
      });
      
    } catch (err) {
      console.log(err);
    }
  };


//Cloudinary //
    const uploadImage = () => {
      const data = new FormData()
      data.append("file", image as File)
      data.append("upload_preset", "zmitpmpw")
      data.append("cloud_name","dfvgavtio")
      fetch("https://api.cloudinary.com/v1_1/dfvgavtio/image/upload",{
      method:"post",
      body: data
      })
      .then(res => res.json())
      .then(data => {setUrl(data.secure_url) ;console.log("urldata",data)})
      .catch(err => console.log(err))}

//***********************/
 
return (
    <div>
    <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
       
       <Link href='/Seller/addForSale' >Add New Product For Sale</Link>
     <Link href='/Seller'> Get Back to Home Page </Link>
     </div>

  <div className='grid justify-center align-middle items-center box-border rounded-lg shadow-2xl border-black  mt-30 gap-x-64 bg-gray-200 h-auto w-4/5 ml-36 '>

  <div className="pt-0 mb-3 my-28">
   <input
        type="text"
        placeholder="Product Name"

        className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
        required
        onChange={(e: ChangeEvent<HTMLInputElement>)=>{setName(e.target.value)}}
      />
  </div>
  <div className="pt-0 mb-3 ">
   <input
        type='number'
        placeholder="Quantity to put in stock"

        className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
        onChange={(e : ChangeEvent<HTMLInputElement>)=>{setQuantity(Number(e.target.value))}}
      />
  </div>
  <div className="pt-0 mb-3 ">
   <input
        type='number'
        placeholder="Product unit Price"

        className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
        onChange={(e : ChangeEvent<HTMLInputElement>)=>{setPrice(Number(e.target.value))}}
      />
  </div>
  <div className="pt-0 mb-3 ">
   <input
        type='number'
        placeholder="Product Discount"
        className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
        onChange={(e : ChangeEvent<HTMLInputElement>)=>{setDiscount(Number(e.target.value))}}/>
  </div>
  <div className="pt-0 mb-3 ">
   <input
        type="text" placeholder="Product Color" className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
        onChange={(e :ChangeEvent<HTMLInputElement>)=>{setColor(e.target.value)}}
      />
  </div>
  <div className="pt-0 mb-3 ">
   <input type="text" placeholder="Product Size" className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
        onChange={(e : ChangeEvent<HTMLInputElement>) => {setSize(e.target.value)}} />
  </div>



  <div className="pt-0 mb-3 ">
  <fieldset>

<div className='flex items-center w-full gap-8'>
<legend>Choose Availability :</legend>

<div>
      <input type="checkbox" name="In Stock" value="In Stock" onChange={() => {setAvailability('In Stock')}} />
      <label htmlFor="In Stock">In Stock</label>
</div>

<div>
  <input type="checkbox"  value="Out of Stock" name="Out of Stock for now" onChange={()=>{setAvailability("Out Of Stock")}}/>
  <label htmlFor="Out of Stock">Out of Stock</label>
</div>

</div>
</fieldset>
  </div>



  <div className="pt-0 mb-3">
      <textarea
        placeholder="Description"
        className="relative w-full h-96 px-3 py-3 text-sm text-red-600 placeholder-gray-400 bg-gray border-0 rounded shadow"
        required
        onChange={(e)=> {setDescription(e.target.value)}}
      />
    </div>
 
  <div className='fit-content mb-4 font-extrabold lg:text-xl'>

  <Button component="label" variant="contained"  >
    <input type="file" onChange= {(e)=>{ if(e.target.files && e.target.files.length) { setImage(e.target.files[0])}}}></input>
    </Button>

  <Button onClick={()=>{uploadImage()}}> <AddAPhotoIcon sx={{ width: 40, height: 40 }} /> Use this Image </Button>
  
  <div>
    <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url}/>
    </div>

  </div>
  <div className="pt-0 mb-3">
      <button
        className="hover:shadow-lg px-6 py-3 mb-1 mr-1 text-sm font-bold text-black bg-white uppercase rounded shadow "
        type="button" onClick={()=>{addProd(prod)
        push('/Seller/AllMySales')
        }}> Put for sale </button>
    </div>


  </div>
  
  <Footer/>
   </div>

  )
}

export default AddForSale;