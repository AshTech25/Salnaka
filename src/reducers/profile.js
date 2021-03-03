import { 
    UPDATE_PROFILE,
    UPDATE_PROFILE_FAILURE
  } from '../actions/types';
  
  const initialState={
    payload:"",
    loading:true,
    errors:[],
  }
  
  export default function(state=initialState,action){
  
    const {type , payload } = action;
  
    switch(type){
      case UPDATE_PROFILE:
        return {
          ...state,
          payload,
          loading:false,
        }
      case UPDATE_PROFILE_FAILURE:
        
        return{
          ...state,
          loading:false,
          errors:payload
        }
      default:
          return state
    }
  
  }