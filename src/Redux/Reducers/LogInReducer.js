let LOG_IN = "LOG_IN";
let LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
let LOG_IN_ERROR = "LOG_IN_ERROR";
let SET_USER_ACTIVE = "SET_USER_ACTIVE";
let DELETE_USER = "DELETE_USER";
let DELETE_ELEMENT_IN_FAVOURITES = "DELETE_ELEMENT_IN_FAVOURITES";
let DELETE_ELEMENT_IN_BASKET = "DELETE_ELEMENT_IN_BASKET";

let POST_FAVOURITES = "POST_FAVOURITES";
let POST_FAVOURITES_SUCCESS = "POST_FAVOURITES_SUCCESS";
let POST_FAVOURITES_ERROR = "POST_FAVOURITES_ERROR";

let POST_BASKET = "POST_BASKET";
let POST_BASKET_SUCCESS = "POST_BASKET_SUCCESS";
let POST_BASKET_ERROR = "POST_BASKET_ERROR";


let ADD_ELEMENT_TO_FAVOURITES = "ADD_ELEMENT_TO_FAVOURITES";
let ADD_ELEMENT_TO_BASKET = "ADD_ELEMENT_TO_BASKET";

let DELETE_BASKET_SIZE_ELEMENT = "DELETE_BASKET_SIZE_ELEMENT";

let MAKE_PURCHASE = "MAKE_PURCHASE";
let MAKE_PURCHASE_SUCCESS = "MAKE_PURCHASE_SUCCESS";
let MAKE_PURCHASE_ERROR = "MAKE_PURCHASE_ERROR";

let CLEAR_BASKET = "CLEAR_BASKET";




let initialState = {
    error: null,
    loading: false,
    user: false,
    favourites: [],
    basket: [],
    status: 0
}

export let LoginUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return { ...state, loading: true };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                status: action.responseStatus,
                favourites: action.favourites,
                basket: action.basket
            };
        case LOG_IN_ERROR:
            return { ...state, loading: false, error: action.payload };
        case SET_USER_ACTIVE:
            return { ...state, isUserActive: true };
        case DELETE_USER:
            return { ...state, user: action.payload };

        case DELETE_ELEMENT_IN_FAVOURITES:
            let newFavourites = state.favourites.filter((element) => {
                return action.payload !== element
            });
            return { ...state, favourites: [...newFavourites] };


        case DELETE_ELEMENT_IN_BASKET:
            let newBasket = state.basket.filter((element) => {
                return action.payload !== element
            });
            return { ...state, basket: [...newBasket] };

        case POST_FAVOURITES:
            return { ...state, loading: true };
        case POST_FAVOURITES_SUCCESS:
            return { ...state, loading: false };
        case POST_FAVOURITES_ERROR:
            return { ...state, error: action.payload };

        case POST_BASKET:
            return { ...state, loading: true };
        case POST_BASKET_SUCCESS:
            return { ...state, loading: false };
        case POST_BASKET_ERROR:
            return { ...state, error: action.payload };

        case ADD_ELEMENT_TO_FAVOURITES:
            return { ...state, favourites: [...state.favourites, action.payload] };

        case ADD_ELEMENT_TO_BASKET:
            return { ...state, basket: [...state.basket, action.payload] };

        case DELETE_BASKET_SIZE_ELEMENT:
            {
                let stateCopy = { ...state };
                stateCopy.basket[action.elementIndex].size.splice(action.sizeIndex, 1)
                console.log(stateCopy)
                return { ...stateCopy }
            }

        case MAKE_PURCHASE:
            return { ...state, loading: true };
        case MAKE_PURCHASE_SUCCESS:
            return { ...state, loading: false, status: action.responseStatus };
        case MAKE_PURCHASE_ERROR:
            return { ...state, loading: false, error: action.payload };

        case CLEAR_BASKET:
            return { ...state, basket: [] }




        default:
            return state
    }
}