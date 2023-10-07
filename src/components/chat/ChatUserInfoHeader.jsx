import { FaUserCircle } from 'react-icons/fa'
export default function ChatUserInfoHeader({receiver}){
    return (

            <div className="user-info-header bg-white px-5 py-3">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        {
                            receiver?.avatar !== undefined ? (
                                <img
                                    src="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                                    width={50}
                                    className="bg-transparent"
                                    alt="sample"/>
                            ): (
                                <FaUserCircle className='text-gray-300 text-5xl' />
                            )
                        }
                        <h3 className="text-gray-400 text-md pl-4">{receiver.name}</h3>
                    </div>
                    <div className="">
                        {/* <i className="fa fa-message text-violet-300" />
                        <i className="fa fa-video ml-3 text-gray-200" />
                        <i className="fa fa-phone ml-3 text-gray-200" /> */}
                    </div>
                </div>
                {/* left user header */}
            </div>

    )
}