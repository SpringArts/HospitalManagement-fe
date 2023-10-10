import React from "react";
import { User, Users, Calendar, Home as HomeIcon } from "react-feather";
import { FaRegHospital } from "react-icons/fa";
import { PiUsersFour } from "react-icons/pi";
import { FcCalendar } from "react-icons/fc";
import Layout from "../../components/doctor/Layout";
import List from "@/components/doctor/appointment/List";


const InfoCard = ({ title, count, icon: Icon, color }) => {
    return (
        <div
            className={`bg-${color}-200 p-6 rounded-lg shadow-md flex items-center transition duration-300 ease-in-out transform hover:scale-105`}
        >
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
        <Layout title="Dashboard">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <InfoCard
                    title="Hospitals"
                    count={11}
                    icon={HomeIcon}
                    color="white"
                />
                <InfoCard
                    title="Patients"
                    count={4}
                    icon={Users}
                    color="white"
                />
                <InfoCard
                    title="Appointments"
                    count={2}
                    icon={Calendar}
                    color="white"
                />
            </div>
            {/* APPOINTMENTS */}
            <List/>
        </Layout>
    );
};

export default Home;
