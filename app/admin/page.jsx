"use client"
import CustomButton from '@/components/button.jsx'
import react, { useState,useContext } from "react";
import { StateContext } from '@/context/context.jsx';


const page = () => {
    const { addManufacturer,addValidator } = useContext(StateContext);

    const [address, setAddress] = useState('');

    return (
        <div className='flex items-center justify-center flex-col gap-4 p-4'>
            <h1 className='text-lg font-medium'>Manage Manufacturers and Validators</h1>

            <section className='mt-10 flex flex-col gap-4 items-center justify-center'>
                <h2 className='text-lg font-medium'>Manufacturers</h2>

                <div  className='flex flex-col gap-4 items-center justify-center' >
                    <input type="text" placeholder="Enter Manufacturer address" className="py-4 sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                    onChange={(e) => setAddress(e.target.value)}
                    />
                    <CustomButton btnType="button" title="Add Manufacturer" styles={'bg-blue-600'} handleClick={() => { addManufacturer(address) }} />
                </div>
            </section>

            <section className='mt-10 flex flex-col gap-4 items-center justify-center'>
                <h2 className='text-lg font-medium'>Validators</h2>

                <div  className='flex flex-col gap-4 items-center justify-center' >
                    <input type="text" placeholder="Enter Manufacturer address" className="py-4 sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                    onChange={(e) => setAddress(e.target.value)}
                    />
                    <CustomButton btnType="button" title="Add Validators" styles={'bg-blue-600'} handleClick={() => { addValidator(address) }} />
                </div>
            </section>
     

        </div>
    )
}

export default page