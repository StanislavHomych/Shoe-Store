import axios from "axios";


export const fetchItems = () => {
    return async (dispatch) => {
        try {
            dispatch({ type:"FETCH_ITEMS" })
            const response = await axios.get('http://localhost:3000/shoes')
            dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: response.data })
        } catch (e) {
            dispatch({ type:"FETCH_ITEMS_ERROR", payload: "Помилка при загрузці користувачів" })
        }
    }
}


