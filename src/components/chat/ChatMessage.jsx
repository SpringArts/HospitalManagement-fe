const ChatMessage = ({ messages, auth_id }) => {
    // console.log(auth_id)

    const isReceiveMessage = (message) => {
        return message.receiver_id === auth_id
    }

    return (
        <div className="w-full h-full overflow-y-auto">
            {(messages || []).map((message, index) => (
                <div key={index} className={`flex justify-${isReceiveMessage(message) ? 'start' : 'end'} mb-4`}>
                    <div
                        className={`${isReceiveMessage(message) ? 'bg-blue-300 text-white' : 'bg-gray-200 text-gray-800'
                            } px-5 py-3 text-sm max-w-[80%] rounded-lg shadow-md`}
                    >
                        <p>{message.message}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default ChatMessage