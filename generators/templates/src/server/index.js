const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.DB_PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require('./routes/guest'));
const dbo = require('./db/conn');

app.listen(port, () => {
	dbo.connectToServer((err) => {
		if (err) console.error(err);
	});
	console.log(`Server is running on port: ${port}`);
});
