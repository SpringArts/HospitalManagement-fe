'use client';
import Cookies from "js-cookie";
import Navbar from "../Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    const userInfo = JSON.parse(Cookies.get("user_info"));
    const Navtitle = [
        {
            id: 1,
            name: "Home",
            to: "/user",
        },
        {
            id: 2,
            name: "Hospitals",
            to: "/user/hospital",
        },
        {
            id: 3,
            name: "About",
            to: "/user/about-us",
        },
        {
            id: 4,
            name: "Contact",
            to: "/user/contact-us",
        },
    ];
    return (
        <div>
            <Navbar NavbarTitle={Navtitle} />
            <div className="flex min-h-screen">
                {userInfo.role !== "patient" && (
                    <div className="w-1/4 bg-gray-200">
                        <Sidebar />
                    </div>
                )}

                {/* Main Content */}
                <div className="w-3/4 ml-32 mr-32">
                    <main>{children}</main>
                </div>
            </div>

        </div>
    );
};

export default Layout;
