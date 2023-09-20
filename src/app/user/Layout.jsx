import Navbar from "@/components/Navbar";
export default function Layout({ children }) {
    const Navtitle = [
        {
            id: 1,
            name: "Home",
            to: "/user",
        },
        {
            id: 2,
            name: "Partners",
            to: "/user/hospital",
        },
        {
            id: 3,
            name: "About us",
            to: "/user/about-us",
        },
        {
            id: 4,
            name: "Contact us",
            to: "/user/contact-us",
        },
    ];
    return (
        <>
            <Navbar NavbarTitle={Navtitle} />
            <div className="px-4 max-w-6xl mx-auto">{children}</div>
        </>
    );
}
