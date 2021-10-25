import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
	container: {
		'@media (max-width: 750px)': {
			paddingRight: '0px',
			paddingLeft: '0px',
			margin: '0 auto',
		},
	},
}));
