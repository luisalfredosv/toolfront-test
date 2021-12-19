import axios from "axios";

import { ADD_RESPONSE } from "./types";

export const send = (text) => async (dispatch) => {
	const { data } = await axios.get(
		`http://localhost:8080/iecho?text=${text}`
	);

	dispatch({
		type: ADD_RESPONSE,
		payload: data,
	});
};
