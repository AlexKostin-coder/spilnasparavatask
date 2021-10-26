export const usersSelector = state => {
	const users = state.users;
	return Object.keys(users).map((key) => users[key]);
};
export const userSelector = userId => state => {
	if (userId) {
		const users = state.users;
		return users[userId];
	}
	return null;
};