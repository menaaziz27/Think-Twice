import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
	idea: {
		padding: '10px 8px 0px 8px',
		fontSize: '1.2rem',
		borderBottom: '1px solid #000',
		'.idea:last-of-type': {
			borderbottom: 'none',
		},
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	votes: {
		display: 'flex',
		alignItems: 'center',
		margin: '4px 4px 4px 0',
	},
	upvote: {
		color: 'green',
		border: '1px solid #C2EEB4',
		borderRadius: '50%',
	},
	downvote: {
		color: 'red',
		border: '1px solid #EAAEAF',
		borderRadius: '50%',
	},
	btn: {
		padding: '0',
		minWidth: '32px',
	},
	column: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	icon: {
		fontSize: '18px',
		alignSelf: 'end',
	},
	content: {
		padding: '3px 0',
	},
	creator: {
		color: '#F50057',
		marginTop: '8px',
		whiteSpace: 'nowrap',
	},
	em: {
		marginTop: '8px',
	},
}));
