const GithubReducer = (state, action) => {
  switch(action.type){
    case 'GET_USERS':{
      return { 
        ...state,
        users: action.payload,
        loading: false,
      }
    }
    case 'SET_LOADING':{
      return {
        ...state,
        loading: true,
      }
    }
    case 'GET_USER': {
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    }
    case 'CLEAR_USERS':{
      return {
        ...state,
        users: [],
    }
    }
    case 'GET_USER_REPOS':{
      return {
        ...state,
        repos: action.payload,
        loading: false,
      }
    }
    default:{
        return state;
    }
  }
  // console.log(state.user);
  // console.log(state.user);

};
export default GithubReducer;