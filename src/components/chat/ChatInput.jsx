import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function ChatInput({ receiver, fetchRecentMessages }) {
    console.log(receiver);
    const token = Cookies.get("token");
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        doctorId: 13,
        patientId: 11,
        bookingId: '212202',
    });

    const sendMessage = async (e) => {
        e.preventDefault();
        const updatedFormData = {
            ...formData,
            message: message,
        };
        await axios.post(`/message/${receiver.id}?bookingId=212202`, updatedFormData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        fetchRecentMessages();
        setMessage('');
    };

    return (

        <div className="bg-gray-100 fixed bottom-0">
            <div className="flex items-center p-4 border-t border-gray-300">
                <input
                    type="text"
                    className="flex-1 mr-2 p-2 border rounded transition duration-300 ease-in-out focus:border-transparent hover:border-blue-500"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>

    )
}