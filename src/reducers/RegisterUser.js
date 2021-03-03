import { 
  REGISTER_USER,
  REGISTER_FAILURE
} from '../actions/types';

const initialState={
  payload:"",
  loading:true,
  errors:[],
  isAuthenticated:false
}

export default function(state=initialState,action){

  const {type , payload } = action;

  switch(type){
    case REGISTER_USER:
      return {
        ...state,
        payload,
        isAuthenticated:true
      }
    case REGISTER_FAILURE:
      
      return{
        ...state,
        isAuthenticated:false,
        loading:false,
        errors:payload
      }
    default:
        return state
  }

}