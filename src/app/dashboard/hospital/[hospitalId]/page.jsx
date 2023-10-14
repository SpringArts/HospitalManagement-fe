'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { User, Users, Calendar } from "react-feather";
import Layout from "@/components/hospital/Layout";
import axios from "@/lib/axios";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import toast, { Toaster } from 'react-hot-toast';

const InfoCard = ({ title, count, icon: Icon, color }) => {
    return (
        <div className={`bg-${color}-200 p-6 rounded-lg shadow-md flex items-center transition duration-300 ease-in-out transform hover:scale-105`}>
            <Icon className={`text-${color}-500 text-3xl mr-4`} />
            <div>
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-3xl font-bold">{count}</p>
            </div>
        </div>
    );
};

const Dashboard = ({ params }) => {
    const hospitalId = params.hospitalId;
    const token = Cookies.get("token");
    const [users, setUsers] = useState([]);
    const [dataCount, setDataCount] = useState([]);
    const [hospitalInfo, setHospitalInfo] = useState([]);
    const [headmasterInfo, setHeadmasterInfo] = useState([]);
    const [formData, setFormData] = useState({
        userId: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to the Laravel backend using an API endpoint
            const response = await axios.put(`/dashboard/${hospitalId}/head`, formData, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            if (response.status === 200) {
                toast.success('Successfully Changed!')
            }
            else {
                toast.error('Something went wrong!')
            }

        } catch (error) {
            toast.error('Something went wrong!')
            console.error('Error sending form data:', error);
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const fetchData = async () => {
        const [fetchUsers, fetchDataCount, fetchHospitalInfo, fetchHeadMasterInfo] = await Promise.all([
            axios.get(`/dashboard/${hospitalId}/head/assign`, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }),
            axios.get(`/dashboard/hospital/${hospitalId}`, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }),
            axios.get(`/hospitals/${hospitalId}`, {

                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }),
            axios.get(`/hospital/${hospitalId}/head`, {

                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }),
        ]);
        setUsers(fetchUsers.data.data);
        setDataCount(fetchDataCount.data.data);
        setHospitalInfo(fetchHospitalInfo.data.data);
        setHeadmasterInfo(fetchHeadMasterInfo.data.data);
    }

    useEffect(() => {
        fetchData();
    }, []) //Add if you want to live change when headmaster change

    return (
        <Layout>
            <div className="container mx-auto mt-10">
                <h1 className="text-3xl font-semibold mb-6 text-center">Welcome to {hospitalInfo.name}!</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoCard title="Doctor Count" count={dataCount.doctorCount} icon={User} color="blue" />
                    <InfoCard title="Patient Count" count={dataCount.patientCount} icon={Users} color="green" />
                    <InfoCard title="Appointment Count" count={dataCount.appointmentCount} icon={Calendar} color="red" />
                </div>

                <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
                    {/* Article Card */}
                    <article className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                        <div className="p-4 sm:p-6 flex-1 flex flex-col">
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Hospital Information</h2>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-medium text-gray-600">Hospital Name</h4>
                                        <p className="text-xs text-gray-500">{hospitalInfo.name}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-medium text-gray-600">Email</h4>
                                        <p className="text-xs text-gray-500">{hospitalInfo.email}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-medium text-gray-600">Phone</h4>
                                        <p className="text-xs text-gray-500">{hospitalInfo.phone}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-medium text-gray-600">Address</h4>
                                        <p className="text-xs text-gray-500">{hospitalInfo.address}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-medium text-gray-600">Location</h4>
                                        <p className="text-xs text-gray-500">{hospitalInfo.location}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-medium text-gray-600">Bio</h4>
                                        <p className="text-xs text-gray-500">{hospitalInfo.bio}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <Link href={`/dashboard/hospital/${hospitalId}/doctors`} passHref
                                    className="bg-blue-500 hover:bg-blue-600 px-5 py-3 text-white text-xs font-bold transition rounded-lg">
                                    View Doctors
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Headmaster Card */}
                    <div>
                        <Link
                            href="#"
                            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-lg"
                        >
                            <span
                                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                            ></span>

                            <div className="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                        {headmasterInfo.name}
                                    </h3>

                                    <p className="mt-1 text-xs font-medium text-gray-600">headmaster</p>
                                </div>

                                <div className="hidden sm:block sm:shrink-0">
                                    <Image
                                        alt="Paul Clapton"
                                        width={0}
                                        height={0}
                                        src="/login.svg"
                                        className="h-16 w-16 rounded-lg object-cover shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="max-w-[40ch] text-sm text-gray-500">
                                    Meet our dedicated hospital headmaster. With a wealth of experience and unwavering commitment,headmaster leads our medical team with compassion and expertise.
                                </p>
                            </div>

                            <dl className="mt-6 flex gap-4 sm:gap-6">
                                <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-600">Joined</dt>
                                    <dd className="text-xs text-gray-500"> {headmasterInfo.created_at}</dd>
                                </div>

                                <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-600">Email</dt>
                                    <dd className="text-xs text-gray-500"> {headmasterInfo.email}</dd>
                                </div>
                            </dl>
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900">Change Headmaster</h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Select a new headmaster for the hospital. Please choose from the list below and click the button to assign.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center space-x-4">
                                <div className="flex flex-row items-center space-x-2 flex-1">
                                    <select
                                        name="userId"
                                        id="userId"
                                        onChange={handleInputChange}
                                        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                                    >
                                        <option value="">Please select</option>
                                        {users.map((user) => (
                                            <option key={user.id} value={user.doctorInfo.id}>
                                                {user.doctorInfo.name}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        type="submit"
                                        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                    >
                                        Assign
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
