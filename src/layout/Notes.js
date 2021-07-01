import React from 'react';
import Table from '../components/Table';
import Notes from '../components/Notes';
import NotesForm from '../components/NotesForm';

class NotesLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notesFormOpen: false,
			tableTab: 'Active',
			editData: {},
			hiddenRow: -1,
			columns: ['Name', 'Created', 'Category', 'Comment', 'Dates'],
		};
		this.handleOpenForm = this.handleOpenForm.bind(this);
		this.handleCloseForm = this.handleCloseForm.bind(this);
		this.handleCreateNotes = this.handleCreateNotes.bind(this);
	}

	handleOpenForm() {
		this.setState({ notesFormOpen: true });
	}

	handleCloseForm() {
		this.setState({ hiddenRow: -1 });
		this.setState({ notesFormOpen: false });
	}
	handleCreateNotes() {
		this.setState({ editData: {} });
		this.setState({ notesFormOpen: true });
	}
	render() {
		return (
			<div className='table-container'>
				<Table
					column={this.state.columns}
					body={
						<Notes
							hiddenRow={this.state.hiddenRow}
							setHiddenRow={(index) => this.setState({ hiddenRow: index })}
							currentTab={this.state.tableTab}
							openEditForm={this.handleOpenForm}
							setEditData={(newData) => this.setState({editData: newData})}
						/>
					}
					withButtons={true}
					changeTableTable={(newTab) => this.setState({ tableTab: newTab })}
				/>
				{this.state.notesFormOpen ? (
					<div className='data-table'>
						<NotesForm
							editData={this.state.editData}
							state={this.state.notesFormOpen}
							closeForm={this.handleCloseForm}
						/>
					</div>
				) : null}

				<div className='table-bottom-btn-container'>
					<button onClick={this.handleCreateNotes}>Create Note</button>
				</div>
			</div>
		);
	}
}
export default NotesLayout;
