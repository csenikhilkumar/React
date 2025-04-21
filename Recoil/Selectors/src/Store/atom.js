import {atom, selector} from 'recoil'

export const AtomCounter = atom({
key:"couter",
default:0
})


export const AtomSelector = selector({
    key:"Iseven",
    get:({get}) =>{
        const currencount = get(AtomCounter)
        const IsEven = currencount % 2 == 0
        return IsEven
    }
})