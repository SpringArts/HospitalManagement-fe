"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {AiOutlineMenu} from 'react-icons/ai'
import Sidebar from "./Sidebar";

const Layout = (props) => {
    const [sidebar, setSidebar] = useState(false)
    const sidebarChangeHandler = () => {
        setSidebar(prev => !prev)
    }
    return  (
        <div className="flex">
            <div 
                className={`${sidebar ? 'translate-x-0' : 'translate-x-[-100%]' } translate-x-[-100%] lg:translate-x-0 lg:w-1/5 duration-300 fixed z-30 p-3 shadow-lg bg-white text-[#333] !h-[100vh] overflow-hidden lg:sticky top-0 bottom-0`}
            >
                <Sidebar/>
            </div>
            <div className="w-full lg:w-4/5 p-3 bg-[#F8F9FB]">
                <div className="mb-4 bg-[#fff] rounded p-3 flex justify-between items-center sticky top-0 z-20">
                    <h1 className="text-[22px]">{props.title}</h1>
                    <AiOutlineMenu className="lg:hidden cursor-pointer" onClick={sidebarChangeHandler} size={25}/>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
