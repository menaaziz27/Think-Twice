import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
	container: {
		position: 'relative',
		minHeight: 'calc(100vh - 64px)',
		paddingTop: '40px',
		paddingRight: '100px',
		paddingLeft: '100px',
		'@media (max-width: 1080px)': {
			paddingRight: '50px',
			paddingLeft: '50px',
			margin: '0 auto',
		},
		'@media (max-width: 550px)': {
			paddingRight: '0px',
			paddingLeft: '0px',
			margin: '0 auto',
		},
		'@media (max-width: 350px)': {
			paddingRight: '0px',
			paddingLeft: '0px',
			margin: '0 auto',
		},
	},
	button: {
		position: 'absolute',
		bottom: '15px',
		right: '10px',
		padding: '4px 12px',
		color: '#f50057',
		cursor: 'pointer',
		border: 'none',
		background: 'white',
		borderRadius: '20px',
		fontSize: '24px',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		position: 'absolute',
		width: 550,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		borderRadius: '4px',
		color: '#000',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'@media(max-width: 600px)': {
			width: '100vw',
		},
	},
	post: {
		width: '25%',
		marginTop: '4px',
	},
	form: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));
