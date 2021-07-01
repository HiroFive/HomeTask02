import { combineReducers } from 'redux';
import { ADD_NOTES, DELETE_NOTES, CHANGE_STATUS, UPDATE_NOTES } from './types';

const initialState = {
	notes: [
		{
			id: 1,
			title: 'Some title1',
			created: new Date().toLocaleDateString('en-GB'),
			category: 'Idea',
			content: 'some content',
			date: '08/04/2021, 13/04/2021',
			status: 'Archived',
		},
		{
			id: 2,
			title: 'Some title2',
			created: new Date().toLocaleDateString('en-GB'),
			category: 'Idea',
			content: 'some content2',
			date: '',
			status: 'Active',
		},
		{
			id: 3,
			title: 'Some title3',
			created: new Date(2021, 4, 6).toLocaleDateString('en-GB'),
			category: 'Task',
			content: 'some content3',
			date: '',
			status: 'Active',
		},
		{
			id: 4,
			title: 'Some title4',
			created: new Date(2020, 2, 5).toLocaleDateString('en-GB'),
			category: 'Random Thought',
			content: 'some content4',
			date: '05/03/2020, 06/03/2021',
			status: 'Active',
		},
		{
			id: 5,
			title: 'Some title5',
			created: new Date(2021, 2, 5).toLocaleDateString('en-GB'),
			category: 'Random Thought',
			content: 'some content5',
			date: '',
			status: 'Active',
		},
		{
			id: 6,
			title: 'Some title6',
			created: new Date(2021, 4, 17).toLocaleDateString('en-GB'),
			category: 'Task',
			content: 'some content6',
			date: '',
			status: 'Archived',
		},
		{
			id: 7,
			title: 'Some title7',
			created: new Date(2021, 2, 15).toLocaleDateString('en-GB'),
			category: 'Task',
			content: 'some content7',
			date: '07/08/2020, 07/09/2020',
			status: 'Archived',
		},
	],
	category: [
		{
			id: 1,
			name: 'Task',
			active: 0,
			archived: 0,
		},
		{
			id: 2,
			name: 'Random Thought',
			active: 0,
			archived: 0,
		},
		{
			id: 3,
			name: 'Idea',
			active: 0,
			archived: 0,
		},
	],
};

const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NOTES:
			return { ...state, notes: [...state.notes, action.payload] };
		case DELETE_NOTES:
			return {
				...state,
				notes: state.notes.filter((item, index) => {
					return item.id !== action.payload;
				}),
			};
		case UPDATE_NOTES: 
			return { ...state, notes: state.notes.map((item, index) => {
				if (item.id === action.payload.id){
					item.title = action.payload.newData.title;
					item.category = action.payload.newData.category;
					item.content = action.payload.newData.content;
					item.date = action.payload.newData.date;
				}
				return item;
			})}
		case CHANGE_STATUS:
			return {
				...state,
				notes: state.notes.map((item) => {
					if (item.id === action.payload.id) {
						item.status = action.payload.status;
					}
					return item;
				}),
			};
		default:
			return state;
	}
};
export const rootReducer = combineReducers({
	notes: notesReducer,
});
