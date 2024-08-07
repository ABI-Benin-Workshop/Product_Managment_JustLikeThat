"use client";
import react, { useState,useContext } from "react";
import Image from "next/image";
import { logo, search } from '@/public/assets'
import {navLinks} from '@/config/nav.js'
import { StateContext } from '../context/context.jsx'
import Button from "./button";
import { useRouter } from 'next/navigation';
const Header = () => {
    const router = useRouter()
    const { address,  connect } = useContext(StateContext);

    return (
        <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 px-4">
            <div>
                <Image src={logo} alt="logo" className="w-[52px] h-[52px] object-contain" />
            </div>
            <div>
                    <ul className="flex flex-row items-center gap-4">
                        {
                            navLinks.map((navLink, index) => (
                                <li key={index}>
                                    <a href={navLink.href}>
                                        {navLink.name} 
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
            </div>
           
            <div className="sm:flex hidden flex-row justify-end gap-4">

                {
                    !address?  <Button
                    btnType="button"
                    title={"Connect"}
                    styles={'bg-blue-600'}
                    handleClick={() => {
                        if (address)
                            router.push('/create-campaign')
                        else connect()
                    }}
                />:`${address?.slice(0, 6)} ...  ${address?.slice(-4)}`
                }
               
            </div>
        </div>
    )
}

export default Header