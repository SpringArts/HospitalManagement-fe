import Link from "next/link";
import React from "react";
import Image from "next/image";
import {FaRegHospital} from 'react-icons/fa'
import {PiUsersFour} from 'react-icons/pi'
import {FcCalendar} from 'react-icons/fc'
import Layout from "../../components/doctor/Layout";

const Home = () => {
    return (
        <Layout title='Dashboard'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center bg-[#eee] p-3 rounded">
                    <FaRegHospital size={50} className="mr-3"/>
                    <div>
                        <p>Hospitals</p>
                        <p>12</p>
                    </div>
                </div>
                <div className="flex items-center bg-[#eee] p-3 rounded">
                    <PiUsersFour size={50} className="mr-3"/>
                    <div>
                        <p>Patients</p>
                        <p>12</p>
                    </div>
                </div>
                <div className="flex items-center bg-[#eee] p-3 rounded">
                    <FcCalendar size={50} className="mr-3"/>
                    <div>
                        <p>Hospitals</p>
                        <p>12</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
