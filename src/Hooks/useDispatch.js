import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as getItemsActionCreators from "./../Redux/ActionCreators/ActionCreatorsCommon";

export const useItemActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(getItemsActionCreators, dispatch)
}