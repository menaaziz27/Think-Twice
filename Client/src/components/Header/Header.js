import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Link, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { LOGOUT } from '../../actionTypes';
import decode from 'jwt-decode';

export default function Header() {
	const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const location = useLocation();
	const dispatch = useDispatch();
	const history = useHistory();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	const logout = () => {
		dispatch({ type: LOGOUT });
		history.push('/');
	};

	useEffect(() => {
		const token = user?.token;
		if (token) {
			let decodedToken = decode(token);

			if (decodedToken.exp * 1000 < new Date().getTime()) {
				logout();
			}
		}

		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900 ? setState(prevState => ({ ...prevState, mobileView: true })) : setState(prevState => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();

		window.addEventListener('resize', () => setResponsiveness());

		return () => {
			window.removeEventListener('resize', () => setResponsiveness());
		};
	}, []);

	const handleLogout = () => {
		dispatch({ type: LOGOUT });
		history.push('/');
	};

	const displayMobile = () => {
		const handleDrawerOpen = () => setState(prevState => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () => setState(prevState => ({ ...prevState, drawerOpen: false }));

		return (
			<Toolbar>
				<IconButton
					{...{
						edge: 'start',
						color: 'inherit',
						'aria-label': 'menu',
						'aria-haspopup': 'true',
						onClick: handleDrawerOpen,
					}}
				>
					<MenuIcon />
				</IconButton>

				<Drawer
					{...{
						anchor: 'left',
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
					<div className={drawerContainer}>{getDrawerChoices()}</div>
				</Drawer>

				<div>{thinkTwiceLogo}</div>
			</Toolbar>
		);
	};

	const getDrawerChoices = () => {
		if (user) {
			return (
				<Link
					{...{
						component: RouterLink,
						to: '/',
						color: 'inherit',
						style: { textDecoration: 'none' },
						key: 'Join Us',
					}}
					onClick={() => handleLogout()}
				>
					<MenuItem>Logout</MenuItem>
				</Link>
			);
		} else {
			return (
				<Link
					{...{
						component: RouterLink,
						to: '/auth',
						color: 'inherit',
						style: { textDecoration: 'none' },
						key: 'join us',
					}}
				>
					<MenuItem>Join Us</MenuItem>
				</Link>
			);
		}
	};

	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				{thinkTwiceLogo}
				<div>{getMenuButtons()}</div>
			</Toolbar>
		);
	};
	const thinkTwiceLogo = (
		<Typography variant="h5" component={RouterLink} to="/" className={logo} noWrap>
			Think Twice
			<img src="https://img.icons8.com/dusk/64/000000/idea.png" alt="lamp" width="35px" style={{ marginLeft: '6px' }} />
		</Typography>
	);

	const getMenuButtons = () => {
		if (user) {
			return (
				<Button variant="contained" color="secondary" onClick={logout}>
					Logout
				</Button>
			);
		} else {
			return (
				<Button component={RouterLink} to="/auth" variant="contained" color="primary">
					Join Us
				</Button>
			);
		}
	};

	return (
		<header>
			<AppBar className={header} position="static">
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	);
}
