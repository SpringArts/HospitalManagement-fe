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
        <div className="flex flex-col md:flex-row  mt-5 justify-center mb-4 sm:justify-start gap-5 ">
            {userInfo ? (
                <>
                    <div className=" h-auto mx-auto w-28  md:w-44 rounded-full md:mx-0">
                        <Image
                            alt="Profile Image"
                            src={profileImg}
                            width={320}
                            height={320}
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-col ">
                        <h2 className="font-semibold text-center  md:text-left text-zinc-800 text-xl md:text-2xl">
                            {userInfo.name}
                        </h2>
                        <p className="text-zinc-600 text-center md:text-left text-base md:text-xl">
                            {userInfo.email}
                        </p>
                    </div>
                </>
            ) : (
                <>Loading your profile</>
            )}
        </div>
    );
}

export default UserProfile;
