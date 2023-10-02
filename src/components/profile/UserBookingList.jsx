"use client";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import AppointmentCard from "./AppointmentCard";
export default function UserBookingList() {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(null);

    // Function to format date as "Oct 25, 2023" and use the appointment time

    const fetchData = async () => {
        try {
            const res = await axios.get(`/appointments`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            setAppointments(res.data.data);
        } catch (error) {
            setError("Error fetching data. Please try again later.");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    const rearrangeAppointments = (appointmentData) => {
        return appointmentData.sort((a, b) => {
            const dateTimeA = new Date(
                `${a.appointmentDate}T${a.appointmentTime}`,
            );
            const dateTimeB = new Date(
                `${b.appointmentDate}T${b.appointmentTime}`,
            );
            return dateTimeA - dateTimeB;
        });
    };

    const sortedAppointments = rearrangeAppointments(appointments);
    return (
        <div className="grid grid-cols-1 mt-5">
            {error && <div className="text-red-500">{error}</div>}
            {sortedAppointments
                ? sortedAppointments.map((appointment) => (
                      <AppointmentCard
                          key={appointment.id}
                          id={appointment.id}
                          appointmentDate={appointment.appointmentDate}
                          appointmentTime={appointment.appointmentTime}
                          doctorName={appointment.doctorName}
                          doctorLocation={appointment.doctorLocation}
                          bookingId={appointment.bookingId}
                      />
                  ))
                : null}
        </div>
    );
}
