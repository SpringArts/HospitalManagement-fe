"use client";
import { useEffect } from "react"; // Import useEffect
import { Redirect } from "next";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
export default function ProtectRoute() {
    const pathName = usePathname();
    const router = useRouter();
    const params = useParams();
    const token = Cookies.get("token");
    const user = JSON.stringify(Cookies.get("user_info"));

    const getStartingRoute = (pathname) => {
        const parts = pathname.split("/");
        return `/${parts[1]}`;
    };
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
            // if (getStartingRoute(pathName) == "/user") {
            //     return;
            // }
            // router.push("/user");
        }
    }, [token, user, router]);
    return null;
}
