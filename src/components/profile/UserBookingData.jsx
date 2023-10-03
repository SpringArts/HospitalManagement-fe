"use client";
import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import UserBookingList from "./UserBookingList";
export default function UserBookingData() {
    const token = Cookies.get("token");
    const [selectedButton, setSelectedButton] = useState(1);
    const [dynamicData, setDynamicData] = useState([]);
    const activeStyle = "border-green-600 border-b-2 text-green-500";
    const defStyle = "text-gray-500 hover:border-gray-300 hover:text-gray-700";
    const handleButtonClick = (number) => {
        setDynamicData(number);
        setSelectedButton(number);
    };
    const fetchData = async () => {
        const res = await axios.get("/appointments", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(res);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="mt-6">
            <div className="border-b border-gray-200">
                <nav
                    className="-mb-px justify-center flex gap-6 md:gap-12"
                    aria-label="Tabs"
                >
                    <button
                        className={`shrink-0  px-1 pb-4 text-sm md:text-base font-medium  ${
                            selectedButton === 1 ? activeStyle : defStyle
                        }`}
                        onClick={() => handleButtonClick(1)}
                    >
                        Upcomming
                    </button>

                    <button
                        className={`shrink-0   px-1 pb-4 text-sm md:text-base font-medium ${
                            selectedButton === 2 ? activeStyle : defStyle
                        }`}
                        onClick={() => handleButtonClick(2)}
                    >
                        Completed
                    </button>

                    <button
                        className={`shrink-0 px-1 pb-4 text-sm md:text-base font-medium ${
                            selectedButton === 3 ? activeStyle : defStyle
                        }`}
                        onClick={() => handleButtonClick(3)}
                    >
                        Cancelled
                    </button>
                </nav>
            </div>
            <UserBookingList
                selectedButton={selectedButton}
                dynamicData={dynamicData}
            />
        </div>
    );
}
