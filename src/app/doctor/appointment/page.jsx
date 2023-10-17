'use client'
import Layout from '@/components/doctor/Layout'
import axios from '@/lib/axios';
import React , { useState , useEffect } from 'react'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast';
import AppointmentCard from '@/components/doctor/AppointmentCard';

const page = () => {
    const token = Cookies.get("token")
    const [appointmentLists , setAppointmentLists] = useState([]);

const getAllAppointmentForDoctor = async() =>{
    try {
        await axios
            .get(`/today-appointment`, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                // console.log(response)
                setAppointmentLists(response.data.data)
                // setMessages(response.data.message.messages);
            });
    } catch (error) {
        toast.error(error);
        console.log(error);
    }
}

useEffect(()=>{
    getAllAppointmentForDoctor()
},[])

const exportHttp = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/appointment/export`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        },
    );

    if (!response.ok) {
        setError("Something wrong.");
        return;
    }

    const filename = 'appointments.xlsx';
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

  return (
    <Layout title="Appointment">
        <div className='flex justify-end'>
            <div className="my-5">
                <button onClick={exportHttp} className="bg-gray-500 text-white px-3 py-3 rounded-md">
                    Download Appointment Excel
                </button>
            </div>
        </div>
        <div className="grid grid-cols-1 mt-5">
            {/* {error && <div className="text-red-500">{error}</div>} */}
            {appointmentLists
                ? appointmentLists?.map((appointment) => (
                    <AppointmentCard
                        key={appointment.id}
                        id={appointment.id}
                        // fetchData={fetchData}
                        is_visible={appointment.is_visible}
                        status={appointment.status}
                        appointmentDate={appointment.appointmentDate}
                        appointmentTime={appointment.appointmentTime}
                        patientId={appointment.patientId}
                        doctorId={appointment.doctorId}
                        doctorName={appointment.patientName ?? 'Unknown'}
                        doctorLocation={appointment.doctorLocation}
                        bookingId={appointment.bookingId}
                        appointmentType={appointment.appointmentType}
                    />
                    // <div>Shi tl</div>
                ))
                : null}
        </div>
    </Layout>
  )
}

export default page