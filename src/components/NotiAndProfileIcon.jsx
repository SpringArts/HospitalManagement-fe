"use client";
import { BellSimple, UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NotiAndProfileIcon({ className }) {
    const pathname = usePathname();
    let notiPath = "/user/notification";
    let profilePath = "/user/profile";
    let colorCode = "#27272a";
    return (
        <div
            className={`flex gap-3 md:gap-5 justify-center items-center ${className}`}
        >
            <Link href={notiPath}>
                <BellSimple
                    size={28}
                    weight={`${pathname === notiPath ? "fill" : "regular"}`}
                    color={colorCode}
                />
            </Link>
            <Link href={profilePath}>
                <UserCircle
                    size={28}
                    weight={`${pathname === profilePath ? "fill" : "regular"}`}
                    color={colorCode}
                />
            </Link>
        </div>
    );
}
