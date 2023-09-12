import axios, { AxiosResponse } from "axios"
import { useArticleStore } from "../store/articlesStore";
import { useUserStore } from "../store/userStore";
import { IUser, Post, UserLoginProps } from "./types";

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
        let response = await axios.post(`${api_baseUrl}/user/login`, JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        } });
        return {data: response.data,loggedIn: true, status: response.status};
    } catch (error) {
        // console.log('Login Error\n', error.response.data.message);
        return { data: error.response.data, loggedIn: true, status: error.response.status };
    }
}

export const userRegistration = async (data:IUser) =>{ 
    
    try {
        let response = await axios.post(`${api_baseUrl}/user/register`, JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        } });
        
        return {data: response.data.data, status: response.data.status};
    } catch (error) {
        return { data: error.response.data, loggedIn: false, status: error.response.status };
    }
}

/*
    * First model for requests that will be needing authentication on the server side
    ~ this function will be called after we log in to get the articles.
    ! when making post requests that need to be authentified use the headers -> Authorization attribute so the work.
*/
export const blogArticles = async ():Promise<AxiosResponse<any, any> | never[]> =>{ 
    
    try {
       return await axios.get(`${api_baseUrl}/posts/`)
    } catch (error) {
        console.log('Articles Error\n', error)
        return []
    }
}

export const saveArticle = (updates: Post) => {
    try {
        const tokenString = sessionStorage.getItem('user') as string
        const sessionData = JSON.parse(tokenString).token
        console.log('get article:\n', updates, sessionData);
        if(sessionData){
            axios.put(`${api_baseUrl}/posts/edit`, JSON.stringify(updates), {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: sessionData,
                }}).then(res => {
                console.log('edit response: ', res);
                return {data: res.data.data, status: res.data.status}
            })
        } else {
            return { message: 'User not logged in...', status: 300 };
        }
    } catch (error) {
        console.log('get view article error:\n', error.response.message);
        // return { data: error.response.data, loggedIn: false, status: error.response.status }
    }
}



/*
* Todo:
~ This file is for making api calls. 
*/