import { combineReducers } from 'redux' ;
import post from './post';
import comment from './comment';
import todo from './todo';


// import visibilityFilter from './visibilityFilter'  

export default combineReducers({
    post,
    comment,   
    todo    
});