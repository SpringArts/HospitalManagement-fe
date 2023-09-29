import Layout from "../Layout";
import UserProfile from "@/components/profile/Profile";
import UserBookingData from "@/components/profile/UserBookingData";
export default function page() {
    return (
        <Layout className={"max-w-2xl  lg:max-w-3xl"}>
            <h1 className="text-2xl  text-zinc-700 font-semibold">Profile</h1>
            <UserProfile />
            <hr />
            <h1 className="text-lg font-medium text-zinc-700 text-center mt-2">
                My Booking
            </h1>
            <UserBookingData />
        </Layout>
    );
}
