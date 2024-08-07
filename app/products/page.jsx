'use client'
import React from 'react'
import  { useState, useContext } from "react";
import CustomButton from '@/components/button.jsx'
import { StateContext } from '@/context/context.jsx';
import { parseUnits } from 'ethers';
const page = () => {
    const { addProduct } = useContext(StateContext);
    const [productFormDetails, setProductFormDetails] = useState({
        serialNumber: '',
        name: '',
        description: '',
        picture: '',
        price: 0
    })

    const handleChange = (e) => {
        setProductFormDetails({
            ...productFormDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit =async (e) => {
        e.preventDefault()
        console.log(productFormDetails)
        await addProduct(productFormDetails)
    }
    
    return (
        <div className='flex items-center justify-center flex-col gap-4 p-4'>
            <h1 className='text-lg font-medium'>Add product</h1>

            <form className='mt-10 flex flex-col gap-4 items-center justify-center' onSubmit={handleSubmit}>

                <div className='flex flex-col gap-4 items-center justify-center' >
                    <label htmlFor="serialNumber" className='text-white text-[14px] font-medium'>Serial Number</label>
                    <input type="text" placeholder="Enter Serial Number" className="py-2 px-3 outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]" name="serialNumber" onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-4 items-center justify-center' >
                    <label htmlFor="serialNumber" className='text-white text-[14px] font-medium'>Name</label>
                    <input type="text" placeholder="Enter Serial Number" className="py-2 px-3 outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]" name="name" onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-4 items-center justify-center' >
                    <label htmlFor="serialNumber" className='text-white text-[14px] font-medium'>Description</label>
                    <input type="text" placeholder="Enter Serial Number" className="py-2 px-3 outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]" name="description" onChange={handleChange} />
                </div>
            
                <div className='flex flex-col gap-4 items-center justify-center' >
                    <label htmlFor="serialNumber" className='text-white text-[14px] font-medium'>Picture</label>
                    <input type="text" placeholder="Enter Serial Number" className="py-2 px-3 outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]" name="picture" onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-4 items-center justify-center' >
                    <label htmlFor="serialNumber" className='text-white text-[14px] font-medium'>Price</label>
                    <input type="number" placeholder="Enter Serial Number" className="py-2 px-3 outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]" name="price" onChange={(e)=>{
                        setProductFormDetails({
                            ...productFormDetails,
                            price: parseUnits(e.target.value, 'ether')
                        })
                    }} />
                </div>
                <CustomButton btnType="submit" title="Add Product" styles={'bg-blue-600'}  />
            </form>



        </div>
    )
}

export default page