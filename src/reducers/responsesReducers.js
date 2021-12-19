import { ADD_RESPONSE } from "../actions/types";

const initialState = {
	responses: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_RESPONSE:
			return {
				...state,
				responses: [...state.responses, action.payload],
			};
		default:
			return state;
	}
}
