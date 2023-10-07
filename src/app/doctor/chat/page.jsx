'use client';
import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatUserInfoHeader from "@/components/chat/ChatUserInfoHeader";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
    const [recentMessages, setRecentMessages] = useState([]);
    // const [messages, setMessages] = useState("");
    const [receiverId , setReceiverId] = useState();
    const [receiver , setReceiver] = useState();
    const [messages , setMessages]  = useState([]);
    const token = Cookies.get("token")
    const userInfo = JSON.parse(Cookies.get("user_info"));


    console.log(userInfo)
    

    const getRecentMessages = async() => {
        
        let url = receiverId ? `/message/${receiverId}` : "/message"

        try {
            await 
            axios.get(url, {

                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }).then((response)=>{
                // console.log(response)
                setRecentMessages(response.data.message.chatUsers)
                setReceiver(response.data.message.receiver)
                setMessages(response.data.message.messages)
            });

        } catch (error) {
            toast.error(error)
            console.log(error);
        }
    }

    useEffect(()=>{
getRecentMessages();
    },[receiverId])
console.log(messages)
    return (
        <>
            <div className="">
                <div className="messenger p-4 h-screen ">
                    <div className="flex overflow-hidden">
                        <div className="w-96 pt-3 sticky overflow-hidden bg-white border-r border-slate-100 ">
                            <div className="search-box overflow-y-auto">
                                <ChatSidebar recentMessages={recentMessages} getReceiverId={(value)=> setReceiverId(value)} />
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
                                        <ChatInput receiver={receiver} />
                                    </div>
                                </>
                            ): (
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
