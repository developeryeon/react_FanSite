import React from 'react';
import Header from '../common/Header';
import LetterList from '../common/LetterList';
import styled from 'styled-components';
// import MemberList from '../common/MemberList';

export default function Home() {
	return (
		<BodyContainer>
			<Header />
			<LetterList />
			{/* <Detail /> */}
		</BodyContainer>
	);
}

const BodyContainer = styled.div`
	background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
`;
