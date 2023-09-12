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
}
interface UserState {
    user: IUser;
}
interface UserActions {
    updateUser: (user: IUser) => void
  }

export const useUserStore = create<UserState & UserActions>( (set, get) => ({
    user: {
        email: '',
        token: '', 
        img: 'none', 
        loggedIn: false
    },
    updateUser: (user) => {
        set(() => ({
            user: user
        }))
        // console.log('state: ', user.email, user.token);
    },
}));
