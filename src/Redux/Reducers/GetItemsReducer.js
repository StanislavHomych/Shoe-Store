let FETCH_ITEMS = "FETCH_ITEMS";
let FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
let FETCH_ITEMS_ERROR = "FETCH_ITEMS_ERROR";

let CHOOSE_SIZE = "CHOOSE_SIZE";
let FETCH_ITEMS_BY_GROWTH = "FETCH_ITEMS_BY_GROWTH";
let FETCH_ITEMS_BY_GROWTH_SUCCESS = "FETCH_ITEMS_BY_GROWTH_SUCCESS";
let FETCH_ITEMS_BY_GROWTH_ERROR = "FETCH_ITEMS_BY_GROWTH_ERROR";

let FETCH_ITEMS_BY_DECLINE = "FETCH_ITEMS_BY_DECLINE";
let FETCH_ITEMS_BY_DECLINE_SUCCESS = "FETCH_ITEMS_BY_DECLINE_SUCCESS";
let FETCH_ITEMS_BY_DECLINE_ERROR = "FETCH_ITEMS_BY_DECLINE_ERROR";





let initialState = {
    error: null,
    loading: false,
    items: [],
    status: 0
}

export let GetItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return { ...state, loading: true };
        case FETCH_ITEMS_SUCCESS:
            return { ...state, loading: false, items: action.payload };
        case FETCH_ITEMS_ERROR:
            return { ...state, loading: false, error: action.payload };
        case CHOOSE_SIZE:
            let stateCopy = { ...state }
            stateCopy.items[action.itemId - 1].size[action.sizeItemId - 1].isChoosen = action.payload
            return { ...stateCopy };
        case FETCH_ITEMS_BY_GROWTH:
            return { ...state, loading: true };
        case FETCH_ITEMS_BY_GROWTH_SUCCESS:
            return { ...state, loading: false, items: action.payload };
        case FETCH_ITEMS_BY_GROWTH_ERROR:
            return { ...state, loading: false, error: action.payload };
        case FETCH_ITEMS_BY_DECLINE:
            return { ...state, loading: true };
        case FETCH_ITEMS_BY_DECLINE_SUCCESS:
            return { ...state, loading: false, items: action.payload };
        case FETCH_ITEMS_BY_DECLINE_ERROR:
            return { ...state, loading: false, error: action.payload };



        default: return state

    }
}


