import axios from "axios";
import { comments } from "../actions/postActions";
export const commentData = (postId) => async (dispatch) =>{
    try{
        const comment = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        dispatch(comments(comment.data))
    }catch(error){
        dispatch(
            { toggle: true, err: " Request failed with status code 404 on Comment" }
        )
    }
};