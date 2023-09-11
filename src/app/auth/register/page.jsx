"use client";
import { useState } from "react";
import axios from "@/lib/axios";

export default function Page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    console.log(formData);
    let data = JSON.stringify(formData);
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Check if passwords match
            if (password !== confirmPassword) {
                console.error("Passwords do not match");
                return;
            }

            const response = await axios.post("api/register", data);

            console.log("Registration successful:", response.data.message);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                const validationErrors = error.response.data.errors;

                console.error("Validation errors:", validationErrors);
            } else {
                console.error("Registration error:", error.message);
            }
        }
    };
    const { name, email, password, confirmPassword } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form
            method="POST"
            onSubmit={handleRegister}
            className="min-h-screen flex items-center justify-center bg-gray-100"
        >
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Register</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                        className="text-zinc-900 w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        className="w-full text-zinc-900 p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                        className="w-full text-zinc-900 p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleChange}
                        className="w-full text-zinc-900 p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Register
                    </button>
                </div>
            </div>
        </form>
    );
}
