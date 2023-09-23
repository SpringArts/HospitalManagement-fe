"use client"

import Layout from "@/components/doctor/Layout";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const PatientPage = () => {
    const [patients, setPatients] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const httpRequest = async () => {
            const response = await fetch('http://localhost:8000/api/patients', {
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
            setPatients(responseData.data)
        }
        httpRequest()
    }, [])
  return (
    <Layout title='Patients'>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 ld:grid-cols-4 gap-4">
                {
                    !error && patients.map(patient => (
                        <a key={patient}
                            href="#"
                            className="relative block overflow-hidden rounded-lg shadow border border-gray-100"
                        >
                            <span
                                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                            ></span>
                            <Image className="rounded-t mb-3 w-full mx-auto max-h-[350px]" alt='Doctor Profile' width={250} height={250} src={patient.image ? patient.image : '/patient.webp'}/>
                            <div className="p-3">
                                <p className="flex items-center mb-2">
                                    <AiOutlineUser size={20} className="mr-3"/> 
                                    {patient.name}
                                </p>
                                <p className="flex items-center mb-2">
                                    <BsTelephone size={20} className="mr-3"/> 
                                    {patient.phone}
                                </p>
                                <p className="flex items-center mb-2">
                                    <HiOutlineMail size={20} className="mr-3"/> 
                                    {patient.email}
                                </p>
                                <p className="flex items-center mb-2">
                                    <HiOutlineLocationMarker size={20} className="mr-3"/> 
                                    {patient.address}
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

export default PatientPage;
