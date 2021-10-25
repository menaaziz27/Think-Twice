import React, { useState, useEffect } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import useStyles from './style';
import Modal from '@material-ui/core/Modal';
import Ideas from '../Ideas/Ideas';
import { useDispatch } from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { createIdea, getIdeas } from '../../actions/ideas';

const Home = () => {
	const [idea, setIdea] = useState('');
	const classes = useStyles();
	const profile = JSON.parse(localStorage.getItem('profile'));
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	useEffect(() => {
		dispatch(getIdeas());
	}, [dispatch]);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = e => {
		setIdea(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(createIdea({ content: idea }));
		setIdea('');
		setOpen(false);
	};

	return (
		<Container className={classes.container}>
			<button className={classes.button} onClick={() => handleOpen()}>
				+
			</button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<h2 style={{ textAlign: 'center' }}>Do you have a fancy idea?</h2>
						<form onSubmit={handleSubmit} autoComplete="off" className={classes.form}>
							<TextField value={idea} onChange={handleChange} variant="outlined" id="outlined-textarea" rows={4} label="Share your idea" placeholder="Idea ..." multiline fullWidth />
							<Button type="submit" variant="contained" color="secondary" className={classes.post} disabled={!profile || (idea === '' && true)}>
								Post
							</Button>
						</form>
					</div>
				</Fade>
			</Modal>
			<Ideas />
		</Container>
	);
};

export default Home;
