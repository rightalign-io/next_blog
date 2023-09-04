export interface IUser {
    email: string;
    fullname: string;
    lastname: string;
    password: string;
    // name: string;
    // photo: string;
    // createdAt: string;
    // updatedAt: string;
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
  
  