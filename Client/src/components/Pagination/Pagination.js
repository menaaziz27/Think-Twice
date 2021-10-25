import React from 'react';
import useStyles from './style';

const Pagination = ({ totalIdeas, ideasPerPage, paginate, currentPage }) => {
	const classes = useStyles();

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalIdeas / ideasPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<nav>
				<ul className={classes.flex}>
					{pageNumbers.map(number => {
						return (
							<li key={number} onClick={() => paginate(number)} style={currentPage === number ? { backgroundColor: '#F50057' } : null}>
								<p>{number}</p>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
