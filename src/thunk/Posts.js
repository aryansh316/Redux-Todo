import { posts , addposts } from "../actions/postActions";
import axios from 'axios'
export const postData  = () => async (dispatch) => {
    try {      
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(posts(result.data));
        
    } catch (error) {
      dispatch(
        // { toggle: true, error: "OnChange failed with status code 404" }
      );
    }
    
  };

  export const setposts = (data) => async (dispatch) =>{
    try{
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts' ,{
        ...data
      });
      dispatch(addposts(response.data))
    }
    catch(error){
      dispatch(
        {toggle:true, error:"Error"}
      )
    }
  }