export type actionType = {
    type: string
}
export type stateType = {
    OpenClose: boolean
}
export const reducer = (state: stateType, action: actionType) => {
    // if(action.type === 'Open'){
    //     return !state
    switch (action.type) {
        case  'Open':
            return {...state, OpenClose: !state.OpenClose}
        default :
            throw new Error('Nihu9I ne rabotaet! ! ! ')
    }
}