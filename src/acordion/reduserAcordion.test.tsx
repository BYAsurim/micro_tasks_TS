import {reduser, stateType} from "./reduserAcordion";

test('value should be change true', () => {
    const state: stateType = {
        OpenClose: false
    }
    const newReduser = reduser(state, {type: 'Open'})
    expect(newReduser.OpenClose).toBe(true)

})
test('value should be change false', () => {

    const state: stateType = {
        OpenClose: true
    }
    const newReduser = reduser(state, {type: 'Open'})
    expect(newReduser.OpenClose).toBe(false)

})

