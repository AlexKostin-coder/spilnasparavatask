import {
	GET_USER,
	GET_USERS,
	defaultUsers
} from "./users.const";

export const users = (state = defaultUsers, action) => {
	switch (action.type) {
		case GET_USER:
		case GET_USERS: {
			return {
				...state,
				...action.payload,
			}
		}
		default:
			return state;
	}
}