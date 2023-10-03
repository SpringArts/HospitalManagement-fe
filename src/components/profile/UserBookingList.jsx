"use client";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import AppointmentCard from "./AppointmentCard";

export default function UserBookingList({ selectedButton }) {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(null);

    const token = Cookies.get("token");

    const fetchData = async () => {
        try {
            const res = await axios.get("/appointments", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            let filteredAppointments = res.data.data;

            if (selectedButton === 1) {
                filteredAppointments = filteredAppointments.filter(
                    (appointment) =>
                        appointment.status === "upcoming" &&
                        appointment.is_visible === 1,
                );
            } else if (selectedButton === 2) {
                filteredAppointments = filteredAppointments.filter(
                    (appointment) =>
                        appointment.status === "complete" &&
                        appointment.is_visible === 1,
                );
            } else if (selectedButton === 3) {
                filteredAppointments = filteredAppointments.filter(
                    (appointment) => appointment.is_visible === 0,
                );
            }

            setAppointments(filteredAppointments);
        } catch (error) {
            setError("Error fetching data. Please try again later.");
        }
    };

    useEffect(() => {
        fetchData();
    }, [selectedButton]);

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
                          fetchData={fetchData}
                          is_visible={appointment.is_visible}
                          status={appointment.status}
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
