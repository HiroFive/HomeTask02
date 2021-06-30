import { Icon } from '@iconify/react';
import outlineTask from '@iconify-icons/ic/outline-task';
import userGearLight from '@iconify-icons/ph/user-gear-light';
import ideaIcon from '@iconify-icons/carbon/idea';

const addAvatar = (category) => {
	switch (category) {
		case 'Idea':
			return <Icon className='iconify avatar-icon' icon={ideaIcon} />;
		case 'Random Thought':
			return <Icon className='iconify avatar-icon' icon={userGearLight} />;
		case 'Task':
			return <Icon className='iconify avatar-icon' icon={outlineTask} />;
		default:
			return;
	}
};
export { addAvatar };
