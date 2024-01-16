import { ChipPropsType } from '@/app/utils/types'
import Image from 'next/image'
import React from 'react'

function Chip({
    index,
    highlightLastUser,
    lastIndex,
    user,
    handleRemoveSelectedUser
}: ChipPropsType) {
    return (
        <div className={`flex items-center gap-2 rounded-full bg-[#cbcdd4] 
                            ${(highlightLastUser && index === lastIndex) && 'border-2 border-[#4e79ef]'}`} >
            <Image
                width={38}
                height={38}
                className="flex-shrink-0 rounded-full"
                src={user.picUrl}
                alt="user photo" />
            <p>{user.name}</p>
            <svg
                onClick={() => handleRemoveSelectedUser(user)}
                className='mr-2  cursor-pointer'
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </div>
    )
}

export default Chip