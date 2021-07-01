import React from 'react';
import { connect } from 'react-redux';
import { addAvatar } from '../common/Avatar';
import { Icon } from '@iconify/react';
import editIcon from '@iconify-icons/akar-icons/edit';
import outlineUnarchive from '@iconify-icons/ic/outline-unarchive';
import outlineArchive from '@iconify-icons/ic/outline-archive';
import deleteOutlined from '@iconify-icons/ant-design/delete-outlined';
import { deleteNotes, changeNotesStatus } from '../redux/actions';

const Notes = (props) => {
	const { notes, currentTab, setEditData, openEditForm, hiddenRow } = props;

	const filteredNotes = notes.filter((note) => note.status === currentTab);

	const handleDeleteNotes = (notesId) => {
		props.delete(notesId);
	};
	const handleStatusChange = (notesId, status) => {
		props.changeStatus(notesId, status === 'Archived' ? 'Active' : 'Archived');
	};
	const handleEditNotes = (note) => {
		setEditData(note);
		openEditForm();
	};

	return filteredNotes.map((note, index) => {
		const { id, title, created, category, content, date, status } = note;
		return (
			<div className={hiddenRow === index ? 'hidden' : 'tr'} key={index}>
				<span className='td row'>
					<div className='avatar'>
						{addAvatar(category)}
						{title}
					</div>
				</span>
				<span className='td row'>
					<div className='row-item'>{created}</div>
				</span>
				<span className='td row'>
					<div className='row-item'>{category}</div>
				</span>
				<span className='td row'>
					<div className='row-item'>{content}</div>
				</span>
				<span className='td row'>
					<div className='row-item'>{date}</div>
				</span>
				<span className='td row'>
					<div className='btn-container'>
						{currentTab === 'Active' ? (
							<button
								onClick={() => {
									handleEditNotes(note);
									props.setHiddenRow(index);
								}}
								className='delete-Notes-btn form-btn'
							>
								<Icon className='btn-icon' icon={editIcon} />
							</button>
						) : null}

						<button
							onClick={() => handleStatusChange(id, status)}
							className='archive-notes-btn form-btn'
						>
							{currentTab === 'Active' ? (
								<Icon className='btn-icon' icon={outlineArchive} />
							) : (
								<Icon className='btn-icon' icon={outlineUnarchive} />
							)}
						</button>
						<button
							onClick={() => handleDeleteNotes(id)}
							className='edit-notes-btn form-btn'
						>
							<Icon className='btn-icon' icon={deleteOutlined} />
						</button>
					</div>
				</span>
			</div>
		);
	});
};

const mapStateToProps = (state) => {
	return state.notes;
};
const mapDispatchToProps = (dispatch) => {
	return {
		delete: (id) => dispatch(deleteNotes(id)),
		changeStatus: (id, status) => dispatch(changeNotesStatus(id, status)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
