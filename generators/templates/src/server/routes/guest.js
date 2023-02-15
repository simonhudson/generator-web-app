const express = require(`express`);

// guest is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /${COLLECTION_NAME}.
const guestRoutes = express.Router();

// This will help us connect to the database
const dbo = require(`../db/conn`);

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require(`mongodb`).ObjectId;

const COLLECTION_NAME = 'guests';

// This section will help you get a list of all the records.
guestRoutes.route(`/${COLLECTION_NAME}`).get((req, res) => {
	const db_connect = dbo.getDb();
	db_connect
		.collection(COLLECTION_NAME)
		.find({})
		.toArray((err, result) => {
			if (err) throw err;
			res.json(result);
		});
});

// This section will help you get a single record by id
guestRoutes.route(`/${COLLECTION_NAME}/:slug`).get((req, res) => {
	const db_connect = dbo.getDb();
	const query = { slug: req.params.slug };
	db_connect.collection(COLLECTION_NAME).findOne(query, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
});

// This section will help you create a new record.
guestRoutes.route(`/${COLLECTION_NAME}/add`).post((req, response) => {
	const db_connect = dbo.getDb();
	db_connect.collection(COLLECTION_NAME).insertOne(req.body, (err, res) => {
		if (err) throw err;
		response.json(res);
	});
});

// // This section will help you update a record by id.
// guestRoutes.route(`/update/:id`).post((req, response) => {
// 	const db_connect = dbo.getDb();
// 	let query = { _id: ObjectId(req.params.id) };
// 	let newvalues = {
// 		$set: {
// 			name: req.body.name,
// 			position: req.body.position,
// 			level: req.body.level,
// 		},
// 	};
// 	db_connect.collection(COLLECTION_NAME).updateOne(query, newvalues, (err, res) => {
// 		if (err) throw err;
// 		console.log(`1 document updated`);
// 		response.json(res);
// 	});
// });

// This section will help you delete a record
guestRoutes.route(`/${COLLECTION_NAME}/delete/:id`).delete((req, response) => {
	const db_connect = dbo.getDb();
	let query = { _id: ObjectId(req.params.id) };
	db_connect.collection(COLLECTION_NAME).deleteOne(query, (err, obj) => {
		if (err) throw err;
		console.log(`ID ${req.params.id} deleted from COLLECTION ${COLLECTION_NAME}`);
		response.json(obj);
	});
});

module.exports = guestRoutes;
