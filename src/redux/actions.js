import { ADD_NOTES, DELETE_NOTES, CHANGE_STATUS, UPDATE_NOTES } from './types';

export function addNotes(notes) {
	return {
		type: ADD_NOTES,
		payload: notes,
	};
}

export function deleteNotes(id) {
	return {
		type: DELETE_NOTES,
		payload: id,
	};
}

export function changeNotesStatus(id, status) {
	return {
		type: CHANGE_STATUS,
		payload: { id, status },
	};
}

export function updateNotes(id, newData) {
	return {
		type: UPDATE_NOTES,
		payload: { id, newData },
	};
}
