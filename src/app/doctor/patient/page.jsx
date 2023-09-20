import Layout from "@/components/doctor/Layout";
import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaLocationArrow, FaRegHospital } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const PatientPage = () => {
  return (
    <Layout title='Patients'>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(patient => (
                        <div key={patient} className="rounded shadow-lg">
                            <Image className="rounded-t mb-3 w-full mx-auto max-h-[350px]" alt='Doctor Profile' width={250} height={250} src='/patient.webp'/>
                            <div className="p-3">
                                <p className="flex items-center mb-2">
                                    <BsTelephone size={20} className="mr-3"/> 
                                    098754884120
                                </p>
                                <p className="flex items-center mb-2">
                                    <HiOutlineMail size={20} className="mr-3"/> 
                                    hospital.plus@gmail.com
                                </p>
                                <p className="flex items-center mb-2">
                                    <FaLocationArrow size={20} className="mr-3"/> 
                                    Hlaing in Yangon
                                </p>
                                <button className="py-2 w-full bg-blue-400 text-white rounded mt-2">DETAIL</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </Layout>
);
};

export default PatientPage;
