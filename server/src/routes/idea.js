const express = require('express');
const router = express.Router();
const { createIdea, deleteIdea, getIdeas, upvote, downvote } = require('../controllers/ideaController');
const { isAuth } = require('../middlewares/isAuth');

router.get('/', getIdeas);
router.post('/', isAuth, createIdea);
router.delete('/:id', isAuth, deleteIdea);
router.put('/:id/upvote', isAuth, upvote);
router.put('/:id/downvote', isAuth, downvote);

module.exports = router;
