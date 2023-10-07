export default function ChatMessage({messages , auth_id}){
    console.log(auth_id)

    const isReceiveMessage = (message) => {
        return message.receiver_id === auth_id
    }

    return (
        <div className="w-full h-full overflow-y-auto">
            {(messages || []).map((message , index)=>(
                <div key={index}>
                    <div className={`${isReceiveMessage(message) ? 'receive-chat justify-start': 'send-chat justify-end'} relative flex `}>
                        <div className={`${isReceiveMessage(message) ? 'bg-violet-400 text-white' : 'bg-violet-200 text-slate-500'} px-5 py-2 mb-2  text-sm max-w-[80%] rounded`}>
                            {/* {isReceiveMessage(message) ? (
                                <i className="fa fa-caret-up text-violet-400 -top-2 absolute" />
                            ) :(
                                <i className="fa fa-caret-down text-violet-200 bottom-0 right-4 absolute" />
                            ) } */}
                            <p>
                                {message.message}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Send_Chat */}
        </div>
    )
}