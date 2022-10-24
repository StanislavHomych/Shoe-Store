let POST_USER = "POST_USER";
let POST_USER_SUCCESS = "POST_USER_SUCCESS";
let POST_USER_ERROR = "POST_USER_ERROR"





let initialState = {
    error: null,
    loading: false,
    responseStatus: 0
}

export let RegistrateUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_USER:
            return { ...state, loading: true };
        case POST_USER_SUCCESS:
            return { ...state, loading: false, items: action.payload, responseStatus: action.payload };
        case POST_USER_ERROR:
            return { ...state, loading: false, error:action.payload };
        default:
            return state
    }
}