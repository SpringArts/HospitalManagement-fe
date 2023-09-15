import ProtectRoute from "@/components/ProtectRoute";

export default function Home() {
    return (
        <>
            <ProtectRoute />
            <h2>Wait a sec ...</h2>
        </>
    );
}
