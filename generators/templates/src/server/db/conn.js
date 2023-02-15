const { MongoClient } = require('mongodb');
const Db = process.env.DB_URI;
const client = new MongoClient(Db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

let _db;

module.exports = {
	connectToServer: (callback) => {
		client.connect((err, db) => {
			// Verify we got a good "db" object
			if (db) {
				_db = db.db(process.env.DB_NAME);
				console.log(`Successfully connected to MongoDB (${process.env.DB_NAME})`);
			}
			return callback(err);
		});
	},

	getDb: () => {
		return _db;
	},
};
