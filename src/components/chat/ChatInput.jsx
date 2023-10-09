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

        <div className="chat-input-container bg-gray-100 p-4 border-t border-gray-200">
            <div className="flex items-center">
                <input
                    type="text"
                    className="flex-1 mr-2 p-2 border rounded focus:outline-none focus:border-blue-500"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>

    )
}