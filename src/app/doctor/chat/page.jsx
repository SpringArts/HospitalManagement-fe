"use client";
import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatUserInfoHeader from "@/components/chat/ChatUserInfoHeader";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";

import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

const page = () => {
    const searchParams = useSearchParams();

    const patientId = searchParams.get("patientId");

    const [recentMessages, setRecentMessages] = useState([]);
    const [receiverId, setReceiverId] = useState();
    const [receiver, setReceiver] = useState();
    const [messages, setMessages] = useState([]);
    const [bookingId , setBookingId] = useState();
    const token = Cookies.get("token");
    const userInfo = JSON.parse(Cookies.get("user_info"));

    const bookingId = '212202';

    const pusherJob = () => {
        const pusher = new Pusher("45465ed7bfec0f979e65", {
            cluster: "ap1",
        });

        const channel = pusher.subscribe('message.' + bookingId);
        channel.bind('fresher', function (data) {
            console.log(data);
            setMessages((prevMessages) => [...prevMessages, data.message]);
        });

        return () => {
            channel.unbind('fresher');
            pusher.unsubscribe('message.' + bookingId);
        };
    };

    const fetchRecentMessages = async () => {
        try {
            let url = receiverId ? `/message/${receiverId}` : "/message";
            const res = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res.data.message.booking_id)
            setRecentMessages(res.data.message.chatUsers);
            setReceiver(res.data.message.receiver);
            setMessages(res.data.message.messages);
        } catch (error) {
            toast.error(error.message);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchRecentMessages();
    }, [receiverId, bookingId]);

    useEffect(() => {
        pusherJob();
    }, []);

    return (
        <>
            <div className="messenger-container flex h-screen">
                <ChatSidebar
                    recentMessages={recentMessages}
                    getReceiverId={(value) => setReceiverId(value)}
                />

                <div className="messenger-content flex-auto flex flex-col">
                    {receiver ? (
                        <>
                            <ChatUserInfoHeader receiver={receiver} />
                            <div className="chat-messages flex-auto overflow-y-auto p-4">
                                <ChatMessage
                                    messages={messages}
                                    auth_id={userInfo?.id}
                                />
                            </div>
                            <ChatInput
                                receiver={receiver}
                                fetchRecentMessages={fetchRecentMessages}
                            />
                        </>
                    ) : (
                        <div className="flex justify-center items-center h-full bg-gray-100">
                            <p className="text-xl text-gray-600">
                                Please select a user to start chatting
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default page;
