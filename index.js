const express = require('express');
const dotenv = require('dotenv')
const app = express();
const port = process.env.PORT || 8000;
const db = require('./config/mongoose');
dotenv.config({ path: 'config/.env' });

const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));
app.listen(port, function (err) {
	if (err) {
		console.log(`Error in running the server: ${err}`);
	}
	console.log(`Server is running on port: ${port}`);
});
