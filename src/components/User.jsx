import {
	ProfileCard,
	ProfileWrapper
} from './CustomComponents';
import React, { useEffect, useState } from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';

import { getUser } from '../core/users/users.actions';
import { useParams } from "react-router-dom";
import { userSelector } from '../core/users/users.selectors';

const User = () => {
	const { userId } = useParams();
	const dispatch = useDispatch();
	const user = useSelector(userSelector(userId));
	const [isLoading, setIsLoading] = useState(false);

	const getData = async () => {
		setIsLoading(true);
		await dispatch(getUser(userId));
		setIsLoading(false);
	}

	useEffect(() => {
		getData();
	}, []);

	const {
		name,
		phone,
		email,
		username,
		website,
		address,
		company,
	} = user || {};

	if (!address) {
		return null;
	}

	return (
		<>
			{isLoading ?
				<div>Завантаження...</div>
				:
				<ProfileWrapper>
					<ProfileCard>
						<span className="title">General info:</span>
						<div><span>Name:</span> {name}</div>
						<div><span>Email:</span> {email}</div>
						<div><span>Phone:</span> {phone}</div>
						<div><span>Address:</span> {address.city}/{address.street}</div>
					</ProfileCard>
					<ProfileCard>
						<span className="title">Other info:</span>
						<div><span>Username:</span> {username}</div>
						<div><span>Website: </span>{website}</div>
						<div><span>Company:</span>
							<div><span>Name:</span> {company.name}</div>
							<div><span>Bs:</span> {company.bs}</div>
							<div><span>CatchPhrase:</span> {company.catchPhrase}</div>
						</div>
					</ProfileCard>
				</ProfileWrapper>
			} </>
	)
};

export default User;