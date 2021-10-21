import {
	ProfileCard,
	ProfileWrapper
} from './CustomComponents';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { baseUrl } from "../core/environment.const";
import { useParams } from "react-router-dom";

const User = () => {
	const { userId } = useParams();
	const [user, setUser] = useState({});

	const getUser = async () => {
		try {
			const { data, status } = await axios.get(`${baseUrl}/${userId}`);
			if (!status) {
				throw new Error('Сервер не доступний!');
			}
			setUser(data);
		}
		catch (e) {
			console.log(e)
		}
	};

	useEffect(() => {
		getUser();
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
	)
};

export default User;