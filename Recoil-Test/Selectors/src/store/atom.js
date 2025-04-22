import { atom, selector } from "recoil"
export const MassegeAtom = atom({
    key:"MesuseRecoilvaluesage",
    default:182
})

export const NotifictionCount = atom({
    key:"Message",
    default:89
})

export const ProfileAtom = selector({
    key:"Me",
    get:({get})=>{ 
        const NotifictionCoun = get(NotifictionCount)
        const Message = get(MassegeAtom)
        return NotifictionCoun+Message
    }
})