import {
	ButtonModal,
	CheckBox,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Option,
	SearchBar,
} from './CustomComponents';
import React, { useState } from 'react';

const ModalColumnSelect = props => {

	const {
		isOpen,
		options,
		toggle,
		selectionColumns,
		whichViewColumns,
	} = props;

	const [searchColumns, setSearchColumns] = useState('');

	const searchOption = (option) => {
		return option.toUpperCase().indexOf(searchColumns.toUpperCase()) !== -1;
	}

	const selectionOption = (option) => {
		const newWhichViewColumns = whichViewColumns.includes(option)
			? whichViewColumns.filter(item => item !== option)
			: [...whichViewColumns, option];
		selectionColumns(newWhichViewColumns);
	}

	if (!isOpen) {
		return null;
	}

	return (
		<Modal>
			<ModalHeader>
				Select columns
			</ModalHeader>
			<ModalBody>
				<SearchBar
					type="text"
					placeholder="Search columns..."
					onChange={({ target }) => { setSearchColumns(target.value) }}
				/>
				{options
					.filter(searchOption)
					.map((option, index) => {
						return (
							<Option key={`${option}-${index}`}>
								<CheckBox
									type="checkbox"
									checked={whichViewColumns.includes(option)}
									onChange={() => selectionOption(option)}
								/>
								<div>
									{option}
								</div>
							</Option>
						)
					})}
			</ModalBody>
			<ModalFooter>
				<ButtonModal
					onClick={toggle}
				>
					Close
				</ButtonModal>
			</ModalFooter>
		</Modal>
	)
}

export default ModalColumnSelect;
