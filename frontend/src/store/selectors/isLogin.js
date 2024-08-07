import { userState } from "../atoms/user";
import { selector } from "recoil";

export const userLogin=selector({
    key:'userLogin',
    get:({get})=>{
        const state=get(userState)

        return state.isLogin
    }
})