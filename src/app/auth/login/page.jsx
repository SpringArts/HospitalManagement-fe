"use client"
import { useState, useRef } from 'react'
import Image from 'next/image'
import login_img from '/public/images/health_care.svg'

const loginRequest = async (email, password) => {
    // Fetch CSRF cookie first
    await fetch('http://127.0.0.1:8000/sanctum/csrf-cookie', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'include',
    });
    
    const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include', // Send cookies with the request
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message || 'Somethind wrong.')
    }

    return data
}

const LoginPage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const submitHandler = async (event) => {
        event.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value
        try {
            const result = await loginRequest(email, password)
            console.log(result)
        } catch (error) {
            console.log(error)
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
                                <input type="text" placeholder="Enter your email" 
                                    className="
                                        border-[1px] border-gray-700 h-[45px] rounded-2xl mb-6 p-2
                                        outline-none focus:p-3 duration-150
                                    " 
                                    ref={emailRef}
                                />
                                <input type="text" placeholder="Enter your password" 
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
