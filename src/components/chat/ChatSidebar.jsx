
import React from 'react'
import Link from 'next/link'
import { FaUserCircle , FaSearch } from 'react-icons/fa'

const ChatSidebar = ({recentMessages , getReceiverId}) => {
  return (
    <>
                {/* Searchbox */}
                <div className="search-box h-10 text-slate-300">
            </div>
            {/* //user list */}
            <div className="user-list overflow-y-auto h-screen">
                {
                    recentMessages?.map((user, index)=>(
                        <button onClick={()=>getReceiverId(user.user_id)} key={index} className="flex transition px-5 py-3 hover:bg-slate-100 hover:cursor-pointer">
                            <div className="pr-4">
                                {
                                    user?.avatar !== undefined ? (
                                        <img
                                            src="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                                            width={50}
                                            className="bg-transparent"
                                            alt="sample"/>
                                    ): (
                                        // <i className='fa fa-user-circle text-gray-300 text-5xl'/>
                                        <FaUserCircle className='text-gray-300 text-5xl' />
                                    )
                                }
                            </div>
                            <div className=''>
                                <h3 className="text-violet-500 text-start text-md">{user.name.length > 0 ? user.name :"Unknown User"}</h3>
                                <p className="text-sm text-start text-gray-400 font-light overflow-hidden h-5">
                                    {user.message}
                                </p>
                            </div>
                        </button>
                    ))
                }

            </div>
    </>
  )
}

export default ChatSidebar