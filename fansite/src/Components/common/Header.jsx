import styled from 'styled-components';
import Tabs from './Tabs';
import '../../App.css';

function Header({ activeMember, setActiveMember }) {
	return (
		<Container>
			<IMG src={require(`../assets/programBN.png`)} alt="배너" />
			<IMG src={require(`../assets/programBN.png`)} alt="배너" />
			<Tabs activeMember={activeMember} setActiveMember={setActiveMember} />
		</Container>
	);
}

const Container = styled.header`
	display: flex;
`;

const IMG = styled.img`
	display: flex;
	flex-direction: row;
	height: 280px;
`;

export default Header;
