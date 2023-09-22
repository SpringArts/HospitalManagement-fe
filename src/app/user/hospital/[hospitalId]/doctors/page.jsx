'use client'
import Layout from "@/app/user/Layout";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import Image from "next/image";
import Pagination from "@/components/DoctorOfHospital/Pagination";

const Page = ({ params }) => {
    const [data, setData] = useState([]);
    const [meta, setMeta] = useState({});
    const [page, setPage] = useState(1);

    const hospitalId = params.hospitalId;
    const token = Cookies.get("token");
    const fetchData = async () => {
        const res = await axios.get(`/hospital/${hospitalId}/doctors?page=${page}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        setData(res.data.data.data);
        setMeta(res.data.data.meta);

    }

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <Layout>
            <div className="flex flex-wrap">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
                    >
                        <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                            <div className="flex items-center">
                                <div className=" rounded-lg p-3">
                                    <Image
                                        src="/login.svg"
                                        alt="Doctor Avatar"
                                        width="0"
                                        height="0"
                                        className="w-32 h-auto"
                                    />
                                </div>

                                <div className="ml-1">
                                    <a href="#">
                                        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                            {item.name}
                                        </h3>
                                    </a>
                                    <p className="text-sm text-gray-500">
                                        Department: {item.department}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Experience: {item.experience} years
                                    </p>
                                </div>
                            </div>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {item.bio}
                            </p>

                            <a
                                href="#"
                                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                            >
                                Appointment
                                <span
                                    aria-hidden="true"
                                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    &rarr;
                                </span>
                            </a>
                        </article>
                    </div>
                ))
                }
            </div >
            <Pagination meta={meta} onPageChange={handlePageChange} />
        </Layout >

    )
}


export default Page;