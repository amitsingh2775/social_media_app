import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    isLogin: !!localStorage.getItem('token'), // Check if token exists
    userEmail: localStorage.getItem('userEmail'), // Get email from localStorage if available
    token: localStorage.getItem('token'), // Initialize from localStorage
  },
});
