'use client';
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {

  const router = useRouter();
    const [code , setCode] = useState("");
    const [password , setPassword] = useState("");
    const [password_confirmation , setPasswordConfirmation] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await axios.post(`http://127.0.0.1:8000/api/password/reset`, {
                code , password , password_confirmation
            }).then((response)=>{
                console.log(response)
                toast.success(response.message)
                router.push("/auth/login")
            })
        }catch(error){
            if (error.response && error.response.status === 422) {
                const validationErrors = error.response.data.errors;
                toast.error("Validation errors:", validationErrors);
            } else {
                toast.error("Registration error:", error.message);
            }
        }
    }

    return (
        <div className="overflow-hidden">
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="min-w-full h-screen relative bg-gradient-to-br from-teal-300 to-blue-500 p-5">
                    <div className="flex h-screen flex-col sm:flex-row items-center justify-center sm:pl-6 md:pl-24 ">
                        <div className="w-full sm:w-96 rounded-lg shadow-lg p-6 sm:p-10 bg-[#C1F8FC]">
                            <form
                                className="flex flex-col w-full max-w-sm mx-auto px-4 py-8 bg-white shadow-md rounded-lg"
                                onSubmit={handleSubmit}
                            >
                                <h1 className="text-2xl font-bold mb-4">
                                    Reset Password
                                </h1>
                                <p className="text-gray-600 mb-4">
                                    Enter your reset password code that we sent to your mail
                                </p>
                                <input
                                    type="number"
                                    value={code}
                                    onChange={(e)=>setCode(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500 mb-4"
                                    placeholder="Reset Code"
                                />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500 mb-4"
                                    placeholder="Enter new password"
                                />
                                <input
                                    type="password"
                                    value={password_confirmation}
                                    onChange={(e)=>setPasswordConfirmation(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500 mb-4"
                                    placeholder="Reenter your password"
                                />
                                <button
                                    type="submit"
                                    className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                                >
                                    Send
                                </button>
                            </form>
                        </div>

                        <div className="flex items-center p-3 mt-4 md:ml-48">
                            <Image
                                className="relative hidden md:block"
                                src="/login.svg"
                                alt="Register Logo"
                                width={750}
                                height={750}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
