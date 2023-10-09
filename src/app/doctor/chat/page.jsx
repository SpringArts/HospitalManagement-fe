'use client';
import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatUserInfoHeader from "@/components/chat/ChatUserInfoHeader";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Pusher from 'pusher-js';

import toast from "react-hot-toast";

const page = () => {
    const [recentMessages, setRecentMessages] = useState([]);
    const [receiverId, setReceiverId] = useState();
    const [receiver, setReceiver] = useState();
    const [messages, setMessages] = useState([]);
    const token = Cookies.get("token");
    const userInfo = Cookies.get("user_info");
    const bookingId = '212202';

    const pusherJob = () => {
        const pusher = new Pusher('7ba581dfe6bdd5a3ec55', {
            cluster: 'ap3'
        });

        const channel = pusher.subscribe('message' + bookingId);
        channel.bind('chat', function (data) {
            console.log(data);
            setMessages(prevMessages => [...prevMessages, data.message]);
        });

        return () => {
            channel.unbind('chat');
            pusher.unsubscribe('message' + bookingId);
        };

    };

    const fetchRecentMessages = async () => {
        try {
            let url = receiverId ? `/message/${receiverId}` : "/message";
            const res = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            setRecentMessages(res.data.message.chatUsers);
            setReceiver(res.data.message.receiver);
            setMessages(res.data.message.messages);
        } catch (error) {
            toast.error(error.message || "Error fetching messages");
            console.error(error);
        }
    };

    useEffect(() => {
        fetchRecentMessages();
        pusherJob();
    }, [receiverId, bookingId]);

    return (
        <>
            <div className="">
                <div className="messenger p-4 h-screen ">
                    <div className="flex overflow-hidden">
                        <div className="w-96 pt-3 sticky overflow-hidden bg-white border-r border-slate-100 ">
                            <div className="search-box overflow-y-auto">
                                <ChatSidebar recentMessages={recentMessages} getReceiverId={(value) => setReceiverId(value)} />
                            </div>
                        </div>
                        {/* Message */}
                        <div className="flex-auto overflow-auto">
                            {receiver?.id ? (
                                <>
                                    <ChatUserInfoHeader receiver={receiver} />
                                    <div className="messenger mt-4">
                                        {/* Chat */}
                                        <div className="h-full px-4 overflow-y-auto mb-10">
                                            <ChatMessage
                                                messages={messages}
                                                auth_id={userInfo?.id}
                                            />
                                        </div>

                                        {/* Message Input */}
                                        <ChatInput receiver={receiver} fetchRecentMessages={fetchRecentMessages} />
                                    </div>
                                </>
                            ) : (
                                <div className="flex justify-center items-center bg-slate-100 h-screen">
                                    <p>Please select a user to start chatting</p>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
