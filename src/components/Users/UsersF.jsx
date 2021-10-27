import {
	Button,
	Col,
	ColHead,
	Row
} from '../CustomComponents';
import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import ModalColumnSelect from '../ModalColumSelect';
import { formatDate } from '../../tools/formatDate';

const typeColumns = ['name', 'username', 'email', 'phone', 'website', 'date'];

const UsersF = props => {
	const [users, setUsers] = useState([]);
	const [direction, setDirection] = useState(true);
	const [whichViewColumns, setWhichViewColumns] = useState(typeColumns);
	const [showSelectColumnsModal, setShowSelectColumnsModal] = useState(false);


	const sortData = (field) => {
		const copyUsers = [...users];

		setDirection(!direction);
		const sortUsers = direction
			? copyUsers.sort((a, b) => {
				if (a[field] > b[field]) {
					return 1;
				}
				if (a[field] < b[field]) {
					return -1;
				}
				return 0;
			})
			: copyUsers.reverse();

		setUsers(sortUsers);

	}

	const selectionColumns = (newWhichViewColumns) => {
		localStorage.setItem('spilnaSpravaStore', JSON.stringify(newWhichViewColumns));
		setWhichViewColumns(newWhichViewColumns);
	}

	const getOptionColumns = () => {
		const localStore = JSON.parse(localStorage.getItem('spilnaSpravaStore'));
		if (localStore) {
			setWhichViewColumns(localStore);
		}
	}

	useEffect(() => {
		setUsers(props.users);
	}, [props.users]);

	useEffect(() => {
		getOptionColumns();
	}, []);

	if (!props.users) {
		return null;
	}

	return (
		<div>
			<Button onClick={() => setShowSelectColumnsModal(!showSelectColumnsModal)}>
				Select columns
			</Button>
			<ModalColumnSelect
				isOpen={showSelectColumnsModal}
				toggle={() => setShowSelectColumnsModal(!showSelectColumnsModal)}
				options={typeColumns}
				whichViewColumns={whichViewColumns}
				selectionColumns={selectionColumns}
			/>
			<Row>
				{
					whichViewColumns.includes('name') ?
						<ColHead onClick={() => sortData('name')}>
							Name
						</ColHead>
						:
						null
				}
				{
					whichViewColumns.includes('username') ?
						<ColHead onClick={() => sortData('username')}>
							UserName
						</ColHead>
						:
						null
				}
				{
					whichViewColumns.includes('email') ?
						<ColHead onClick={() => sortData('email')}>
							Email
						</ColHead>
						:
						null
				}
				{
					whichViewColumns.includes('phone') ?
						<ColHead onClick={() => sortData('phone')}>
							Phone
						</ColHead>
						:
						null
				}
				{
					whichViewColumns.includes('website') ?
						<ColHead onClick={() => sortData('website')}>
							WebSite
						</ColHead>
						:
						null
				}
				{
					whichViewColumns.includes('date') ?
						<ColHead onClick={() => sortData('date')}>
							Date
						</ColHead>
						:
						null
				}
			</Row>
			{
				users.map((user, index) => {
					const {
						id,
						name,
						username,
						email,
						phone,
						website,
						date,
					} = user;
					return (
						<Row key={`${id} + ${index}`}>
							{
								whichViewColumns.includes('name') ?
									<Col>
										<Link to={`/user/${id}`}>{name}</Link>
									</Col>
									:
									null
							}
							{
								whichViewColumns.includes('username') ?
									<Col>{username}</Col>
									:
									null
							}
							{
								whichViewColumns.includes('email') ?
									<Col>{email}</Col>
									:
									null
							}
							{
								whichViewColumns.includes('phone') ?
									<Col>{phone}</Col>
									:
									null
							}
							{
								whichViewColumns.includes('website') ?
									<Col>{website}</Col>
									:
									null
							}
							{
								whichViewColumns.includes('date') ?
									<Col>{formatDate(date)}</Col>
									:
									null
							}
						</Row>
					)
				})
			}
		</div>
	)
};

export default UsersF;