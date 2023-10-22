import {ChangeNameAC, IncrementAgeAC, IncrementChildrenAC, userReducer} from "./userReduser";


test('user reducer should increment only age', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Dimych'}

    const endState = userReducer(startState, IncrementAgeAC())
    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
})

test('user reducer should increment only childrenCount', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Dimych'}
    const endState = userReducer(startState, IncrementChildrenAC())
    expect(endState.childrenCount).toBe(3)
    expect(endState.age).toBe(20)
    expect(endState.name).toBe('Dimych')
})

test('user reducer should change name of user', () => {
    const startState = {name: 'Dimych', age: 20, childrenCount: 2}
    const newName = 'Viktor'
    const endState = userReducer(startState, ChangeNameAC(newName))
    expect(endState.name).toBe(newName)
})

