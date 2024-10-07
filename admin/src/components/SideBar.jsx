import React from 'react'
import { Link } from 'react-router-dom'
import { FaOpencart } from "react-icons/fa";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";

const SideBar = () => {
  return (
    <div className='flex border justify-center bg-white md:h-[650px] gap-10 py-5 px-5 md:flex-col md:gap-5 md:py-7 md:justify-start'>
        <Link to="/addproduct">
            <div className='flex justify-center items-center gap-5 w-[250px] h-[60px] border rounded-md bg-[#F5F5F7]'>
                <FaOpencart className='w-[25px] h-[25px]' />
                <p className='text-md font-[500]'>Thêm Sản Phẩm</p>
            </div>
        </Link>
        <Link to="/listproduct">
            <div className='flex justify-center items-center gap-5 w-[250px] h-[60px] border rounded-md bg-[#F5F5F7]'>
                <HiMiniClipboardDocumentList className='w-[25px] h-[25px]' />
                <p className='text-md font-[500]'>Danh sách Sản Phẩm</p>
            </div>
        </Link>
    </div>
  )
}

export default SideBar