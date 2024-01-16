import { ChipWithEmailPropsType } from '@/app/utils/types'
import Image from 'next/image'
import React from 'react'

function ChipWithEmail({
    index,
    inputText,
    user,
    activeSuggestion,
    handleSelectUser
}: ChipWithEmailPropsType) {
    return (
        <div
            id={`user-${index}`}
            onClick={() => handleSelectUser(user)}
            key={user.email + index}
            className={
                `flex items-center gap-2 px-4 ${activeSuggestion === index && 'bg-[#eae9ea]'} py-2 hover:bg-[#eae9ea] cursor-pointer`
            }
        >
            <div className="w-[220px] flex items-center gap-4" >
                <Image
                    width={38}
                    height={38}
                    className="flex-shrink-0 rounded-full"
                    src={user.picUrl}
                    alt="user photo" />
                <p className="font-semibold" >
                    <span className="text-[#717071]" >
                        {user.name.slice(0, inputText.length)}
                    </span>
                    {user.name.slice(inputText.length)}
                </p>
            </div>
            <div className="w-40 flex justify-end" >
                <p className="w-full text-left text-[#a6a5a6]" >{user.email}</p>
            </div>
        </div>
    )
}

export default ChipWithEmail