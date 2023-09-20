"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "@/lib/axios";
import Layout from "../Layout";

const page = () => {
    const [hospitalLists, setHospitalLists] = useState([]);
    const token = Cookies.get("token");
    const getHospitalList = async () => {
        try {
            const { data } = await axios.get("hospitals?perPage=8", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
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
            <section className="flex flex-col gap-y-3 min-w-full max-w-7xl relative">
                {/* partners hospital title section */}

                <div className="flex flex-col justify-center w-full mt-4">
                    <div className="uppercase flex gap-x-2 text-xs text-start mb-4 md:text-base">
                        <p>home</p> <span> &gt; </span> <p>partners</p>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h3 className="text-3xl font-medium justify-start md:text-5xl">
                            <span className="text-zinc-800">Partners</span>
                            <span className=" text-green-500">Hospital</span>
                        </h3>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="relative w-full mx-2 md:mt-5">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <img src="/search.png" className="w-4 h-4" alt="" />
                        </div>
                        <input
                            type="text"
                            id="name-icon"
                            name="name"
                            className="my-2 p-3 bg-gray-50 border rounded-full text-gray-900 text-sm block w-full pl-10 bg-transparent placeholder:text-gray-800 border-black focus:border-green-600  focus:ring-green-600"
                            placeholder="Search Hospital"
                        />
                    </div>
                </div>

                {/* line break */}
                {/* <div className="w-full mt-5 bg-[#327CEC] h-[0.1rem]"></div> */}

                {/* search box */}

                {/* Hospital Lists */}
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                        {hospitalLists.map((item, index) => (
                            <hospitalLists item={item} index={index} />
                        ))}
                    </div>
                    <div className="flex justify-center w-full mt-8">
                        <button className="bg-[#327CEC] mb-10 px-8 py-3 text-sm rounded-full tracking tracking-wider text-white">
                            Load More
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default page;
