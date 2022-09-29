import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as getItemsActionCreators from "../Redux/GetItemsAC/getItemsAC";

export const useItemActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(getItemsActionCreators, dispatch)
}