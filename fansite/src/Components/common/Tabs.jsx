import styled, { css } from 'styled-components';

export default function Tabs({ activeMember, setActiveMember }) {
	const onActiveMember = (event) => {
		if (event.target === event.currentTarget) return;

		setActiveMember(event.target.textContent);
	};

	return (
		<TabsWrapper onClick={onActiveMember}>
			<Tab $activeMember={activeMember}>유재석</Tab>
			<Tab $activeMember={activeMember}>하하</Tab>
			<Tab $activeMember={activeMember}>주우재</Tab>
			<Tab $activeMember={activeMember}>이이경</Tab>
			<Tab $activeMember={activeMember}>박진주</Tab>
			<Tab $activeMember={activeMember}>이미주</Tab>
		</TabsWrapper>
	);
}

const TabsWrapper = styled.ul`
	display: flex;
	position: absolute;
	justify-content: space-between;
	left: 50%;
	top: 20%;
	transform: translate(-50%, -50%);
	border-radius: 3px;
	box-shadow: 0 0 8px 1px #e9e9ec;
	list-style: none;
	width: 1000px;
	padding: 1rem;
	background-color: #f8f8ff;
`;

const Tab = styled.li`
	${(props) => {
		if (props.$activeMember === props.children) {
			return css`
				background-color: purple;
				color: #f5f5f5;
			`;
		}
		return css`
			background-color: black;
			color: #f5f5f5;
		`;
	}}
	font-size: 20px;
	border-radius: 5px;
	width: 7.7rem;
	height: 2rem;
	padding: 0.3rem;
	text-align: center;
	cursor: pointer;
`;
