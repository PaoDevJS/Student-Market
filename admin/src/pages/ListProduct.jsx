import React from 'react';
import upload_file from "../assets/upload_file.png";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const ListProduct = () => {
  return (
    <div className='bg-red-200 w-full py-4 px-7' >
      <div>
        <h1 className='text-center text-3xl font-[500] my-5'> Danh sách Sản Phẩm </h1>
      </div>
      <div className='w-full border'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='w-[15%] border'>Sản phẩm</th>
              <th className='w-[25%] border'>Tên sản phẩm</th>
              <th className='w-[15%] border'>Giá cũ</th>
              <th className='w-[15%] border'>Giá mới</th>
              <th className='w-[15%] border'>Loại</th>
              <th className='w-[15%] border'></th>
            </tr>
          </thead>
          <tbody>
              <tr className='text-center'>
                <td className='w-[15%] py-2 whitespace-nowrap'>
                  <img src={upload_file} alt="" width={100} height={100} className='m-auto'/>
                </td>
                <td className='w-[25%] py-2 whitespace-nowrap overflow-hidden'></td>
                <td className='w-[15%] py-2 whitespace-nowrap'>20</td>
                <td className='w-[15%] py-2 whitespace-nowrap'>10</td>
                <td className='w-[15%] py-2 whitespace-nowrap'>Men</td>
                <td className='w-[15%] py-2 whitespace-nowrap'>
                  <div className='flex justify-center items-center gap-5 text-2xl cursor-pointer'>
                    <FaEdit />
                    <AiFillDelete className='text-red-500'/>
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListProduct