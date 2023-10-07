import { useState } from "react";

export default function ChatInput({receiver}){

    // const { data, setData, post, processing, errors, reset } = useForm({
    //     message: ''
    // });

    const [message, setMessage] = useState('');

    const submit = (e) => {
        // e.preventDefault();

        // post(route('chat.store', receiver.id));
        // reset('message')
    };

    return (

            <div className="bg-gray-100 fixed bottom-0 w-full">
                <form onSubmit={submit}>
                    <input
                        name="message"
                        value={message}
                        className="w-full border-0 hover:border-0 focus:border-0 focus:ring-0 !shadow-none focus:!outline-none bg-white pt-3 h-12 overflow-y-auto font-light"
                        placeholder="Write some message"
                        defaultValue={""}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </form>
            </div>

    )
    }