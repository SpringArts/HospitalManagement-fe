"use client";
import { Logo } from "./Svg";
import { useState, useEffect } from "react";
import Link from "next/link";
import ToggleBtn from "./ToggleBtn";
import NotiAndProfileIcon from "./NotiAndProfileIcon";

export const metadata = {
    title: "Home",
    description: "Booking now",
};

export default function Navbar({ NavbarTitle }) {
    const [open, setOpen] = useState(false);
    const [scrollShadow, setScrollShadow] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrollShadow(true);
        } else {
            setScrollShadow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`w-full bg-white sticky top-0 overflow-hidden z-50     ${
                scrollShadow ? "shadow-sm" : ""
            }`}
        >
            <div className="grid text-center md:grid-cols-3  py-2 px-2 mx-auto lg:max-w-7xl md:px-8">
                <div className="grid grid-cols-3 md:hidden gap-2 py-2 md:py-5 ">
                    <ToggleBtn toggleMenu={toggleMenu} open={open} />
                    <Link
                        className=" w-full text-center flex items-center justify-center"
                        href={"/user"}
                    >
                        <Logo className={"w-7"} />
                    </Link>
                    <NotiAndProfileIcon />
                </div>
                <div className="w-full flex justify-center">
                    <Logo className={"md:block hidden w-9"} />
                </div>

                <div
                    className={`flex flex-row w-full rounded-xl items-center justify-between py-2 md:bg-transparent md:block bg-gray-100 ${
                        open ? "block " : "hidden"
                    }`}
                >
                    <ul className="items-center gap-4 h-auto w-full flex flex-col justify-between md:flex-row ">
                        {NavbarTitle.map((item) => (
                            <Link
                                onClick={toggleMenu}
                                className={`text-base text-zinc-700 text-center py-1 px-3 font-normal hover:text-green-600 w-full`}
                                href={item.to}
                                key={item.id}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </div>
                <NotiAndProfileIcon className={"md:inline-flex hidden"} />
            </div>
        </nav>
    );
}
