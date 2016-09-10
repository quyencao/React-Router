import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
			// keep existing state and replace all is new all
			return { ...state, all: action.payload.data };
			//return { all: action.payload.data, post: state.post }
		case FETCH_POST:
			// return { all: state.all, post: action.payload.post }
			// keep existing state and replace post is new post
			return { ...state, post: action.payload.data };
		default:
			return state;
	}
}