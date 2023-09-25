"use client";
import { useEffect } from "react"; // Import useEffect
import { Redirect } from "next";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";

export default function ProtectRoute() {
    const pathName = usePathname();
    const router = useRouter();
    const token = Cookies.get("token");
    const user = JSON.stringify(Cookies.get("user_info"));

    useEffect(() => {
        // Use useEffect to perform navigation after rendering
        if (!token) {
            if (pathName === "/auth/register") {
                console.log(pathName);
            } else {
                router.push("/auth/login");
            }
        } else {
            const userInfo = JSON.parse(user); // Parse the user_info JSON
            if (userInfo?.role === "admin") {
                router.push("/dashboard");
            }
        }
    }, []); // Empty dependency array means this effect runs once after the initial render
    console.log(pathName);
    // Return null or any other content as needed
    return null;
}
