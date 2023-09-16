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
            to: "/partners",
        },
        {
            id: 3,
            name: "About us",
            to: "/user/about-us",
        },
    ];
    return (
        <>
            <Navbar NavbarTitle={Navtitle} />
            <div>{children}</div>
        </>
    );
}
