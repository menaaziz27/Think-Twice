import React from 'react';
import { TextField, Grid } from '@material-ui/core';
const Input = ({ name, label, type, handleChange, autoFocus, half }) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField name={name} label={label} type={type} onChange={handleChange} autoFocus={autoFocus} fullWidth />
		</Grid>
	);
};

export default Input;
