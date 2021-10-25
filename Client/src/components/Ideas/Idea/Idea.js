import React from 'react';
import useStyles from './style';
import moment from 'moment';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteIdea } from '../../../actions/ideas';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { downvote, upvote } from '../../../actions/ideas';

const Idea = ({ idea }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const profile = JSON.parse(localStorage.getItem('profile'));

	const handleDelete = () => {
		dispatch(deleteIdea(idea));
	};

	return (
		<div className={classes.idea}>
			<div className={classes.flex}>
				<div className={classes.content}>
					<p>{idea.content}</p>
					<small>
						<em className={classes.em}>{moment(idea?.createdAt).fromNow()}</em>
					</small>
					<div className={classes.votes}>
						<span>{idea?.downvotes?.length || 0}</span>
						<Button
							size="small"
							className={classes.btn}
							onClick={() => dispatch(downvote(idea))}
							disabled={idea.userId === profile?.user?._id || !profile || idea.userId === profile?.profile?.googleId ? true : null}
							style={idea.userId === profile?.user?._id ? { cursor: 'not-allowed !important' } : {}}
						>
							<ArrowDropDownIcon className={classes.downvote} fontSize="medium" style={idea.downvotes.includes(profile?.user?._id?.toString()) || idea.downvotes.includes(profile?.profile?.googleId) ? { background: '#FBDFDF' } : null} />
						</Button>
						<span>{idea?.upvotes?.length || 0}</span>
						<Button
							size="small"
							className={classes.btn}
							onClick={() => dispatch(upvote(idea))}
							disabled={idea.userId === profile?.user?._id || !profile || idea.userId === profile?.profile?.googleId ? true : null}
							style={idea.userId === profile?.user?._id ? { cursor: 'not-allowed !important' } : {}}
						>
							<ArrowDropUpIcon className={classes.upvote} fontSize="medium" style={idea.upvotes.includes(profile?.user?._id?.toString()) ? { background: '#C4E39D' } : null} />
						</Button>
					</div>
				</div>
				<div className={classes.column}>
					{(idea.userId === profile?.user?._id || idea.userId === profile?.profile?.googleId) && <CloseIcon className={classes.icon} onClick={() => handleDelete()} />}
					<p className={classes.creator}>~{idea?.creator}</p>
				</div>
			</div>
		</div>
	);
};

export default Idea;
