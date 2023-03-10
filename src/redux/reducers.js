import * as types from "./actionsType";

const initailState={
    dog:{},
    dogs:[],
    loading:false,
}

export  const dogsReducer=(state=initailState,action)=>{

    if(action.type===types.FETCH_DOGS_START){
        return{
         ...state,
         dogs:[],
         loading:true

        }
    }
    else if(action.type===types.FETCH_DOGS_SUCCESS){
        return{
         ...state,
         dogs:action.payload,
         loading:false

        }
    }
    else if(action.type===types.FETCH_DOGS_FAIL){
        return{
         ...state,
         dogs:action.payload,
         loading:false

        }
    }
    else if(action.type===types.SINGLE_FETCH_DOGS_START){
        return{
         ...state,
         dog:{},
         loading:true

        }
    }
    else if(action.type===types.SINGLE_FETCH_DOGS_SUCCESS){
        return{
         ...state,
         dog:action.payload,
         loading:false

        }
    }
    else if(action.type===types.SINGLE_FETCH_DOGS_FAIL){
        return{
         ...state,
         dogs:action.payload,
         loading:false

        }
    }
    else if(action.type===types.SEARCH_FETCH_DOGS_START){
        return{
         ...state,
         dogs:[],
         loading:true

        }
    }
    else if(action.type===types.SEARCH_FETCH_DOGS_SUCCESS){
        return{
         ...state,
         dogs:action.payload,
         loading:false

        }
    }
    else if(action.type===types.SEARCH_FETCH_DOGS_FAIL){
        return{
         ...state,
         dog:action.payload,
         loading:false

        }
    }
    else{
        return{
            ...state,
   
           }
    }
}