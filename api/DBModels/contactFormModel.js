const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
	},
	lastName: {
		type: String,
		trim: true,
	},
	title: {
		type: String,
		trim: true,
	},
	email: {
		type: String,
		trim: true,
		required: [true, 'A Email must be included so we can contact them.'],
	},
	message: {
		type: String,
		trim: true,
		minlength: [10, 'An Email Message must have 10 or more characters'],
	},
});

contactSchema.pre(/^find/, function (next) {
	this.start = Date.now();
	next();
});

contactSchema.post(/^find/, function (docs, next) {
	console.log(`Query took ${Date.now() - this.start} milliseconds!!`);
	next();
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
