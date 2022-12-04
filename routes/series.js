const router = require('express').Router();

// Import Controllers
const {
	postSeries,
	getSeries,
	deleteSeries,
	updateSeries,
} = require('../controllers/series');

// Routes
router.get('/', getSeries);
router.post('/', postSeries);
router.delete('/:id', deleteSeries);
router.put('/:id', updateSeries);

module.exports = router;
