import { Todo } from "../actions/postActions";
const initialState = {
    todo : []
};

export default function todo(state = initialState, action) {
    switch (action.type) {
      case Todo:
        return {
          ...state,
          todo: action.payload,
        };
      
      default:
        return state;
    }
  }