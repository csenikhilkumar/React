import {atom, selector } from "recoil"

export const NetworkCounter = atom ({
    key:"atom",
    default:104
})
export const jobsCounter = atom ({
    key:"atomjobs",
    default:0
})

export const messagingCounter = atom ({
    key:"atommassage",
    default:13
})

export const NotificationCounter = atom ({
    key:"atomnotification",
    default:104
})


