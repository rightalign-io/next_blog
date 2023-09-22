export interface IUser {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    loggedIn: boolean;
    // name: string;
    // photo: string;
    // createdAt: string;
    // updatedAt: string;
  }
export interface Post {
  _id: number;
  type: string;
  body: string;
  title: string;
  image: string;
  author: string;
  headline: string;
  datePublished: string;
  dateModified: string;
}
  
  export interface UserLoginProps {
    password: string;
    email: string;
  }
  export interface GenericResponse {
    status: string;
    message: string;
  }
  
  export interface ILoginResponse {
    status: string;
    access_token: string;
  }
  
  export interface IUserResponse {
    status: string;
    data: {
      user: IUser;
    };
  }
  
  // env.local
export const NEXT_PUBLIC_UNSPLASH_CLIENT_ID="0xMKBN204nHKnZ5xjrcv96yOqVRsuemZa6mQfXgjEv0"

export const base_api = "https://apiv1-v2ll.onrender.com"

export const links = [
  {link: '/', name: 'Blog', },
  // {link: '/articles', name: 'Articles', },
  {link: '/about', name: 'About', },
  {link: '/contact', name: 'Contact', },
];

export type credState = {
  login:boolean;
  forgot: boolean;
  signUp: boolean;
  user?:string;
  stateChange: Dispatch<SetStateAction<{ login: boolean; forgot: boolean; signUp: boolean; }>>;
}

export type credentialsProps = {
  updateUser: (user: IUser) => void;
  // login:boolean;
  // signUp: boolean;
  // stateChange?: Dispatch<SetStateAction<{ login: boolean; forgot: boolean; signUp: boolean; }>>;
}