
import { userState } from "../atoms/user";
import {selector} from "recoil";

export const userEmailState = selector({
  key: 'userEmailState',
  get: ({get}) => {
    const state = get(userState);

    // state contain={isloading,useremail}
    //here we need only useremail
    return state.userEmail;
  },
});
