import axios from "axios"

export const fetchItems = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_ITEMS" })
            const response = await axios.get('http://localhost:3000/shoes')
            dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: response.data })
        } catch (e) {
            dispatch({ type: "FETCH_ITEMS_ERROR", payload: "Помилка при загрузці користувачів" })
        }
    }
}

export const fetchItemsByPriceGrowth = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_ITEMS_BY_GROWTH" })
            const response = await axios.get('http://localhost:3000/shoes?_sort=price&_order=desc')
            dispatch({ type: "FETCH_ITEMS_BY_GROWTH_SUCCESS", payload: response.data })
        } catch (e) {
            dispatch({ type: "FETCH_ITEMS_BY_GROWTH_ERROR", payload: "Помилка при загрузці користувачів" })
        }
    }
}


export const fetchItemsByPriceByDecline = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_ITEMS_BY_DECLINE" })
            const response = await axios.get('http://localhost:3000/shoes?_sort=price&_order=asc')
            dispatch({ type: "FETCH_ITEMS_BY_DECLINE_SUCCESS", payload: response.data })
        } catch (e) {
            dispatch({ type: "FETCH_ITEMS_BY_DECLINE_ERROR", payload: "Помилка при загрузці користувачів" })
        }
    }
}




export const postUser = (object) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "POST_USER" })
            const response = await axios.post('http://localhost:3000/Users',
                { ...object });
            dispatch({ type: "POST_USER_SUCCESS", payload: response.status })
        } catch (e) {
            dispatch({ type: "POST_USER_ERROR", payload: "Помилка при реєстраціії" })
        }
    }
}



export const logIn = (password, name) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "LOG_IN" })
            const response = await axios.get('http://localhost:3000/Users')
            dispatch({
                type: "LOG_IN_SUCCESS", payload: (response.data.find((user) => user.name && user.password === password && name)) || "404",
                favourites: (response.data.find((user) => user.name && user.password === password && name)).favourites || [],
                basket: (response.data.find((user) => user.name && user.password === password && name)).basket || []


            })
        } catch (e) {
            dispatch({ type: "LOG_IN_ERROR", payload: "Помилка при вході" })
        }
    }
}


export const setNewAccountFavourites = (userId, newFavourites) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "POST_FAVOURITES" })
            await axios.patch(`http://localhost:3000/Users/${userId}`,
                { "favourites": [...newFavourites] });
            dispatch({ type: "POST_FAVOURITES_SUCCESS" })
        } catch (e) {
            dispatch({ type: "POST_FAVOURITES_ERROR", payload: "Помилка" })
        }
    }
}

export const setNewAccountBasket = (userId, newBasket) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "POST_BASKET" })
            await axios.patch(`http://localhost:3000/Users/${userId}`,
                { "basket": [...newBasket] });
            dispatch({ type: "POST_BASKET_SUCCESS" })
        } catch (e) {
            dispatch({ type: "POST_BASKET_ERROR", payload: "Помилка" })
        }
    }
}

export const deleteElementsInFavourites = (id) => {
    return (dispatch) => { dispatch({ type: "DELETE_ELEMENT_IN_FAVOURITES", payload: id }) }
}

export const deleteUser = () => {
    return (dispatch) => { dispatch({ type: "DELETE_USER", payload: "exited" }); }

}


export const deleteElementsInBasket = (id) => {
    return (dispatch) => { dispatch({ type: "DELETE_ELEMENT_IN_BASKET", payload: id }) }
}




export const addItemToFavourites = (item) => {
    return (dispatch) => { dispatch({ type: "ADD_ELEMENT_TO_FAVOURITES", payload: item }) }
}

export const addItemToBasket = (item) => {
    return (dispatch) => { dispatch({ type: "ADD_ELEMENT_TO_BASKET", payload: item }) }
}

export const chooseSize = (itemId, sizeItemId, payload) => {
    return (dispatch) => { dispatch({ type: "CHOOSE_SIZE", sizeItemId: sizeItemId, itemId: itemId, payload }) }
}

export const deleteBasketSizeElement = (elementIndex, sizeIndex) =>{
    return (dispatch) => { dispatch({ type: "DELETE_BASKET_SIZE_ELEMENT", elementIndex,sizeIndex }) }
  };


  export const makeOrder = (object)=>{
    return async (dispatch) => {
        try {
            dispatch({ type: "MAKE_PURCHASE" })
            const response = await axios.post('http://localhost:3000/Orders',
                { ...object });
            dispatch({ type: "MAKE_PURCHASE_SUCCESS", responseStatus: response.status })
        } catch (e) {
            dispatch({ type: "MAKE_PURCHASE_ERROR", payload: "Помилка при реєстраціії" })
        }
    }
  }

  export const clearBasket =()=>{
    return (dispatch) => { dispatch({ type: "CLEAR_BASKET"}) }
  }