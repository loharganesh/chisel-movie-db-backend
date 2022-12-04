const router = require('express').Router();

// Import Controllers
const {
	postEpisodes,
	getEpisodes,
	deleteEpisode,
	updateEpisode,
} = require('../controllers/episodes');

// Routes
router.get('/', getEpisodes);
router.post('/', postEpisodes);
router.delete('/:id', deleteEpisode);
router.put('/:id', updateEpisode);

module.exports = router;
