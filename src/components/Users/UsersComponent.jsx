import React, { useEffect } from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';

import UsersC from './UsersC';
import UsersF from './UsersF';
import { getUsers } from '../../core/users/users.actions';
import { usersSelector } from '../../core/users/users.selectors';

const UsersComponent = () => {
	const dispatch = useDispatch();
	const users = useSelector(usersSelector);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<UsersF
			users={users}
		/>
	);
};

export default UsersComponent;
