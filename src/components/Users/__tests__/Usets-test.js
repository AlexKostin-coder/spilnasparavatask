import React from 'react';
import Users from '../Users';
import renderer from 'react-test-renderer';

it('renders correctly UsersComponent', () => {
	renderer.create(<Users />);
});
