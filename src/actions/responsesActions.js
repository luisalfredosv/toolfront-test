import axios from "axios";

import { ADD_RESPONSE } from "./types";

export const send = (text) => async (dispatch) => {
	const URL_BACK = "https://tranquil-taiga-63901.herokuapp.com";
	// OR http://localhost:8080 in local

	const { data } = await axios.get(`${URL_BACK}/iecho?text=${text}`);

	dispatch({
		type: ADD_RESPONSE,
		payload: data,
	});
};
