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
                        <a
                            href="/superadmin"
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            General
                        </a>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm font-medium">
                                    {" "}
                                    Hospitals{" "}
                                </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <Link
                                        href="/superadmin/hospitals"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Hospitals List
                                    </Link>
                                </li>

                                <li>
                                    <a
                                        href="/superadmin/hospitals/create"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Create
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm font-medium">
                                    {" "}
                                    Doctors{" "}
                                </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <Link
                                        href="/superadmin/doctors"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Doctor Lists
                                    </Link>
                                </li>

                                <li>
                                    <a
                                        href="/superadmin/doctors/create"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Create
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm font-medium">
                                    {" "}
                                    Patients{" "}
                                </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <Link
                                        href="/superadmin/patients"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Patient Lists
                                    </Link>
                                </li>

                                <li>
                                    <a
                                        href="/superadmin/patients/create"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Create
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm font-medium">
                                    {" "}
                                    Departments{" "}
                                </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <Link
                                        href="/superadmin/management"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Department Lists
                                    </Link>
                                </li>

                                <li>
                                    <a
                                        href="/superadmin/management/create"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Create
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>


                    {/* <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm font-medium">
                                    {" "}
                                    Account{" "}
                                </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <a
                                        href=""
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Details
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href=""
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Security
                                    </a>
                                </li>

                                <li>
                                    <form action="/logout">
                                        <button
                                            type="submit"
                                            className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                                        >
                                            Logout
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </details>
                    </li> */}
                </ul>
            </div>

            <UserProfile />
        </div>
    );
};

export default Sidebar;
