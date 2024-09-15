import React, { useEffect, useState } from 'react';
import Form from './Form';
import fakeData from '../common/Data/fakeData.json';
import LetterCard from './LetterCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LetterList() {
	const [comment, setComment] = useState([]); // 상태 변수 comment를 선언하고 초기값은 빈 배열로 설정, setComment는 상태를 업데이트하는 함수
	const [selectedMember, setSelectedMember] = useState('유재석'); // 상태 변수 selectedMember를 선언하고 초기값은 '유재석'으로 설정, setSelectedMember는 상태를 업데이트하는 함수

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const createdAt = new Date().toLocaleString();
		const nickname = e.target.nickname.value;
		const content = e.target.content.value;
		const writedTo = e.target.writedTo.value;

		if (!nickname || !content) {
			return null;
		}

		const commentObj = { id: crypto.randomUUID(), createdAt, nickname, content, writedTo };

		if (commentObj) {
			setComment([commentObj, ...comment]);
			localStorage.setItem('comments', JSON.stringify([commentObj, ...comment]));
		}

		e.target.reset();
	};

	// useEffect(() => {
	// 	const data = JSON.parse(localStorage.getItem('comments')) || fakeData;
	// 	dispatch(setComment(data));
	// }, []);

	return (
		<LetterListWrap>
			<Form onSubmitHandler={onSubmitHandler} selectedMember={selectedMember} setSelectedMember={setSelectedMember} />

			<LetterListUL>
				{comment.map((card) => (
					<Link to={`detail/${card.id}`} key={card.id}>
						<LetterCard id={card.id} nickname={card.nickname} createdAt={card.createdAt} writedTo={card.writedTo} content={card.content} />
					</Link>
				))}
			</LetterListUL>
		</LetterListWrap>
	);
}

const LetterListWrap = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const LetterListUL = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 20px;
	width: 680px;
	border-radius: 5px;
	align-items: center;
	justify-content: center;
`;

export default LetterList;
