import Cookies from "js-cookie";
import React, { useState } from "react";

const EditForm = (props) => {
    const [nameInput, setNameInput] = useState(props.user.name);
    const [emailInput, setEmailInput] = useState(props.user.email);
    const [phoneInput, setPhoneInput] = useState(props.user.phone);
    const [addressInput, setAddressInput] = useState(props.user.address ?? "");
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const token = Cookies.get("token");
    const submitHandler = async (event) => {
        event.preventDefault();
        setError(null);
        setIsLoading(true);
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/dashboard/doctor/${props.user.id}/update`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: nameInput,
                    email: emailInput,
                    phone: phoneInput,
                    address: addressInput,
                    password: passwordInput,
                }),
            },
        );

        if (response.status === 422) {
            const responseData = await response.json();
            setError(responseData.message);
            return;
        }

        if (!response.ok) {
            setError("Something wrong.");
            return;
        }
        const responseData = await response.json();
        // console.log(responseData.data.user)
        Cookies.set("user_info", JSON.stringify(responseData.data.user));
        props.onUpdateUserInfo(responseData.data.user);
        setIsLoading(false);
    };

    return (
        <div className="shadow p-3 rounded">
            <h1 className="mb-4">Change Your Profile Information</h1>
            <form onSubmit={submitHandler}>
                {error && (
                    <div className="bg-[#eee] p-3 mb-3 text-red-800">{error}</div>
                )}
                <div className="mb-3">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="emamil"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="emamil"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Address
                    </label>
                    <textarea
                        id="address"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        value={addressInput}
                        onChange={(e) => setAddressInput(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="passwrod"
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="passwrod"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                    />
                </div>
                <div className="text-end">
                    <button
                        className="inline-block rounded border border-red-500 bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 mr-3 focus:outline-none focus:ring active:text-red-500"
                        type="button"
                        onClick={props.onShowFormChangeHandler}
                    >
                        CLOSE
                    </button>
                    <button
                        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        type="submit" disabled={isLoading}
                    >
                        CONFIRM
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditForm;
