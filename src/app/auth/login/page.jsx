"use client"
import { useState, useRef } from 'react'
import axios from "@/lib/axios";
import Image from 'next/image'
import login_img from '/public/images/health_care.svg'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [error, setError] = useState(null)
    const emailRef = useRef()
    const passwordRef = useRef()
    const router = useRouter()

    const submitHandler = async (event) => {
        event.preventDefault()
        setError(null)
        const email = emailRef.current.value
        const password = passwordRef.current.value
        try {
            const response = await axios.post("/login", JSON.stringify({email, password})); 
            const data = response.data
            console.log(data)
            const user = data.data.user
            const token = data.data.token
            Cookies.set('user_info', JSON.stringify(user))
            Cookies.set('token', token)
            router.push('/')
        } catch (error) {
            if (error.response && error.response.status === 422) {
                const data = error.response.data
                setError(data.message)
            }else {
                setError('Somethind wrong.')
            }
        }
    }

    return (
        <div className="w-screen h-screen text-[#333] bg-gradient-to-br from-[#eee] from-40% to-blue-500 ">
            <div className='container p-4 lg:p-8 flex justify-center items-center h-full w-full'>
                    <div className="w-full lg:w-[50%] flex justify-center items-center">
                        <div className="w-full md:w-[60%] mx-auto bg-white p-6 rounded-2xl">
                            <h1 className="text-center text-[28px] mb-4">Welcome</h1>
                            <p className="text-center mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, id?</p>
                            <form onSubmit={submitHandler} className="flex flex-col">
                                {error && <div className='text-red-800  bg-[#eee] p-2 h-[45px] rounded-2xl flex justify-center items-center mb-4'>{error}</div>}
                                <input type="text" placeholder="Enter your email" 
                                    className="
                                        border-[1px] border-gray-700 h-[45px] rounded-2xl mb-6 p-2
                                        outline-none focus:p-3 duration-150
                                    " 
                                    ref={emailRef}
                                />
                                <input type="password" placeholder="Enter your password" 
                                    className="
                                        border-[1px] border-gray-700 h-[45px] rounded-2xl mb-4 p-2
                                        outline-none focus:p-3 duration-150
                                    "
                                    ref={passwordRef}
                                />
                                <p className="text-end mb-4">Forget Your Password?</p>
                                <button className="bg-[#1EC1A4] text-white h-[45px] rounded-2xl">SIGN IN</button>
                            </form>
                        </div>
                    </div>
                    <div className="hidden w-[50%] lg:flex justify-center items-center">
                        <Image src={login_img} alt="Picture of the author"
                            className='w-[80%]'
                        />
                    </div>
            </div>
        </div>
    );
};

export default LoginPage;
