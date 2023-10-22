type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = ReturnType<typeof IncrementAgeAC>
    | ReturnType<typeof IncrementChildrenAC>
    | ReturnType<typeof ChangeNameAC>
export const IncrementAgeAC = () => {
    return {
        type: 'INCREMENT-AGE',
    } as const
}
export const IncrementChildrenAC = () => {
    return {
        type: 'INCREMENT-CHILDREN-COUNT',
    } as const
}
export const ChangeNameAC = (name:string) => {
    return {
        type: 'CHANGE-NAME',
        name
    } as const
}


export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            return {...state, age: state.age + 1}
        case 'INCREMENT-CHILDREN-COUNT':
            return {...state, childrenCount: state.childrenCount + 1}
        case 'CHANGE-NAME':
            return {...state, name:action.name}
        default:
            throw new Error('I don\'t understand this type')
    }
}
