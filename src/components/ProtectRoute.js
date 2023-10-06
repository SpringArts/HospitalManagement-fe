"use client";
import { useEffect } from "react"; // Import useEffect
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
export default function ProtectRoute() {
    const pathName = usePathname();
    const router = useRouter();
    const params = useParams();
    const token = Cookies.get("token");
    // const [userInfo, setUserInfo] = useState(null);

    const getStartingRoute = (pathname) => {
        const parts = pathname.split("/");
        return `/${parts[1]}`;
    };
    const encodedUserInfo = Cookies.get("user_info");

    // Use useEffect to perform navigation after rendering
    useEffect(() => {
        // Use useEffect to perform navigation after rendering
        if (!token) {
            if (pathName === "/auth/register") {
                // Allow registration page when no token is present
                return;
            } else {
                // Redirect to login page when no token is present
                router.push("/auth/login");
            }
        } else if (token) {
            if (encodedUserInfo) {
                // URL-decode the string to get the JSON data
                const decodedUserInfo = decodeURIComponent(encodedUserInfo);

                try {
                    // Parse the JSON string into a JavaScript object
                    const userInfoObject = JSON.parse(decodedUserInfo);
                    if (
                        getStartingRoute(pathName) == "/user" ||
                        userInfoObject.role == "admin"
                    ) {
                        return;
                    } else {
                        router.push("/user");
                    }
                } catch (error) {
                    console.error("Error parsing user_info:", error);
                }
            }
        }
    }, [token, router]);
    return null;
}
