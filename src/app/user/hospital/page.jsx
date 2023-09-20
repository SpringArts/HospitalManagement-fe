"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "@/lib/axios";
import Layout from "../Layout";
import Pagination from "@/components/Pagination";
import ReactPaginate from "react-paginate";

const page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [hospitalLists, setHospitalLists] = useState([]);
    const [search, setSearch] = useState("");
    const token = Cookies.get("token");
    const getHospitalList = async () => {
        try {
            const { data } = await axios.get(
                `hospitals?keyword=${search}&page=${currentPage}&perPage=${itemsPerPage}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            console.log(data);
            setHospitalLists(data.data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getHospitalList();
    }, [currentPage, search]);

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
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
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

                {/* line break */}
                {/* <div className="w-full mt-5 bg-[#327CEC] h-[0.1rem]"></div> */}

                {/* search box */}

                {/* Hospital Lists */}
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                        {hospitalLists?.data?.map((item, index) => (
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

                    {/* //Pagination */}
                    <ReactPaginate
                        breakLabel="..."
                        nextLabe="next"
                        onPageChange={(page) =>
                            setCurrentPage(page?.selected + 1)
                        }
                        pageRangeDisplayed={3}
                        pageCount={hospitalLists?.meta?.totalPages}
                        prevPageRel="prev"
                        renderOnZeroPageCount={null}
                        breakClassName="border border-white hover:bg-pink-200 transition-all duration-200 ease-in-out disabled:opacity-70 disabled:text-gray-100 mb-10 px-4 py-2 text-sm rounded-full text-lg"
                        activeClassName="bg-green-200 hover:bg-green-300 text-white transition-all duration-300 ease-in-out"
                        previousClassName="border border-white hover:bg-pink-200 transition-all duration-200 ease-in-out disabled:opacity-70 disabled:text-gray-100 mb-10 px-8 py-3 text-sm rounded-full tracking tracking-wider"
                        nextClassName="border border-white hover:bg-pink-200 transition-all duration-200 ease-in-out disabled:opacity-70 disabled:text-gray-100 mb-10 px-8 py-3 text-sm rounded-full tracking tracking-wider"
                        containerClassName="flex justify-center items-center w-full mt-8 gap-x-3"
                        pageClassName="border border-white hover:bg-pink-200 transition-all duration-200 ease-in-out disabled:opacity-70 disabled:text-gray-100 mb-10 px-4 py-3 text-sm rounded-full tracking tracking-wider"
                    />
                    {/* old pagination */}
                    {/* <div className="flex justify-center w-full mt-8 gap-x-3">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="border border-white hover:bg-pink-200 transition-all duration-200 ease-in-out disabled:opacity-70 disabled:text-gray-100 mb-10 px-8 py-3 text-sm rounded-full tracking tracking-wider"
                        >
                            Prev
                        </button>
                        <ul className="flex items-center gap-x-2 justify-center w-auto">
                            {[...Array(hospitalLists?.meta?.totalPages)].map(
                                (page, index) => (
                                    <li key={page}>
                                        <button
                                            onClick={() =>
                                                setCurrentPage(index + 1)
                                            }
                                            disabled={currentPage === index + 1}
                                            className="border border-white hover:bg-pink-200 transition-all duration-200 ease-in-out disabled:opacity-70 disabled:text-gray-100 mb-10 px-5 py-3 text-sm rounded-full"
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ),
                            )}
                        </ul>
                        <button
                            onClick={nextPage}
                            disabled={
                                currentPage === hospitalLists?.meta?.totalPages
                            }
                            className="border border-white hover:bg-pink-200 transition-all duration-200 ease-in-out disabled:opacity-70 disabled:text-gray-100 mb-10 px-8 py-3 text-sm rounded-full tracking tracking-wider"
                        >
                            Next
                        </button>
                    </div> */}
                </div>
            </section>
        </Layout>
    );
};

export default page;
