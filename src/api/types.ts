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
  title: string;
  type: string;
  image: string;
  author: string;
  datePublished: string;
  headline: string;
  dateModified: string;
  _id: number;
  body: string;
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


export const links = [
  {link: '/', name: 'Blog', },
  // {link: '/articles', name: 'Articles', },
  {link: '/about', name: 'About', },
  {link: '/contact', name: 'Contact', },
];