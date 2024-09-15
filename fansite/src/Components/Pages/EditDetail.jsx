import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function EditDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [findComments, setFindComments] = useState({});
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
		setComments(storedComments);

		const foundComments = storedComments.find((card) => card.id === id) || {};
		setFindComments(foundComments);
	}, [id]);

	const onEditContentHandler = (e) => {
		e.preventDefault();

		const contentValue = e.target.content.value;
		if (!contentValue) {
			return;
		}
		const confirmEdited = window.confirm('수정한 내용을 저장하시겠습니까?');
		if (!confirmEdited) {
			return;
		}

		const updatedComments = comments.map((comment) => (comment.id === id ? { ...comment, content: contentValue } : comment));

		localStorage.setItem('comments', JSON.stringify(updatedComments));
		navigate(`/detail/${id}`);
	};

	const homeBtnClickHandler = () => {
		navigate('/');
		window.location.reload();
	};

	return (
		<EditWrap>
			<EditArticle>
				<HomeBtn onClick={homeBtnClickHandler}>홈으로</HomeBtn>
				<EditHeader>
					{/* <img>아이디 이미지</img> */}
					<EditH1>{findComments?.nickname}</EditH1>
					<p>{findComments?.createdAt}</p>
				</EditHeader>

				<EditBody>
					<p>To: {findComments?.writedTo}</p>

					<form onSubmit={onEditContentHandler}>
						<EditingTextArea name="content" defaultValue={findComments?.content} />
						<EditBtnWrap>
							<EditDoneBtn type="submit">수정완료</EditDoneBtn>

							<EditCancleBtn>취소</EditCancleBtn>
						</EditBtnWrap>
					</form>
				</EditBody>
			</EditArticle>
		</EditWrap>
	);
}

export default EditDetail;

const EditWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const EditArticle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 700px;
	border-radius: 10px;
	background-color: lightgray;
	color: #777;
	height: 513px;
	overflow: hidden;
	padding: 16px;
	line-height: 1.5;
`;

const HomeBtn = styled.button`
	position: absolute;
	top: 37px;
	left: 39px;
	width: 100px;
	height: 50px;
	color: #fff;
	background-color: #000;
	box-shadow: 2px 6px 7px gray;
	&:hover {
		cursor: pointer;
		background-color: purple;
		border: 1px solid purple;
	}
`;

const EditHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const EditH1 = styled.h1`
	display: flex;
	justify-content: space-between;
	font-size: 30px;
	font-weight: bold;
`;

const EditBody = styled.div`
	padding: 16px;
	font-size: 24px;
	line-height: 48px;
	border-radius: 10px;
	margin: 24px auto 10px auto;
	background-color: #000;
	color: white;
	width: 90%;
	height: 400px;
`;

const EditingTextArea = styled.textarea`
	background-color: black;
	padding: 16px;
	font-size: 24px;
	line-height: 48px;
	border-radius: 10px;
	margin: 0px auto 0 auto;
	color: white;
	width: 600px;
	height: 250px;
	scroll-behavior: auto;
	resize: none;
	word-break: break-all;
`;

const EditBtnWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

const EditDoneBtn = styled.button`
	background-color: #222;
	color: #fff;
	border: none;
	border-radius: 5px;
	height: 40px;
	width: 70px;
	margin: 5px;
	&:hover {
		background-color: #f362a6;
		color: #fff;
		cursor: pointer;
	}
`;
const EditCancleBtn = styled.button`
	background-color: #fff;
	color: #333;
	border: 1px solid #58c0e9;
	border-radius: 5px;
	margin: 5px;
	height: 40px;
	width: 60px;
	&:hover {
		background-color: #58c0e9;
		color: #fff;
		cursor: pointer;
	}
`;
