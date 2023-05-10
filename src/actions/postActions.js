import { FETCH_POSTS, NEW_POSTS } from "./Type";
export const SnakeBar="SnakeBar";
export const Comments = "Comments";
export const Todo = "Todo"

export const posts = (payload)=>({
    type:FETCH_POSTS,
    payload
})

export const addposts = (payload)=>({
    type:NEW_POSTS,
    payload
})
export const comments = (payload) => ({
    type: Comments,
    payload
});
export const todos = (payload) => ({
    type: Todo,
    payload
});

