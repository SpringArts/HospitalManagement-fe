import React from "react";
import Image from "next/image";
import profileImg from "../../../public/images/doctor.png";
import { IdentificationCard, MapPin } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import Cookies from "js-cookie";

const AppointmentCard = ({
    id,
    appointmentDate,
    appointmentTime,
    doctorName,
    doctorLocation,
    bookingId,
    status,
    fetchData,
    is_visible,
}) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [cancelActionTriggered, setCancelActionTriggered] = useState(false);
    const formatDateTime = (dateString, timeString) => {
        const appointmentDate = new Date(dateString);
        const optionsDate = { month: "short", day: "numeric", year: "numeric" };
        const formattedDate = appointmentDate.toLocaleDateString(
            "en-US",
            optionsDate,
        );

        const [hours, minutes] = timeString.split(":");
        const formattedTime = `${Number(hours) % 12 || 12}:${minutes} ${
            hours >= 12 ? "PM" : "AM"
        }`;

        return `${formattedDate} - ${formattedTime}`;
    };
    const handleCancelAppointment = async () => {
        setIsUpdating(true);

        try {
            const headers = {
                Authorization: `Bearer ${Cookies.get("token")}`,
            };

            await axios.delete(`/appointments/${id}`, {
                headers,
            });
            setCancelActionTriggered(true);
            console.log("sucess");
            setIsUpdating(false);
        } catch (error) {
            setIsUpdating(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [cancelActionTriggered]);

    console.log(status);

    return (
        <div className="shadow bg-zinc-50 border rounded-xl p-3 mt-5">
            <h2 className="text-base mb-2 font-medium text-zinc-700">
                {formatDateTime(appointmentDate, appointmentTime)}
            </h2>
            <hr />
            <div className="flex py-3 px-1.5 gap-3">
                <Image
                    alt="doctor image"
                    width={100}
                    height={100}
                    src={profileImg}
                    className="bg-gray-200 w-20 h-20 rounded-2xl p-3"
                />
                <div className="flex gap-1 flex-col">
                    <h1 className="text-lg text-zinc-800">{doctorName}</h1>
                    <div className="flex gap-1">
                        <MapPin size={20} color="#006400" />
                        <p className="text-sm text-zinc-500">
                            {doctorLocation.join(", ")}
                        </p>
                    </div>
                    <div className="flex gap-1">
                        <IdentificationCard size={20} color="#006400" />
                        <p className="text-sm text-zinc-500">
                            Booking ID :{" "}
                            <span className="text-green-600">#{bookingId}</span>
                        </p>
                    </div>
                </div>
            </div>
            {is_visible === 0 ? null : (
                <>
                    <hr />
                    <button
                        onClick={handleCancelAppointment}
                        className="bg-red-500 mt-2 w-full md:w-1/3 text-white px-3 py-3 rounded-md hover:bg-red-600"
                    >
                        {isUpdating ? "Cancelling..." : "Cancel"}
                    </button>
                </>
            )}
        </div>
    );
};

export default AppointmentCard;
