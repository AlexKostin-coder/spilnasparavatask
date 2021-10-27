import React, { useEffect, useState } from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';

import { Loading } from '../CustomComponents';
import UsersF from './UsersF';
import { getUsers } from '../../core/users/users.actions';
import { usersSelector } from '../../core/users/users.selectors';

const UsersComponent = () => {
	const dispatch = useDispatch();
	const users = useSelector(usersSelector);
	const [isLoading, setIsLoading] = useState(false);

	const getData = async () => {
		try {
			setIsLoading(true);
			await dispatch(getUsers());
			setIsLoading(false);
		} catch (e) {
			console.log({ e });
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{isLoading ?
				<Loading>Завантаження...</Loading>
				:
				<UsersF
					users={users}
				/>
			}
		</>
	);
};

export default UsersComponent;
