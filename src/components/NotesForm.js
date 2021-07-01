import React from 'react';
import { Icon } from '@iconify/react';
import outlineSave from '@iconify-icons/ic/outline-save';
import baselineCancel from '@iconify-icons/ic/baseline-cancel';
import { connect } from 'react-redux';
import { addNotes, updateNotes } from '../redux/actions';
import RenderSelect from './FormSelection';

class NotesForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.editData.id || this.props.notes.length + 1,
			title: this.props.editData.title || '',
			created:
				this.props.editData.created || new Date().toLocaleDateString('en-GB'),
			content: this.props.editData.content || '',
			date: this.props.editData.date || '',
			category: this.props.editData.category || 'Task', //change to this.props.category
			state: this.props.state,
			closeForm: this.props.closeForm,
		};
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleContentChange = this.handleContentChange.bind(this);
		this.handleDatesChange = this.handleDatesChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleTitleChange(event) {
		this.setState({ title: event.target.value });
	}
	handleContentChange(event) {
		this.setState({ content: event.target.value });
	}
	handleDatesChange(event) {
		const newDateString = event.target.value.split('-').reverse().join('/');
		this.setState({
			date:
				newDateString.length === 0
					? ''
					: `${this.state.created}, ${newDateString}`,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const tempObject = {
				id: this.state.id,
				title: this.state.title,
				created: this.state.created,
				content: this.state.content,
				date: this.state.date,
				category: this.state.category,
				status: 'Active',
		}
		if (this.props.editData.id) {
			this.props.updateNotes(this.state.id, tempObject);
		} else {
			this.props.addNotes(tempObject);
		}

		this.state.closeForm();
	}

	render() {
		return (
			<form className='tr' onSubmit={this.handleSubmit}>
				<span className='td row'>
					<input
						type='text'
						onChange={this.handleTitleChange}
						defaultValue={this.state.title}
					/>
				</span>
				<span className='td row'>{this.state.created}</span>
				<span className='td row'>
					{
						<RenderSelect
							currentCategory={this.state.category}
							handleChange={(event) =>
								this.setState({ category: event.target.value })
							}
						/>
					}
				</span>
				<span className='td row'>
					<input
						type='text'
						onChange={this.handleContentChange}
						defaultValue={this.state.content}
					/>
				</span>
				<span className='td row'>
					<input
						type='date'
						onChange={this.handleDatesChange}
						defaultValue=''
					/>
				</span>
				<span className='td row'>
					<div className='btn-container'>
						<button type='submit' className='save-Notes-btn form-btn'>
							<Icon className='iconify btn-icon' icon={outlineSave} />
						</button>
						<button
							onClick={this.state.closeForm}
							type='button'
							className='cancel-Notes-btn form-btn'
						>
							<Icon className='iconify btn-icon' icon={baselineCancel} />
						</button>
					</div>
				</span>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return state.notes;
};

const mapDispatchToProps = {
	addNotes,
	updateNotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesForm);
