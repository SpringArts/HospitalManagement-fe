import Link from "next/link";
import React from "react";
import Image from "next/image";
import { User, Users, Calendar, Home as HomeIcon } from "react-feather";
import {FaRegHospital} from 'react-icons/fa'
import {PiUsersFour} from 'react-icons/pi'
import {FcCalendar} from 'react-icons/fc'
import Layout from "../../components/doctor/Layout";

const InfoCard = ({ title, count, icon: Icon, color }) => {
    return (
        <div className={`bg-${color}-200 p-6 rounded-lg shadow-md flex items-center transition duration-300 ease-in-out transform hover:scale-105`}>
            <Icon className={`text-${color}-500 text-3xl mr-4`} />
            <div>
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-3xl font-bold">{count}</p>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <Layout title='Dashboard'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InfoCard title="Hospitals" count={11} icon={HomeIcon} color="white" />
                <InfoCard title="Patients" count={4} icon={Users} color="white" />
                <InfoCard title="Appointments" count={2} icon={Calendar} color="white" />
                {/* 
                <div className="flex items-center shadow p-3 rounded">
                    <FaRegHospital size={50} className="mr-3"/>
                    <div>
                        <p>Hospitals</p>
                        <p>12</p>
                    </div>
                </div>
                <div className="flex items-center shadow p-3 rounded">
                    <PiUsersFour size={50} className="mr-3"/>
                    <div>
                        <p>Patients</p>
                        <p>12</p>
                    </div>
                </div>
                <div className="flex items-center shadow p-3 rounded">
                    <FcCalendar size={50} className="mr-3"/>
                    <div>
                        <p>Hospitals</p>
                        <p>12</p>
                    </div>
                </div> 
                */}
            </div>
        </Layout>
    );
};

export default Home;
