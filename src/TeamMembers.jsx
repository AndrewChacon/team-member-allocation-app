import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({ employees, selectedTeam, handleEmployeeCardClick }) => {
	return employees.map(employee => (
		<TeamMemberCard
			selectedTeam={selectedTeam}
			handleEmployeeCardClick={handleEmployeeCardClick}
			employee={handleEmployeeCardClick}
		/>
	));
};

export default TeamMembers;
