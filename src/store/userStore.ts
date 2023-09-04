import create from 'zustand';
// import { IUser } from '../api/types';

/*
~ to update the store we need to add 'set' && 'get' parameter to it as call back.
*/
interface IUser {
    email: string;
    token: string;
    updateUser: (user: IUser) => void
    // fullname: string;
    // password: string;
    // name: string;
    // photo: string;
    // createdAt: string;
    // updatedAt: string;
  }

export const useUserStore = create<IUser>( (set, get) => ({
    email: '',
    // lastname: '',
    // fullname: '', 
    token: '', 
    updateUser: (user: IUser) => {
        set({
            email: user.email,
            token: user.token
        })
    } 
}));
