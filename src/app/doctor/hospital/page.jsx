import Layout from "@/components/doctor/Layout";
import React from "react";
import {FaRegHospital, FaLocationArrow} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import Image from "next/image";

const HospitalPage = () => {
    return (
        <Layout title='Hospitals'>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="rounded shadow-lg">
                        <Image className="rounded-t mb-3 w-full mx-auto" alt='Doctor Profile' width={250} height={250} src='/hospital.jpg'/>
                        <div className="p-3">
                            <p className="flex items-center mb-2">
                                <FaRegHospital size={20} className="mr-3"/> 
                                Hospital Plus
                            </p>
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
                    <div className="rounded shadow-lg">
                        <Image className="rounded-t mb-3 w-full mx-auto" alt='Doctor Profile' width={250} height={250} src='/hospital.jpg'/>
                        <div className="p-3">
                            <p className="flex items-center mb-2">
                                <FaRegHospital size={20} className="mr-3"/> 
                                Hospital Plus
                            </p>
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
                    <div className="rounded shadow-lg">
                        <Image className="rounded-t mb-3 w-full mx-auto" alt='Doctor Profile' width={250} height={250} src='/hospital.jpg'/>
                        <div className="p-3">
                            <p className="flex items-center mb-2">
                                <FaRegHospital size={20} className="mr-3"/> 
                                Hospital Plus
                            </p>
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
                    <div className="rounded shadow-lg">
                        <Image className="rounded-t mb-3 w-full mx-auto" alt='Doctor Profile' width={250} height={250} src='/hospital.jpg'/>
                        <div className="p-3">
                            <p className="flex items-center mb-2">
                                <FaRegHospital size={20} className="mr-3"/> 
                                Hospital Plus
                            </p>
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
                    <div className="rounded shadow-lg">
                        <Image className="rounded-t mb-3 w-full mx-auto" alt='Doctor Profile' width={250} height={250} src='/hospital.jpg'/>
                        <div className="p-3">
                            <p className="flex items-center mb-2">
                                <FaRegHospital size={20} className="mr-3"/> 
                                Hospital Plus
                            </p>
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
                    <div className="rounded shadow-lg">
                        <Image className="rounded-t mb-3 w-full mx-auto" alt='Doctor Profile' width={250} height={250} src='/hospital.jpg'/>
                        <div className="p-3">
                            <p className="flex items-center mb-2">
                                <FaRegHospital size={20} className="mr-3"/> 
                                Hospital Plus
                            </p>
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
                </div>
            </div>
        </Layout>
    );
};

export default HospitalPage;
