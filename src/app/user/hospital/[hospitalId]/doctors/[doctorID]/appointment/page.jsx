// pages/index.js
;
import Layout from "@/app/user/Layout";
import React from "react";

const Page = () => {
    return (
        <Layout>
            <div className="flex justify-center items-center h-screen">
                <form className="bg-white p-8 rounded shadow-lg w-96">
                    <h2 className="text-2xl font-semibold mb-4">Schedule an Appointment</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Date</label>
                        <input
                            type="date"
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Time</label>
                        <input
                            type="time"
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                    >
                        Schedule
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Page;
