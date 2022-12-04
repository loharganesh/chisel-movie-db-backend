//
const router = require('express').Router();

// Routers
const seriesRouter = require('./series');
const seasonsRouter = require('./seasons');
const episodesRouter = require('./episodes');
const columnsRouter = require('./columns');

// Routes
router.use('/series', seriesRouter);
router.use('/seasons', seasonsRouter);
router.use('/episodes', episodesRouter);
router.use('/columns', columnsRouter);

module.exports = router;
