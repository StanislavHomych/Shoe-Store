import { combineReducers } from "redux";
import { GetItemsReducer } from "./Reducers/GetItemsReducer";

export let rootReducer = combineReducers({
    getItems: GetItemsReducer
})