/*
Everything in this file represents the APP, all the middleware the APP uses goes here.
*/
// 3rd Party Express Module
const express = require('express');

const cors = require('cors');

// DB MODEL
const Cart = require('./DBModels/contactFormModel');

// Create the app, run instance express()
const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});
// This Endpoint will get the lorem Ipsum data from the DB
app.get('/get-data', (req, res) => {
	res.status(200).send({
		message: 'Hey',
	});
});

// This Endpoint will post data from the Contact Form into the DB
app.post('/contact-form', async (req, res) => {
	const cart = await Cart.create(req.body);

	res.status(201).send({
		status: 'success',
		message:
			'Message was sent! Check your email from time to time for updates!',
		data: {
			contact: cart,
		},
	});
});

module.exports = app;
