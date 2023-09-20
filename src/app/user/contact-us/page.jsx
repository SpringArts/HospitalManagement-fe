import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import Layout from "../Layout";

const ContactusPage = () => {
    return (
        <Layout>
            <div className="w-full min-h-screen flex justify-center items-center text-[#333]">
                <div className="container">
                    <div className="w-full md:w-[50%] lg:w-[40%] xl:w-[35%] p-3 mx-auto">
                        <h1 className="text-center text-[26px] mb-3">
                            Contact Us
                        </h1>
                        <div className="text-center mb-5">
                            We are always here to help out whatever way we can
                        </div>
                        <form action="">
                            <div className="flex justify-center items-center mb-8">
                                <span className="border-[1px] border-r-0 border-gray-500 h-[40px] px-3 rounded-l-2xl flex justify-center items-center">
                                    <AiOutlineUser
                                        size={22}
                                        className="text-[#0000ff5f]"
                                    />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-transparent border-[1px] border-l-0 border-gray-500 h-[40px] rounded-r-2xl py-1 outline-none"
                                />
                            </div>
                            <div className="flex justify-center items-center mb-8">
                                <span className="border-[1px] border-r-0 border-gray-500 h-[40px] px-3 rounded-l-2xl flex justify-center items-center">
                                    <BiPhoneCall
                                        size={22}
                                        className="text-[#0000ff5f]"
                                    />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter your phone"
                                    className="w-full bg-transparent border-[1px] border-l-0 border-gray-500 h-[40px] rounded-r-2xl py-1 outline-none"
                                />
                            </div>
                            <div className="flex justify-center items-center mb-8">
                                <span className="border-[1px] border-r-0 border-gray-500 h-[40px] px-3 rounded-l-2xl flex justify-center items-center">
                                    <AiOutlineMail
                                        size={22}
                                        className="text-[#0000ff5f]"
                                    />
                                </span>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent border-[1px] border-l-0 border-gray-500 h-[40px] rounded-r-2xl py-1 outline-none"
                                />
                            </div>
                            <div className="mb-8">
                                <textarea
                                    rows="3"
                                    className="w-full h-[40px] bg-transparent border-[1px] border-t-0 border-l-0 border-r-0 border-gray-500 outline-none"
                                    placeholder="Type your message ....."
                                ></textarea>
                            </div>
                            <button className="border-none w-full h-[40px] bg-blue-500 text-white rounded-2xl py-1 outline-none">
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactusPage;
