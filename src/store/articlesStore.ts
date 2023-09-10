import create from 'zustand';
import { Post } from '../api/types';
// import { IUser } from '../api/types';

/*
~ to update the store we need to add 'set' && 'get' parameter to it as call back.
~ The zustand for typescript needs to get a type for create: 
*/

interface ArticlesState {
    updatedArticle: Post;
    articles: Post[];
}

type ArticlesAction = {
    setArticles: (articles: ArticlesState['articles']) => void /* tell us if you added successfully */
    updateArticle: (updates: ArticlesState['updatedArticle']) => void
}
  
export const useArticleStore = create<ArticlesState & ArticlesAction> (( set ) => ({
    updatedArticle: {
        author: 'post.author',
        image: 'post.image',
        type: 'post.type', 
        title: 'post.title',
        headline: 'post.headline',
        datePublished: 'post.tePublished',
        dateModified: 'post.dateModifie',
        body:'',
        _id: 0,
    },
    articles: [],
    setArticles: (articles) => set(() => ({ articles: articles })),
    updateArticle: (updates) =>{
        console.log(updates);
        // set(() => ({ updates.updatedArticle: updates }))
    }
    }))
