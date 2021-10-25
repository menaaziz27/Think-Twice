import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
	title: {
		color: '#fff',
		'@media (max-width: 550px)': {
			fontSize: '30px',
		},
		'@media (max-width: 370px)': {
			fontSize: '23px',
		},
	},
	flex: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '28px',
		background: '#FFF',
		overflow: 'hidden',
		borderRadius: '6px',
	},
}));
