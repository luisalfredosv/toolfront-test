import { combineReducers } from "redux";
import responsesReducers from "./responsesReducers";

export default combineReducers({
	responses: responsesReducers,
});
