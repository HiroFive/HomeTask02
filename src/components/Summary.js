import React from 'react';
import { connect } from 'react-redux';
import { addAvatar } from '../common/Avatar';

const summaryDataUpdate = (category, notes) => {
	category.forEach((categoryItem) => {
		categoryItem.active = 0;
		categoryItem.archived = 0;
		notes.forEach((noteItem) => {
			if (noteItem.category === categoryItem.name) {
				noteItem.status === 'Active'
					? categoryItem.active++
					: categoryItem.archived++;
			}
		});
	});
};

const SummaryCategory = (props) => {
	const { category, notes } = props;
	summaryDataUpdate(category, notes);
	return category.map((item, index) => {
		const { name, active, archived } = item;
		return (
			<div className='tr' key={index}>
				<span className='td row'>
					<div className='avatar'>
						{addAvatar(name)}
						{name}
					</div>
				</span>
				<span className='td row'><div className='row-item'>{active}</div></span>
				<span className='td row'><div className='row-item'>{archived}</div></span>
			</div>
		);
	});
};

const mapStateToProps = (state) => {
	return state.notes;
};

export default connect(mapStateToProps, null)(SummaryCategory);
