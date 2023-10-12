'use client'
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import profileImg from "../../../public/images/userProfile.png";

import { useRouter } from "next/navigation";
import axios from "@/lib/axios";

function UserProfile() {
    const [userInfo, setUserInfo] = useState(null);
    const router = useRouter();
    useEffect(() => {
        // Retrieve the encoded 'user_info' from cookies
        const encodedUserInfo = Cookies.get("user_info");

        if (encodedUserInfo) {
            // URL-decode the string to get the JSON data
            const decodedUserInfo = decodeURIComponent(encodedUserInfo);

            try {
                // Parse the JSON string into a JavaScript object
                const userInfoObject = JSON.parse(decodedUserInfo);
                setUserInfo(userInfoObject);
            } catch (error) {
                console.error("Error parsing user_info:", error);
            }
        }
    }, []);

    const handleLogout = async () => {
        try {
            // Send a POST request to the /logout endpoint
            await axios.post("/logout", null, {
                headers: {
                    Accept: "application/json",
                    ContentType: "application/json",
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });

            // Clear the user_info cookie and redirect to the login page
            Cookies.remove("user_info");
            Cookies.remove('token');
            router.push("/auth/login");

        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center mt-5 space-y-2 md:space-y-0 md:space-x-4">
            {userInfo ? (
                <>
                    <div className="h-32 w-32 md:h-44 md:w-44 rounded-full overflow-hidden">
                        <Image
                            alt="Profile Image"
                            src={profileImg}
                            width={320}
                            height={320}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="font-semibold text-zinc-800 text-xl md:text-2xl">
                            {userInfo.name}
                        </h2>
                        <p className="text-zinc-600 text-base md:text-xl">
                            {userInfo.email}
                        </p>
                        <button
                            className="bg-zinc-600 text-white px-4 py-2 rounded-md hover:bg-zinc-700 block mt-4"
                            onClick={handleLogout} // Add onClick event handler
                        >
                            Logout
                        </button>
                    </div>
                </>
            ) : (
                <p className="text-zinc-600">Loading your profile...</p>
            )}
        </div>
    );
}

export default UserProfile;
