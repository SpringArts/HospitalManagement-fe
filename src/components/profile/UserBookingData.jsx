"use client";
import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import UserBookingList from "./UserBookingList";
import toast from "react-hot-toast";
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
        try {
            const res = await axios.get("/appointments", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            toast.error(error.response.data.message
                
        )
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="mt-6 border-b border-gray-200 pb-4">
            <nav className="flex justify-center gap-8">
                <button
                    className={`text-sm md:text-base font-medium transition duration-300 ${selectedButton === 1 ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-500'
                        } hover:text-pink-500 hover:border-pink-500 focus:outline-none focus:text-pink-500 focus:border-pink-500`}
                    onClick={() => handleButtonClick(1)}
                >
                    Upcoming
                </button>

                <button
                    className={`text-sm md:text-base font-medium transition duration-300 ${selectedButton === 2 ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                        } hover:text-blue-500 hover:border-blue-500 focus:outline-none focus:text-blue-500 focus:border-blue-500`}
                    onClick={() => handleButtonClick(2)}
                >
                    Completed
                </button>

                <button
                    className={`text-sm md:text-base font-medium transition duration-300 ${selectedButton === 3 ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'
                        } hover:text-green-500 hover:border-green-500 focus:outline-none focus:text-green-500 focus:border-green-500`}
                    onClick={() => handleButtonClick(3)}
                >
                    Cancelled
                </button>
            </nav>
            <div className="mt-4">
                <UserBookingList selectedButton={selectedButton} dynamicData={dynamicData} />
            </div>
        </div>

    );
}
