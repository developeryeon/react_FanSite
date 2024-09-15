import fakeData from '../../common/Data/fakeData.json';

const ADD_COMMENT = 'Comments/ADD_COMMENT';
const DELETE_COMMENT = 'Comments/DELETE_COMMENT';
const EDIT_COMMENT = 'Comments/EDIT_COMMENT';

export const addComment = (payload) => {
	return {
		type: ADD_COMMENT,
		payload,
	};
};

export const deleteComment = (payload) => {
	return {
		type: DELETE_COMMENT,
		payload,
	};
};

export const editComment = (payload) => {
	return {
		type: EDIT_COMMENT,
		payload,
	};
};

// 초기 상태값(state)
const initialState = fakeData;

//리듀서
const comments = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COMMENT:
			return [action.payload, ...state];
		case DELETE_COMMENT:
			const filteredComments = state.filter((card) => card.id !== action.payload);
			return filteredComments;
		case EDIT_COMMENT:
			const editedComments = state.map((card) => {
				if (card.id === action.payload.id) {
					return { ...card, content: action.payload.content };
				}
				return card;
			});
			localStorage.setItem('comments', JSON.stringify(editedComments));
			return editedComments;
		default:
			return state;
	}
};

export default comments;
