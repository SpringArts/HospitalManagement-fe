import { BellSimple, UserCircle } from "@phosphor-icons/react";
export default function NotiAndProfileIcon({ className }) {
    return (
        <div
            className={`flex gap-3 md:gap-5 justify-center items-center ${className}`}
        >
            <BellSimple size={32} color="#000000" />
            <UserCircle size={32} color="#000000" />
        </div>
    );
}
