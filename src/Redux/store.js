import {applyMiddleware, legacy_createStore as createStore} from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';



export let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
