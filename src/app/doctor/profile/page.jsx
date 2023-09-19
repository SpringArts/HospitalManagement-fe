import Layout from "@/components/doctor/Layout";
import React from "react";
import Image from "next/image";

const ProfilePage = () => {
    return (
        <Layout title="Profile">
            <div className=" shadow p-3 rounded">
                <div className="mb-5">
                    <Image className="rounded-full border-[#fff] border-2 mx-auto" alt='Doctor Profile' width={250} height={250} src='/doctor.webp'/>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="mb-2">Doctor Care</div>
                    <div className="mb-2">099855852588</div>
                    <div className="mb-2">doctor@gmail.com</div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;
