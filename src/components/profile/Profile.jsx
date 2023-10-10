"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import profileImg from "../../../public/images/userProfile.png";
import { useEffect, useState } from "react";

function UserProfile() {
    const [userInfo, setUserInfo] = useState(null);

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
                    </div>
                </>
            ) : (
                <p className="text-zinc-600">Loading your profile...</p>
            )}
        </div>

    );
}

export default UserProfile;
