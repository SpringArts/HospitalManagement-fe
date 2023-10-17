import React from "react";
import UserProfile from "./UserProfile";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="flex h-screen overflow-hidden sticky flex-col justify-between border-e bg-white">
            <div className="px-4 py-6">
                <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                    Logo
                </span>

                <ul className="mt-6 space-y-1">
                    <li>
                        <Link
                            href="/doctor"
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            General
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/doctor/profile"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Profile
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/doctor/hospital"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Connected Hospitals
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/doctor/patient"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Patients
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/doctor/appointment"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Appointments
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/user/hospital"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            HOME
                        </Link>
                    </li>
                </ul>
            </div>
            <UserProfile />
        </div>
    );
};

export default Sidebar;
