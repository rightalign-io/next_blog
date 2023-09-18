import axios, { AxiosResponse } from "axios"
import { useArticleStore } from "../store/articlesStore";
import { useUserStore } from "../store/userStore";
import { base_api, IUser, Post, UserLoginProps } from "./types";

/*
    * Todo:
    ~ This file is for making api calls.
    ~ CRUD operations to the blog api.
    ~ move the constants, types & interfaces out of this file.
*/

const api_baseUrl = base_api;
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
        return { data: null, loggedIn: true, status: 309 };
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
        return { data: null, loggedIn: true, status: 309 };
    }
}

/*
    * First model for requests that will be needing authentication on the server side
    ~ this function will be called after we log in to get the articles.
    ! when making post requests that need to be authentified use the headers -> Authorization attribute so the work.
*/
export const blogArticles = async () =>{ 
    
    try {
       return await (await axios.get(`${api_baseUrl}/posts/`)).data
    } catch (error) {
        console.log('Articles Error\n', error)
        return { data: null, message: 'Sorry, getting articles error...', status: 309 }
    }
}

type EditArticle = {
    data: any;
    message: string;
    status?: number;
}

export const saveArticle = (updates: Post): EditArticle => {
    try {
        const tokenString = sessionStorage.getItem('user') as string
        const sessionData = JSON.parse(tokenString).token
        // console.log('updates: ', updates);
        if(sessionData) {
            const response = axios.put(`${api_baseUrl}/posts/edit`, JSON.stringify(updates), {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: sessionData,
                }}
            ).then(res => {
                return {data: res.data, status: res.data.status}
            })
            // console.log('get view article error:\n', response);
            return response as unknown as EditArticle;
        } else {
            return {data: null, message: 'User not logged in...', status: 300 };
        }
    } catch (error) {
        // console.log('get view article error:\n', error);
        return { data: null, message:'Sorry, Edit Article Error...', status: 309 }
    }
}



/*
* Todo:
~ This file is for making api calls. 
*/