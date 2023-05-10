import axios from "axios";
import { todos } from "../actions/postActions";
export const todoData = () => async (dispatch) =>{
    try{
        const todo = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        
        dispatch(todos(todo.data))
    }catch(error){
        dispatch(
            { toggle: true, err: " Request failed with status code 404 on Comment" }
        )
    }
};