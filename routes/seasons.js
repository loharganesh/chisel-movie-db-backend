const router = require('express').Router();

// Import Controllers
const {
	postSeason,
	getSeasons,
	deleteSeason,
	updateSeason,
} = require('../controllers/seasons');

// Routes
router.get('/', getSeasons);
router.post('/', postSeason);
router.delete('/:id', deleteSeason);
router.put('/:id', updateSeason);

//
module.exports = router;
