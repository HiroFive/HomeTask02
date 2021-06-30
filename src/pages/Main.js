import React from 'react';
import Notes from '../layout/Notes';
import Summary from '../layout/Summary';

const MainPage = () => {
	return (
		<div className='rootDiv'>
			<div className='container'>
				<Notes />
				<Summary />
			</div>
		</div>
	);
};

export default MainPage;
