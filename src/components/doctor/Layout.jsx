import Link from "next/link";
import React from "react";
import Image from "next/image";
import {AiOutlineMenu} from 'react-icons/ai'

const Layout = (props) => {
    return  (
        <div className="flex">
            <div className="w-1/5 p-3 bg-[#eee] text-[#333] min-h-screen">
                <div className="mb-3">
                    <Image className="rounded-full border-[#fff] border-2 mx-auto" alt='Doctor Profile' width={150} height={150} src='/doctor.webp'/>
                </div>
                <div className="text-center">
                    <div className="mb-1">Doctor Care</div>
                    <div>099855852588</div>
                </div>
                <div className="w-full h-[1px] bg-gray-500 my-3" />
                <ul>
                    <li className="">
                        <Link className="w-full block hover:bg-[#ddd] duration-300 rounded p-2" href='/doctor'>Home</Link>
                    </li>
                    <li className="">
                        <Link className="w-full block hover:bg-[#ddd] duration-300 rounded p-2" href='/doctor/profile'>Profile</Link>
                    </li>
                    <li className="">
                        <Link className="w-full block hover:bg-[#ddd] duration-300 rounded p-2" href='/doctor/hospital'>Hospitals</Link>
                    </li>
                    <li className="">
                        <Link className="w-full block hover:bg-[#ddd] duration-300 rounded p-2" href='/doctor/patient'>Patients</Link>
                    </li>
                    <li className="">
                        <Link className="w-full block hover:bg-[#ddd] duration-300 rounded p-2" href='/doctor'>Apintement</Link>
                    </li>
                </ul>
            </div>
            <div className="w-4/5 p-3">
                <div className="mb-4 shadow-lg bg-[#EEEEEE] rounded p-3 flex justify-between items-center sticky top-0">
                    <h1 className="text-[26px]">{props.title}</h1>
                    <AiOutlineMenu size={30}/>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
