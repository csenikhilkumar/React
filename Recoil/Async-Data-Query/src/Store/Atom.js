import axios from "axios";
import { atom, selector } from "recoil";

export const AllItems = atom({
    key:"all",
    default: selector({
        key:"hello",
        get:async({get})=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
     return res.data
        
    }

})

})

export const SumOfItems = selector({
    key: "allItem",
    get: ({ get }) => {
        const allIt = get(AllItems);
        const id = allIt.id || 0;
        const userId = allIt.userId || 0;
        return id + userId;
    }
});
