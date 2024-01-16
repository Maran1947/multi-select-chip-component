import { MultiSelectChipComponentPropsType, UserType } from '@/app/utils/types';
import React, { useEffect, useState } from 'react';
import Chip from './Chip';
import ChipWithEmail from './ChipWithEmail';

function MultiSelectChipComponent({ data }: MultiSelectChipComponentPropsType) {

    const [showUsers, setShowUsers] = useState<boolean>(false);
    const [highlightLastUser, setHighlightLastUser] = useState<boolean>(false);
    const [inputText, setInputText] = useState<string>('');
    const [selectedUsers, setSelectedUsers] = useState<UserType[]>([]);
    const [allUsers, setAllUsers] = useState<UserType[]>(data);
    const [userList, setUserList] = useState<UserType[]>(data);
    const [activeSuggestion, setActiveSuggestion] = useState<number>(-1);

    const handleInputText = (e: React.FormEvent<HTMLInputElement>) => {
        const query = e.currentTarget.value;
        let searchUsers = allUsers.filter((user) => {
            return user.name.toLowerCase().startsWith(query.toLowerCase());
        });

        setActiveSuggestion(0);
        setInputText(e.currentTarget.value);
        setUserList(searchUsers);
    }

    const handleSelectUser = (newUser: UserType) => {
        let newUsers = allUsers.filter((user) => {
            return user.email != newUser.email
        });
        let filteredUsers: UserType[] = [...selectedUsers, newUser];

        setSelectedUsers(filteredUsers);
        setAllUsers(newUsers);
        setInputText('');
        setActiveSuggestion(-1);
    }

    const handleRemoveSelectedUser = (existingUser: UserType) => {
        let filteredUsers = selectedUsers.filter((user) => {
            return user.email != existingUser.email
        });
        let newUsers = [...allUsers, existingUser];

        setAllUsers(newUsers);
        setSelectedUsers(filteredUsers);
    }

    const handleShowUsers = (e: any) => {
        if (e.key === "Backspace" && inputText.length === 0 && selectedUsers.length > 0) {
            setShowUsers(false);
            if (highlightLastUser) {
                let filteredUsers = [...selectedUsers];
                let removedUser = filteredUsers.pop();
                if (removedUser) {
                    let newUsers = [...allUsers, removedUser];
                    setAllUsers(newUsers);
                }
                setSelectedUsers(filteredUsers);
                setHighlightLastUser(false);
                setShowUsers(true);
            } else {
                setHighlightLastUser(true);
            }
        } else {
            setShowUsers(true);
        }
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && activeSuggestion !== -1) {
            handleSelectUser(userList[activeSuggestion]);
        } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            const direction = e.key === 'ArrowUp' ? -1 : 1;
            const newIndex = Math.max(0, Math.min(userList.length - 1, userList.findIndex((user, index) => index === activeSuggestion) + direction));
            const highlightedUserElement = document.getElementById(`user-${newIndex}`);
            if (highlightedUserElement) {
                highlightedUserElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }

            setActiveSuggestion(newIndex);
        }
    }

    const handleOnMouseOver = () => {
        setActiveSuggestion(-1);
    }

    const handleBlur = () => {
        setShowUsers(false);
    };

    useEffect(() => {
        if (inputText === '') {
            setUserList(allUsers);
        }
    }, [allUsers, inputText]);

    return (
        <div>
            <div className="flex flex-wrap border-b-2 border-[#4e79ef] gap-2 py-1">
                {
                    selectedUsers?.map((user: UserType, index: any) => {
                        return (
                            <Chip
                                key={index}
                                index={index}
                                highlightLastUser={highlightLastUser}
                                lastIndex={selectedUsers.length - 1}
                                user={user}
                                handleRemoveSelectedUser={handleRemoveSelectedUser} />
                        )
                    })
                }
                <div className="relative w-auto" onKeyDown={handleShowUsers}>
                    <input
                        value={inputText}
                        onClick={handleShowUsers}
                        onChange={handleInputText}
                        autoFocus={true}
                        onKeyDown={handleOnKeyDown}
                        onBlur={handleBlur}
                        type="text"
                        name="inputText"
                        id="inputTextId"
                        className="w-auto block px-1 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                        placeholder="Add new user..." />
                    {
                        showUsers &&
                        <div
                            onMouseOver={handleOnMouseOver}
                            className="user-list-dropdown absolute w-[530px] z-10 bg-white max-h-80 shadow-2xl scroll-auto overflow-y-auto rounded-tl-2xl"
                        >
                            {
                                userList.length > 0 ?
                                    userList.map((user: UserType, index: any) => {
                                        return (
                                            <ChipWithEmail
                                                key={index}
                                                index={index}
                                                inputText={inputText}
                                                activeSuggestion={activeSuggestion}
                                                user={user}
                                                handleSelectUser={handleSelectUser} />
                                        )
                                    })
                                    : <p className="p-2" >No user found.</p>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default MultiSelectChipComponent;