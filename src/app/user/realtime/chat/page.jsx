'use client';

import React, { useState } from 'react';
import Layout from '../../Layout';
import ConfirmPopup from '@/components/AppointmentPopUp/ConfirmPopup';

const ChatApp = () => {
    const [showPopup, setShowPopup] = useState(false);
    const handlePopup = () => {
        setShowPopup(!showPopup);
    }
    const messages = [
        { text: 'Hi there!', sender: 'user', timestamp: '10:00 AM' },
        { text: 'Hello! How can I assist you today?', sender: 'admin', timestamp: '10:05 AM' },
        { text: 'I have a question about my appointment.', sender: 'user', timestamp: '10:10 AM' },
        { text: 'Sure, feel free to ask your question.', sender: 'admin', timestamp: '10:15 AM' },
        // Add more messages as needed
    ];

    return (
        <Layout>
            <div>
                <div className="flex flex-col justify-center w-full mt-4">
                    <div className="uppercase flex gap-x-2 text-xs text-start mb-4 md:text-base">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center gap-1 text-sm text-gray-600">
                                <li>
                                    <a href="#" className="block transition hover:text-gray-700">
                                        <span className="sr-only"> Home </span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li className="rtl:rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </li>

                                <li>
                                    <a href="#" className="block transition hover:text-gray-700"> appointment </a>
                                </li>
                                <li className="rtl:rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </li>

                                <li>
                                    <a href="#" className="block transition hover:text-gray-700"> chatting </a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h3 className="text-3xl font-medium justify-start md:text-5xl">
                            <span className="text-zinc-800">Live </span>
                            <span className=" text-green-500">Chatting</span>
                        </h3>
                    </div>
                </div>
                <div className="max-w-screen mx-auto bg-white rounded-lg shadow-lg mt-10 overflow-hidden">
                    <div className="border-t-4 border-blue-500 p-6">
                        <div className="h-96 overflow-y-auto mb-4">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-4 ${message.sender === 'user' ? 'text-right text-blue-600' : 'text-left text-gray-700'
                                        }`}
                                >
                                    <div
                                        className={`p-4 rounded-lg inline-block border ${message.sender === 'user'
                                            ? 'border-blue-300 bg-blue-200'
                                            : 'border-gray-300 bg-gray-200'
                                            }`}
                                    >
                                        <div className="mb-2 text-xs text-gray-500">{message.timestamp}</div>
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center p-4 border-t border-gray-300">
                        <input
                            type="text"
                            className="flex-1 mr-2 p-2 border rounded transition duration-300 ease-in-out focus:border-transparent hover:border-blue-500"
                            placeholder="Type your message..."
                        />
                        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                            Send
                        </button>
                    </div>

                </div>
                <div className='pt-5 flex justify-start'>
                    <button
                        onClick={handlePopup}
                        className='border rounded font-normal p-4 shadow-lg bg-red-400 hover:bg-red-500 text-white'>
                        Leave
                    </button>
                </div>
                {showPopup ? <ConfirmPopup onopen={showPopup} onclose={setShowPopup} /> : null}
            </div>
        </Layout>
    );
};

export default ChatApp;
