import create from 'zustand';
// import { IUser } from '../api/types';

/*
~ to update the store we need to add 'set' && 'get' parameter to it as call back.
*/
interface IUser {
    email: string;
    token: string;
    img: string;
    loggedIn?: boolean;
    updateUser: (user: IUser) => void
    // name: string;
    // photo: string;
    // createdAt: string;
    // updatedAt: string;
  }

export const useUserStore = create<IUser>( (set, get) => ({
    email: '',
    token: '', 
    img: '', 
    loggedIn: false,
    // fullname: '', 
    updateUser: (user: IUser) => {
        set({
            email: user.email,
            token: user.token,
            img: user.img, 
            loggedIn: user.loggedIn
        })
    },
}));
