import React from 'react';
import Table from '../components/Table';
import Summary from '../components/Summary';

const SummaryLayout = () => {
	const columns = ['Notes Category', 'Active', 'Archived'];
	return (
		<div className='table-container'>
			<Table colum={columns} body={<Summary/>} />
		</div>
	);
};

export default SummaryLayout;
