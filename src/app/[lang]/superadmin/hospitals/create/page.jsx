"use client";
import React, { useState } from "react";
import Layout from "../../Layout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";
import useLang from "@/hooks/use-lang";

const Create = () => {
    const router = useRouter();
    const token = Cookies.get("token");
    const [isLoading, setIsLoading] = useState(false);
    const { langVar } = useLang()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios
                .post(
                    "http://127.0.0.1:8000/api/hospitals",
                    { name, email, phone, address, location, bio },
                    {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                )
                .then((response) => {
                    router.push("/superadmin/hospitals");
                    toast.success("The hospital is created successfully.");
                    setIsLoading(false)
                });
        } catch (error) {
            if (error.response && error.response.status === 422) {
                toast.error(error.response.data.errors);
            } else {
                toast.error(error.message);
            }
        }
    };

    return (
        <Layout>
            <div className="bg-gray-100 h-screen">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <h3 className="text-lg font-semibold tracking-wider my-3 text-center">
                                {langVar?.admin.create_hospital}
                            </h3>
                            <form
                                action=""
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div>
                                    <label className="sr-only" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                        placeholder={langVar?.admin.enter_name}
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="name">
                                        Email
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                        placeholder={langVar?.admin.enter_email}
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="name">
                                        Phone
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                        placeholder={langVar?.admin.enter_phone}
                                        type="number"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="name">
                                        Address
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                        placeholder={langVar?.admin.enter_address}
                                        type="text"
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="name">
                                        Location
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                        placeholder={langVar?.admin.enter_location}
                                        type="text"
                                        value={location}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label
                                        className="sr-only"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>

                                    <textarea
                                        className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                        placeholder={langVar?.admin.enter_description}
                                        rows="8"
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value)}
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4 flex gap-x-3">
                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        className="inline-block w-full rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out hvoer:border bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        {langVar?.admin.create}
                                    </button>
                                    <button
                                        onClick={() => router.back()}
                                        className="inline-block w-full rounded-lg  px-5 py-3 font-medium hover:text-yellow-700 text-yellow-500 sm:w-auto"
                                    >
                                        {langVar?.admin.cancel}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Create;
