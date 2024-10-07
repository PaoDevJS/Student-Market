import React, { useState } from 'react'
import upload_file from "../assets/upload_file.png"

const AddProduct = () => {
  const [image, setImage] = useState(upload_file)
  const [dataForm, setDataForm] = useState(null)

  const ImageHandleChange = (e) => {
    console.log(e.target.files[0])
    const imageFile = URL.createObjectURL(e.target.files[0])
    setImage(imageFile)
  }

  const HandleChangeDataForm = (e) => {
    setDataForm( (prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value.trim()
      }
    })
  }

  const HandleAddProduct = (e) => {
    e.preventDefault();
    console.log(dataForm)
  }

  return (
    <div className='border max-w-[700px] bg-white rounded-lg w-[700px] h-[600px] px-10 py-5 m-auto'>
      <form className='flex flex-col gap-5'>
        <div>
          <h3 className='text-lg font-[500] mb-2 text-[#7b7b7b]'>Product title:</h3>
          <input type="text" value={dataForm.name} name="name" onChange={HandleChangeDataForm} className='border-2 rounded-lg py-2 px-3 outline-none min-w-full' placeholder='Type here'/>
        </div>
        <div className='flex gap-14'>
          <div className='boder w-full'>
            <h3 className='text-lg font-[500] mb-2 text-[#7b7b7b]'>Price:</h3>
            <input type="text" value={dataForm.old_price} name="old_price" onChange={HandleChangeDataForm} className='border-2 rounded-lg py-2 px-3 outline-none w-full' placeholder='Type here'/>
          </div>
          <div className='w-full'>
            <h3 className='text-lg font-[500] mb-2 text-[#7b7b7b]'>Offer Price:</h3>
            <input type="text" name="new_price" onChange={HandleChangeDataForm} className='border-2 rounded-lg py-2 px-3 outline-none w-full' placeholder='Type here'/>
          </div>
        </div>
        <div>
          <h3 className='text-lg font-[500] mb-2 text-[#7b7b7b]'>Product Categary: </h3>
          <select name="categary" onChange={HandleChangeDataForm} className='border-2 outline-none h-[40px] w-[150px] rounded-md text-center font-[500] text-[#7b7b7b]'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kid">Kid</option>
          </select>
        </div>
        <div>
          <h3 className='text-lg font-[500] mb-2 text-[#7b7b7b]'>Image Product: </h3>
          <div>
            <label htmlFor="file-input">
              <img src={image? image : upload_file} alt="Image Upload File" className='w-[120px] h-[120px] object-contain my-5 border'/>
            </label>
            <input type="file" onChange={ImageHandleChange} name="image_url" id='file-input' hidden/>
          </div>
        </div>
        <button type='submit' onClick={HandleAddProduct} className='w-[50%] h-[50px] m-auto rounded-full text-lg font-bold bg-[#4F75FF] text-white border hover:scale-95 transtion-all duration-300 ease-in-out'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct