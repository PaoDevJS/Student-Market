import React from 'react'
import SideBar from '../components/SideBar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct'
import ListProduct from './ListProduct'

const Admin = () => {
  return (
    <div className='flex flex-col md:flex-row bg-[#eef0f1]'>
        <SideBar />
        <Routes>
          <Route path='/addproduct' element={<AddProduct />}/>
          <Route path='/listproduct' element={<ListProduct />}/>
        </Routes>
    </div>
  )
}

export default Admin