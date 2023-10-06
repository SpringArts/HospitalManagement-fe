import Layout from "@/components/hospital/Layout";
import React from "react";
import { User, Users, Calendar } from "react-feather";

const InfoCard = ({ title, count, icon: Icon, color }) => {
    return (
        <div className={`bg-${color}-200 p-6 rounded-lg shadow-md flex items-center`}>
            <Icon className={`text-${color}-500 text-3xl mr-4`} />
            <div>
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-3xl font-bold">{count}</p>
            </div>
        </div>
    );
};

const Dashboard = () => {
    return (
        <Layout>
            <div className="container mx-auto mt-10">
                <h1 className="text-3xl font-semibold mb-6">Welcome Admin! Manage your hospital operations with ease.</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoCard title="Doctor Count" count={10} icon={User} color="blue" />
                    <InfoCard title="Patient Count" count={100} icon={Users} color="green" />
                    <InfoCard title="Appointment Count" count={50} icon={Calendar} color="yellow" />
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
