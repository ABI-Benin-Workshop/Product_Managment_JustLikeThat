"use client"
import React, { createContext, useState } from 'react';
import abi from '@/abi/productRegistrationAbi.json';
import { ethers } from 'ethers';
import { create } from 'domain';
export const StateContext = createContext();

export default function StateContextProvider({ children }) {
    const productRegistrationContractAddress = '0x27b68d32f43b5377241E2Ec1f041433877f0e4d6'
    const provider = new ethers.BrowserProvider(window.ethereum)
    const getContract = async () => {
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(productRegistrationContractAddress, abi, signer);
        return contract;
    }


    const [address, setAddress] = useState(null);
    const ethereum = window.ethereum;
    const connect = async () => {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setAddress(accounts[0]);
        } catch (error) {
            console.error(error);
        }
    }


    const addProduct = async (producProps) => {
        try {
            const contract = await getContract();
            await contract.addProduct(
                producProps.serialNumber,
                producProps.name,
                producProps.description,
                producProps.picture,
                producProps.price,
            );

        } catch (error) {
            console.log("Error calling contract", error)
            // throw new Error('contract call failure')
        }
    }
    const addManufacturer = async (address) => {
        try {
            const contract = await getContract();
            await contract.addManufacturer(
                address
            );

        } catch (error) {
            console.log("Error calling contract", error)
            // throw new Error('contract call failure')
        }
    }
    const addValidator = async (address) => {
        try {
            const contract = await getContract();

            await contract.addValidator(
                address
            );

        } catch (error) {
            console.log("Error calling contract", error)
            // throw new Error('contract call failure')
        }
    }

    const getProducts = async () => {
        try {
            const contract = await getContract();
            const products = await contract.getAllProductDetails();

            const parsedProduct = products.map((product, i) => ({
                owner: product.owner,
                title: product.title,
                description: product.description,
                manufacturer: product.manufacturer,
                name: product.name,
                price: ethers.formatEther(product.price.toString()),
                image: product.picture,
                createdAt: product.registrationDate.toString(),
                serialNumber: product.serialNumber,
                status: product.status,
                pId: i
            }));

            return parsedProduct;
        } catch (error) {
            console.log("Error getting campaigns", error);
        }
    }

    const validateProduct = async (serialNumber) => {
        try {
            const contract = await getContract();
            await contract.validateProduct(
                serialNumber
            );
        } catch (error) {
            console.log("Error calling contract", error)
            // throw new Error('contract call failure')
        }
    }

    const rejectProduct = async (serialNumber) => {
        try {
            const contract = await getContract();
            await contract.rejectProduct(
                serialNumber
            );
        } catch (error) {
            console.log("Error calling contract", error)
            // throw new Error('contract call failure')
        }
    }

    return (
        <StateContext.Provider
            value={{
                address,
                // contract,
                connect,

                addManufacturer,
                addValidator,
                addProduct,
                getProducts
            }}
        >
            {children}
        </StateContext.Provider>
    )
}