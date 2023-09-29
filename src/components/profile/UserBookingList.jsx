"use client";
import Image from "next/image";
import profileImg from "../../../public/images/doctor.png";
import { IdentificationCard, MapPin } from "@phosphor-icons/react";
export default function UserBookingList() {
    return (
        <div className="gird grid-col-1 sm:grid-col-2 mt-5">
            <div className="shadow bg-zinc-50 border rounded-xl p-2 mt-5">
                <h2 className="text-base mb-2 font-medium text-zinc-700">
                    Oct 25, 2023 - 10:00 AM
                </h2>
                <hr />
                <div className="flex py-3 px-1.5 gap-3">
                    <Image
                        width={100}
                        height={100}
                        src={profileImg}
                        className="bg-gray-200 w-20 h-20 rounded-2xl p-3"
                    />
                    <div className="flex gap-1 flex-col">
                        <h1 className="text-lg text-zinc-800">Dr.Mg Mg</h1>
                        <div className="flex gap-1">
                            <MapPin size={20} color="#006400" />
                            <p className="text-sm text-zinc-500">
                                Shwe Gone Tine Rd. Yangon
                            </p>
                        </div>
                        <div className="flex gap-1">
                            <IdentificationCard size={20} color="#006400" />
                            <p className="text-sm text-zinc-500">
                                Booking ID :{" "}
                                <span className="text-green-600">#290435</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow mt-8 bg-zinc-50 border rounded-xl p-2">
                <h2 className="text-base mb-2 font-medium text-zinc-700">
                    Oct 25, 2023 - 10:00 AM
                </h2>
                <hr />
                <div className="flex py-3 px-1.5 gap-3">
                    <Image
                        width={100}
                        height={100}
                        src={profileImg}
                        className="bg-gray-100 w-20 h-20 rounded-md p-3"
                    />
                    <div className="flex gap-1 flex-col">
                        <h1 className="text-lg text-zinc-800">Dr.Mg Mg</h1>
                        <div className="flex gap-1">
                            <MapPin size={20} color="#006400" />
                            <p className="text-sm text-zinc-500">
                                Shwe Gone Tine Rd. Yangon
                            </p>
                        </div>
                        <div className="flex gap-1">
                            <IdentificationCard size={20} color="#006400" />
                            <p className="text-sm text-zinc-500">
                                Booking ID :{" "}
                                <span className="text-green-600">#290435</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow mt-8 bg-zinc-50 border rounded-xl p-2">
                <h2 className="text-base mb-2 font-medium text-zinc-700">
                    Oct 25, 2023 - 10:00 AM
                </h2>
                <hr />
                <div className="flex py-3 px-1.5 gap-3">
                    <Image
                        width={100}
                        height={100}
                        src={profileImg}
                        className="bg-gray-100 w-20 h-20 rounded-md p-3"
                    />
                    <div className="flex gap-1 flex-col">
                        <h1 className="text-lg text-zinc-800">Dr.Mg Mg</h1>
                        <div className="flex gap-1">
                            <MapPin size={20} color="#006400" />
                            <p className="text-sm text-zinc-500">
                                Shwe Gone Tine Rd. Yangon
                            </p>
                        </div>
                        <div className="flex gap-1">
                            <IdentificationCard size={20} color="#006400" />
                            <p className="text-sm text-zinc-500">
                                Booking ID :{" "}
                                <span className="text-green-600">#290435</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
