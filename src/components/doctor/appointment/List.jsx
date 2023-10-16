"use client"

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Cookies from "js-cookie";

const List = () => {
    const [appointmentData, setAppointmentData] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [error, setError] = useState(null);
    const token = Cookies.get("token");
    const user = JSON.parse(Cookies.get("user_info"));

    const httpRequest = useCallback(async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/dashboard/doctor/${user.id}/appointments?page=${currentPage}&perPage=${itemsPerPage}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })

        if (!response.ok) {
            setError('Something wrong.')
            return
        }
        const responseData = await response.json()
        setAppointmentData(responseData.data)
    }, [currentPage, itemsPerPage, token, user.id])

    useEffect(() => {
        httpRequest()
    }, [currentPage, httpRequest])

    const formatDateTime = (dateString, timeString) => {
        const appointmentDate = new Date(dateString);
        const optionsDate = { month: "short", day: "numeric", year: "numeric" };
        const formattedDate = appointmentDate.toLocaleDateString(
            "en-US",
            optionsDate,
        );

        const [hours, minutes] = timeString.split(":");
        const formattedTime = `${Number(hours) % 12 || 12}:${minutes} ${hours >= 12 ? "PM" : "AM"
            }`;

        return `${formattedDate} - ${formattedTime}`;
    };

    return (
        <div className="p-6 bg-white shadow rounded-xl">
            <h1>Appointments</h1>
            {
                appointmentData && appointmentData.map(appointment => (
                    <div key={appointment.id} className="shadow bg-zinc-50 border rounded-xl p-3 mt-5">
                        <h2 className="text-base mb-2 font-medium text-zinc-700">
                            {formatDateTime(appointment.appointmentTime, appointment.appointmentDate)}
                        </h2>
                        <hr />
                        <div className="flex py-3 px-1.5 gap-3">
                            <Image
                                alt="doctor image"
                                width={100}
                                height={100}
                                src="/doctor.webp"
                                className="bg-gray-200 w-20 h-20 rounded-2xl p-3"
                            />
                            <div className="flex gap-1 flex-col">
                                <h1 className="text-lg text-zinc-800">
                                    {appointment.patientName}
                                </h1>
                                <div className="flex gap-1">
                                    {/* <MapPin size={20} color="#006400" /> */}
                                    <p className="text-sm text-zinc-500">
                                        {appointment.description ? appointment.description.substr(0, 100) : ''}
                                    </p>
                                </div>
                                <div className="flex gap-1">
                                    {/* <IdentificationCard size={20} color="#006400" /> */}
                                    <p className="text-sm text-zinc-500">
                                        Booking ID :{" "}
                                        <span className="text-green-600">
                                            #{appointment.bookingId}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default List;
