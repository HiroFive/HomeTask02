import React from 'react';
import { connect } from 'react-redux';

const RenderSelect = (props) => {
	const { category, currentCategory, handleChange } = props;
	console.log(currentCategory)
	return (
		<select value={currentCategory} onChange={handleChange}>
			{category.map((item, index) =>
					<option value={item.name} key={index}>
						{item.name}
					</option>
			)}
		</select>
	);
};

const mapCategoryStateToProps = (state) => {
	return state.notes;
};

export default connect(mapCategoryStateToProps, null)(RenderSelect);
