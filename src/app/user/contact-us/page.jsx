import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import Layout from '../Layout'


const ContactusPage = () => {
    return (
        <Layout>
            <div className="py-8 px-4 mx-auto max-w-screen text-center lg:py-16 lg:px-6">
                <div className="container">
                    <div className="w-full md:w-[50%] lg:w-[40%] p-3 mx-auto">
                        <h1 className="text-center text-[26px] mb-3">Contact Us</h1>
                        <div className="text-center mb-5">We are always here to help out whatever way we can</div>
                        <form action="">
                            <div className='flex justify-center items-center mb-8'>
                                <span className='border-[1px] border-r-0 border-gray-500 h-[40px] px-3 rounded-l-2xl flex justify-center items-center'>
                                    <AiOutlineUser size={22} className='text-[#0000ff5f]' />
                                </span>
                                <input type="text" placeholder="Enter your name"
                                    className='w-full bg-transparent border-[1px] border-l-0 border-gray-500 h-[40px] rounded-r-2xl py-1 outline-none'
                                />
                            </div>
                            <div className='flex justify-center items-center mb-8'>
                                <span className='border-[1px] border-r-0 border-gray-500 h-[40px] px-3 rounded-l-2xl flex justify-center items-center'>
                                    <BiPhoneCall size={22} className='text-[#0000ff5f]' />
                                </span>
                                <input type="text" placeholder="Enter your phone"
                                    className='w-full bg-transparent border-[1px] border-l-0 border-gray-500 h-[40px] rounded-r-2xl py-1 outline-none'
                                />
                            </div>
                            <div className='flex justify-center items-center mb-8'>
                                <span className='border-[1px] border-r-0 border-gray-500 h-[40px] px-3 rounded-l-2xl flex justify-center items-center'>
                                    <AiOutlineMail size={22} className='text-[#0000ff5f]' />
                                </span>
                                <input type='email' placeholder="Enter your email"
                                    className='w-full bg-transparent border-[1px] border-l-0 border-gray-500 h-[40px] rounded-r-2xl py-1 outline-none'
                                />
                            </div>
                            <div className='mb-8'>
                                <div>
                                    <textarea
                                        id="OrderNotes"
                                        class="mt-2 w-full rounded-lg border-gray-400 align-top shadow-sm sm:text-sm border p-5"
                                        rows="4"
                                        placeholder="Enter any additional order notes..."
                                    ></textarea>
                                </div>
                            </div>
                            <button className='border-none w-full h-[40px] bg-blue-500 text-white rounded-2xl py-1 outline-none'>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default ContactusPage