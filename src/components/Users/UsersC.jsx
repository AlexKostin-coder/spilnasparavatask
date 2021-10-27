import {
	Button,
	Col,
	ColHead,
	Row
} from '../CustomComponents';
import React, { Component } from 'react';

import { Link } from "react-router-dom";
import ModalColumnSelect from '../ModalColumSelect';

const typeColumns = ['name', 'username', 'email', 'phone', 'website'];

class UsersC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			showSelectColumnsModal: false,
			whichViewColumns: typeColumns,
		};
	}

	sortData = (field) => {
		const copyUsers = [...this.state.users];

		this.setSatate((prev) => ({ direction: prev.direction }));
		const sortUsers = this.state.direction
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

		this.setState({ users: sortUsers });

	}

	selectionColumns = (newWhichViewColumns) => {
		localStorage.setItem('spilnaSpravaStore', JSON.stringify(newWhichViewColumns));
		this.setState({ newWhichViewColumns });
	}

	getOptionColumns = () => {
		const localStore = JSON.parse(localStorage.getItem('spilnaSpravaStore'));
		if (localStore) {
			this.setState({ newWhichViewColumns: localStore });
		}
	}

	componentDidMount() {
		this.getOptionColumns();
	}


	render() {

		const {
			showSelectColumnsModal,
			whichViewColumns,
			users
		} = this.state;

		if (!users) {
			return null;
		}

		return (
			<div>
				<Button onClick={() => this.setState((prev) => ({ showSelectColumnsModal: !prev.showSelectColumnsModal }))}>
					Select columns
				</Button>
				<ModalColumnSelect
					isOpen={showSelectColumnsModal}
					toggle={() => this.setState((prev) => ({ showSelectColumnsModal: !prev.showSelectColumnsModal }))}
					options={typeColumns}
					whichViewColumns={whichViewColumns}
					selectionColumns={this.selectionColumns}
				/>
				<Row>
					{
						whichViewColumns.includes('name') ?
							<ColHead onClick={() => this.sortData('name')}>
								Name
							</ColHead>
							:
							null
					}
					{
						whichViewColumns.includes('username') ?
							<ColHead onClick={() => this.sortData('username')}>
								UserName
							</ColHead>
							:
							null
					}
					{
						whichViewColumns.includes('email') ?
							<ColHead onClick={() => this.sortData('email')}>
								Email
							</ColHead>
							:
							null
					}
					{
						whichViewColumns.includes('phone') ?
							<ColHead onClick={() => this.sortData('phone')}>
								Phone
							</ColHead>
							:
							null
					}
					{
						whichViewColumns.includes('website') ?
							<ColHead onClick={() => this.sortData('website')}>
								WebSite
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
							website
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
							</Row>
						)
					})
				}
			</div>
		)
	}
}

export default UsersC;
