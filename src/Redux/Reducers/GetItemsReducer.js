let FETCH_ITEMS = "FETCH_ITEMS";
let FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
let FETCH_ITEMS_ERROR = "FETCH_ITEMS_ERROR"





let initialState = {
    error: null,
    loading: false,
    items: []
}

export let GetItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return { ...state, loading: true };
        case FETCH_ITEMS_SUCCESS:
            return { ...state, loading: false, items: action.payload };
        case FETCH_ITEMS_ERROR:
            return { ...state, loading: false, error:action.payload };
        default:
            return state
    }
}