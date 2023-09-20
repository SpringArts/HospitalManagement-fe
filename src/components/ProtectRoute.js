"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export default function ProtectRoute() {
    const router = useRouter();
    const token = Cookies.get("token");
    const user = JSON.stringify(Cookies.get("user_info"));
    console.log("token", token);
    if (!token) {
        router.push("/auth/login");
    } else if (token) {
        router.push("/user");
    } else {
        if (user?.role === "admin") {
            router.push("/dashboard");
        }
    }
}
