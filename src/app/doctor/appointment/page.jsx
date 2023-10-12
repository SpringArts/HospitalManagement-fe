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

  return (
    <Layout title="Appointment">
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