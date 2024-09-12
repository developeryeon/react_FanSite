import React, { useState } from 'react';
import Header from '../common/Header';
import LetterList from '../common/LetterList';
import styled from 'styled-components';
import Form from '../common/Form';

export default function Home({ letters, setLetters }) {
	const [activeMember, setActiveMember] = useState('유재석');
	return (
		<BodyContainer>
			<Header activeMember={activeMember} setActiveMember={setActiveMember} />
			<Form setLetters={setLetters} />
			<LetterList letters={letters} activeMember={activeMember} />
		</BodyContainer>
	);
}

const BodyContainer = styled.div`
	background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
	display: flex;
	flex-direction: column;
	align-items: center;
`;
