const router = require('express').Router();

// Import Controllers
const {
	getColumns,
	postColumn,
	deleteColumn,
	updateColumn,
} = require('../controllers/columns');

// Routes
router.get('/', getColumns);
router.post('/', postColumn);
router.delete('/:id', deleteColumn);
router.put('/:id', updateColumn);

module.exports = router;
