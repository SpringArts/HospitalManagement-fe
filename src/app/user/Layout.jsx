import Navbar from "@/components/Navbar";
export default function Layout({ children, className }) {
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
        <>
            <Navbar NavbarTitle={Navtitle} />
            <div
                className={`px-5 mb-8 max-w-lg sm:max-w-6xl md:px-8 mx-auto ${className}`}
            >
                {children}
            </div>
        </>
    );
}
