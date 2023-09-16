"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "axios";
import Layout from "../Layout";

const page = () => {
    const [hospitalLists, setHospitalLists] = useState([]);
    const token = Cookies.get("token");
    const getHospitalList = async () => {
        try {
            const { data } = await axios.get(
                "http://127.0.0.1:8000/api/hospitals?perPage=8",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            console.log(data);
            setHospitalLists(data.data.hospitals);
            return data;
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getHospitalList();
    }, []);
    console.log(hospitalLists);

    return (
        <Layout>
            <section className="flex flex-col gap-y-3 min-w-full max-w-7xl relative bg-gradient-to-br from-teal-300 to-blue-500">
                {/* partners hospital title section */}
                <div className="flex justify-center w-full">
                    <div className="flex flex-col gap-y-5">
                        <h3 className="text-[48px] tracking-wide">
                            <span className="text-black">Partners</span>{" "}
                            <span className="text-[#327CEC]">Hospital</span>
                        </h3>
                        <div className="uppercase flex gap-x-2 text-xs justify-center">
                            <p>home</p> <span> &gt; </span> <p>partners</p>
                        </div>
                    </div>
                </div>

                {/* line break */}
                <div className="w-full mt-5 bg-[#327CEC] h-[0.1rem]"></div>

                {/* search box */}
                <div className="flex px-20 justify-end">
                    <div className="relative mt-5 mx-2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <img src="/search.png" className="w-4 h-4" alt="" />
                        </div>
                        <input
                            type="text"
                            id="name-icon"
                            name="name"
                            value=""
                            className="my-2 p-3 bg-gray-50 border rounded-full text-gray-900 text-sm block w-full pl-10 bg-transparent placeholder:text-gray-800 border-black focus:border-[#327CEC] focus:ring-blue-600"
                            placeholder="Search Hospital Name"
                        />
                    </div>
                    <div className="relative mt-5">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <img src="/search.png" className="w-4 h-4" alt="" />
                        </div>
                        <input
                            type="text"
                            id="name-icon"
                            name="name"
                            value=""
                            className="my-2 p-3 bg-gray-50 border rounded-full text-gray-900 text-sm block w-full pl-10 bg-transparent placeholder:text-gray-800 border-black"
                            placeholder="Search Department"
                        />
                    </div>
                </div>

                {/* Hospital Lists */}
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                        {hospitalLists.map((item, index) => (
                            <div key={index}>
                                <img
                                    src="/sample.svg"
                                    className="w-[365px] h-[262px] object-cover rounded-lg mb-3"
                                    alt=""
                                />
                                <h3 className="text-[20px] text-[#327CEC] tracking-wide">
                                    {item?.name}
                                </h3>
                                <ul className="my-2 text-black flex flex-wrap gap-x-2">
                                    {item.department?.map((dep) => (
                                        <li>#{dep}</li>
                                    ))}
                                </ul>
                                <button className="text-white fond-sm flex gap-x-3 items-center">
                                    See Details{" "}
                                    <img src="/rightArrow.svg" alt="" />{" "}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center w-full mt-8">
                        <button className="bg-[#327CEC] mb-10 px-8 py-3 text-sm rounded-full tracking tracking-wider">
                            Load More
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default page;
