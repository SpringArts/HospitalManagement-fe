"use client"

import Layout from "@/components/doctor/Layout";
import React, { useEffect, useState } from "react";
import {FaRegHospital, FaLocationArrow} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import Image from "next/image";

const HospitalPage = (props) => {
    const [hospitals, setHospitals] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const httpRequest = async () => {
            const response = await fetch('http://localhost:8000/api/hospitals', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok) {
                setError('Something wrong.')
                return
            }
            const responseData = await response.json()
            console.log(responseData.data)
            setHospitals(responseData.data.hospitals)
        }
        httpRequest()
    }, [])

    return (
        <Layout title='Hospitals'>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        !error && hospitals.map(hospital => (
                        <a key={hospital.id}
                            href="#"
                            className="relative block overflow-hidden rounded shadow-lg border border-gray-100"
                        >
                            <span
                                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                            ></span>
                            <Image className="rounded-t mb-3 w-full mx-auto" alt='Doctor Profile' width={250} height={250} src={hospital.image ? hospital.image : '/hospital.jpg'}/>
                            <div className="p-4">
                                <p className="flex items-start mb-2">
                                    <FaRegHospital size={20} className="mr-3"/> 
                                    {hospital.name}
                                </p>
                                <p className="flex items-start mb-2">
                                    <BsTelephone size={20} className="mr-3"/> 
                                    {hospital.phone}
                                </p>
                                <p className="flex items-start mb-2">
                                    <HiOutlineMail size={20} className="mr-3"/> 
                                    {hospital.email}
                                </p>
                            </div>
                        </a>
                        ))
                    }
                </div>
            </div>
        </Layout>
    );
};

export default HospitalPage;
