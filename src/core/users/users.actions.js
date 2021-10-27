import {
	GET_USER,
	GET_USERS
} from "./users.const";

import { baseUrl } from '../environment.const';
import { normalizeData } from "../../tools/normalizeData";

export const getUsers = () => async (dispatch, getState, api) => {
	try {
		const res = await api('GET', baseUrl);
		if (!res.status) {
			throw new Error('Трапилась помилка!');
		}
		const date = new Date();
		const newUsers = res.data.map(user => ({ ...user, date }));
		const { users } = normalizeData(newUsers, 'users');

		return dispatch({
			type: GET_USERS,
			payload: users,
		});
	} catch (e) {
		console.log({ e });
	}
};

export const getUser = (userId) => async (dispatch, getState, api) => {
	try {
		const res = await api('GET', `${baseUrl}/${userId}`);
		if (!res.status) {
			throw new Error('Трапилась помилка!');
		}

		const date = new Date();
		const newUser = { ...res.data, date };
		const { user } = normalizeData(newUser, 'user');

		return dispatch({
			type: GET_USER,
			payload: user,
		});
	} catch (e) {
		console.log({ e });
	}
}