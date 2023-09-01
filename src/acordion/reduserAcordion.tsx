export type actionType = {
    type:string
}
export type stateType = {
    OpenClose:boolean
}
export const reduser = (state:stateType,action:actionType) =>{
    // if(action.type === 'Open'){
    //     return !state
debugger
    switch (action.type ){
        case  'Open':
            return {...state, OpenClose: !state.OpenClose}
        default :
            throw new Error('Nihu9I ne rabotaet! ! ! ')
    }
    return state
}