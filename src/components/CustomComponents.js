import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Col = styled.div`
  padding: 6px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  width: 100%;
`;

export const ColHead = styled(Col)`
  background-color: lightgray;
  font-weight: bold;
	cursor: pointer;
`;

export const Button = styled.button`
  padding: 6px;
	background: white;
	color: blue;
	margin-bottom: 14px;
	border-radius: 10px;
	border: 1px solid blue;
	cursor: pointer;
	transition: background .3s linear;
	:hover {
		background: blue;
		color: white;
}
`;

export const Modal = styled.div`
	position:absolute;
	top: 50%;
	left: 50%;
	margin-left: -250px;
	margin-top: -250px;
	background: white;
	width: 500px;
	height: 500px;
	border-radius: 20px;
	border: 1px solid grey;
`;

export const ModalHeader = styled.div`
	border-bottom: 1px solid grey;
	height: 40px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	color: grey;
`;

export const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ModalFooter = styled.div`
	border-top: 1px solid grey;
	width: 100%;
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: end;
`;

export const Option = styled.div`
	display: flex;
	align-items: center;
	font-size: 20px;
	text-transform: capitalize;
	padding: 6px;
	border: 1px solid grey;
	margin-left: 10px;
	margin-right: 10px;
`;

export const SearchBar = styled.input`
	height: 30px;
	margin: 20px 10px;
	border-radius: 10px;
`;

export const ButtonModal = styled.button`
	padding: 8px 16px;
	margin: 6px;
	border-radius: 12px;
	cursor: pointer;
	background-color: ${props => props.success ? 'green' : 'transparent'};
	color: ${props => props.success ? 'white' : 'black'};
	transition: background-color .3s ease-in;
	:hover {
		background-color: transparent;
		color: black
	}
`;

export const CheckBox = styled.input`
`;

export const ProfileWrapper = styled.div`
	display: flex;
`;

export const ProfileCard = styled.div`
	font-size: 18px;
	border: 1px solid grey;
	border-radius: 12px;
	background: ligthgrey;
	padding: 20px;
	margin: 10px;
	.title{
		text-decoration: underline
	}
	div span {
		font-weight: bold;
	}
`;