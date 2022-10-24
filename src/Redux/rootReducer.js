import { combineReducers } from "redux";
import { GetItemsReducer } from "./Reducers/GetItemsReducer";
import { RegistrateUsersReducer } from "./Reducers/RegistrateUserReducer";
import { LoginUsersReducer } from "./Reducers/LogInReducer";


export let rootReducer = combineReducers({
    getItems: GetItemsReducer,
    registrateUsersReducer: RegistrateUsersReducer,
    logIn: LoginUsersReducer
})