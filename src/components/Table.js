import React from 'react';

const Table = ({
	colum,
	body,
	withButtons,
	changeTableTable,
}) => {
	return (
		<div className='data-table'>
			<div className='thead'>
				<span className='tr'>
					{colum.map((value, index) => (
						<span className='th' key={index}>
							{value}
						</span>
					))}
					{withButtons ? (
						<span className='th'>
							<div className='btn-container'>
								<button onClick={() => changeTableTable('Archived')}>
									Archive
								</button>
								<button onClick={() => changeTableTable('Active')}>
									Active
								</button>
							</div>
						</span>
					) : null}
				</span>
			</div>
			<div className='tbody'>{body}</div>
		</div>
	);
};
export default Table;
