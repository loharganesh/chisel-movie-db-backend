// Constants
const { DEFAULT_PORT } = require('./utils/constants');
const { MSG_SERVER_LISTENING } = require('./utils/strings');

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

require('./database/init');
const cors = require('cors');

const express = require('express');
const app = express();
const router = require('./routes');

// Middlewares
app.use(express.json());
app.use(cors('*'));
app.use('/', router);

app.listen(DEFAULT_PORT, () => {
	console.log(MSG_SERVER_LISTENING, DEFAULT_PORT);
});
