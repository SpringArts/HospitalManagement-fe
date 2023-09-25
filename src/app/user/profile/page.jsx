import Layout from "../Layout";
import UserProfile from "@/components/Profile";
export default function page() {
    return (
        <Layout className={"max-w-2xl lg:max-w-3xl"}>
            <h1 className="text-2xl  text-zinc-700 font-semibold">Profile</h1>
            <UserProfile />
        </Layout>
    );
}
