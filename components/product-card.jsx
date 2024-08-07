'use client'
import React, { useEffect } from 'react'
import { useState, useContext } from "react";
import CustomButton from '@/components/button.jsx'
import { StateContext } from '@/context/context.jsx';
import { useRouter } from 'next/navigation';
import Image from 'next/image.js';
const ProductCard = () => {
    const router = useRouter()
    const [allProducts, setAllProducts] = useState([]);

    const { getProducts } = useContext(StateContext);
    const possibleColors = ['text-yellow-500', 'text-red-500', 'text-green-500', 'text-blue-500']
    const parseStatusAndColor = (status) => {
        if (status === "1") {
            return { text: 'Pending', color: 'text-yellow-500' }
        } else if (status === "2") {
            return { text: 'Accepted', color: 'text-red-500' }
        } else if (status === "3") {
            return { text: 'Rejected', color: 'text-red-500' }
        }
    }

    useEffect(() => {
        getProducts().then((products) => {
            console.log(products)
            setAllProducts(products)
        })
    }, [])

    /**
     *     owner: product.owner,
            title: product.title,
            description: product.description,
            manufacturer: product.manufacturer,
            
            price: ethers.formatEther(product.price.toString()),
            image: product.picture,
            createdAt: product.registrationDate.toString(),
            serialNumber: product.serialNumber,
            status: product.status,
            pId: i
     */
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6 text-white text-center">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProducts.map((product, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
                        <div className="mb-4 w-full flex justify-center">
                            <Image src="/image.png" alt="Product" width={300} height={300} className="rounded-lg" />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <h2 className="text-2xl font-bold mb-2 text-blue-600">{product.name}</h2>
                            <p className="text-sm mb-2 text-gray-500">{product.description}</p>
                            <p className="text-sm font-semibold text-green-600">{product.price} eth</p>
                            <p className="text-sm font-semibold"><span className={`${parseStatusAndColor(product.status.toString()).color}`}><span className='text-black'>Status:</span> {parseStatusAndColor(product.status.toString()).text}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>




    )
}

export default ProductCard