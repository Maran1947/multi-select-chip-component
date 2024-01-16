export interface MultiSelectChipComponentPropsType {
    data: any
}

export interface UserType {
    name: string,
    email: string,
    picUrl: string
}

export interface ChipPropsType {
    index: number,
    highlightLastUser: boolean,
    lastIndex: number,
    user: UserType,
    handleRemoveSelectedUser: (user: UserType) => void
}

export interface ChipWithEmailPropsType {
    index: number,
    inputText: string,
    activeSuggestion: number,
    user: UserType,
    handleSelectUser: (user: UserType) => void
}