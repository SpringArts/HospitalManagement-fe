"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import profileImg from "../../public/images/userProfile.png";
import Link from "next/link";
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
        <div className="flex justify-center md:justify-start gap-5 ">
            {userInfo ? (
                <>
                    <div className=" h-auto w-28  md:w-44 rounded-full">
                        <Image
                            src={profileImg}
                            width={320}
                            height={320}
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-col ">
                        <h2 className="font-semibold text-zinc-800 text-lg md:text-2xl">
                            {userInfo.name}
                        </h2>
                        <p className="text-zinc-600 text-base md:text-xl">
                            {userInfo.email}
                        </p>
                        <Link
                            className="font-semibold rounded-lg text-center mt-auto text-white px-4 py-2 bg-green-500 md:mt-5"
                            href={"/user/profile/edit-profile"}
                        >
                            Edit Profile
                        </Link>
                    </div>
                </>
            ) : (
                <>Loading your profile</>
            )}
        </div>
    );
}

export default UserProfile;
