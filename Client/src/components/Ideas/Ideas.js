import { Container, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Idea from './Idea/Idea';
import { useSelector } from 'react-redux';
import useStyles from './style';
import Pagination from '../Pagination/Pagination';

const Ideas = () => {
	const { title, flex } = useStyles();
	const [currentPage, setCurrentPage] = useState(1);
	const [ideasPerPage] = useState(5);

	const ideas = useSelector(state => state?.ideas);

	const indexOfLastIdea = currentPage * ideasPerPage;
	const indexOfFirstIdea = indexOfLastIdea - ideasPerPage;
	const currentIdeas = ideas.slice(indexOfFirstIdea, indexOfLastIdea);

	const allIdeas = currentIdeas?.map(idea => <Idea key={idea._id} idea={idea} />);

	const paginateHandler = pageNumber => setCurrentPage(pageNumber);

	return (
		<Container>
			<Typography variant="h3" align="center" className={title} component="p" noWrap>
				Project Ideas
			</Typography>
			{allIdeas.length > 0 && <div className={flex}>{allIdeas}</div>}
			<Pagination totalIdeas={ideas.length} ideasPerPage={ideasPerPage} paginate={paginateHandler} currentPage={currentPage} />
		</Container>
	);
};

export default Ideas;
