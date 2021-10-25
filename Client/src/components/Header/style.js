import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	header: {
		backgroundColor: '#0e1538',
		paddingRight: '79px',
		minWidth: '100%',
		margin: '0',
		paddingLeft: '118px',
		'@media (max-width: 900px)': {
			paddingLeft: 0,
		},
	},
	logo: {
		fontWeight: 600,
		color: '#FFFEFE',
		textAlign: 'left',
		textDecoration: 'none',
		display: 'flex',
		alignItems: 'center',
		'@media (max-width: 350px)': {
			fontSize: '24px',
		},
	},
	menuButton: {
		fontFamily: 'Open Sans, sans-serif',
		fontWeight: 700,
		size: '18px',
		marginLeft: '38px',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	drawerContainer: {
		padding: '20px 30px',
	},
}));
