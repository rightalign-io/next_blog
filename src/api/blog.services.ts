import axios from "axios"
import { useUserStore } from "../store/userStore";
import { IUser, UserLoginProps } from "./types";

/*
    * Todo:
    ~ This file is for making api calls.
    ~ CRUD operations to the blog api.
    ~ move the constants, types & interfaces out of this file.
*/

const api_baseUrl = 'http://localhost:5000';
export const userLogin = async (data:UserLoginProps) =>{ 
    /*
    ! make sure the content-type is application json, then wrap the post data with json.stringify.
    ! make sure the url is correct & data structure is correct to.
    */
    try {
        let token = await axios.post(`${api_baseUrl}/user/login`, JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        } });

        return token.data;
        
    } catch (error) {
        console.log('Login Error\n', error);
        return false
    }
}

export const userRegistration = async (data:UserLoginProps) =>{ 
    
    try {
        let token = await axios.post(`${api_baseUrl}/user/register`, JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        } });

        return token;
        
    } catch (error) {
        console.log('Login Error\n', error)
    }
}

export const blogArticles = async () =>{ 
    const token = useUserStore((state) => state.token)

    try {
        let posts = await axios.get(`${api_baseUrl}/posts/`, {
        headers: {
            'authentication': `${token}`
        } });
        console.log('Posts: \n', posts);
        return token;
        
    } catch (error) {
        console.log('Login Error\n', error)
    }
}




/*
* Todo:
~ This file is for making api calls. 
*/