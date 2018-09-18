
var mongoose = require('mongoose');

var passengerSchema = new mongoose.Schema({
	type: String,
	name: String,
	age: Number,
	gender: String,
	seatNo: Number,
	ticketNo:Number
});

var bookingDetailsSchema = new mongoose.Schema({
	carrierName: String,
	firstName: String,
	travelDate: String,
	pnrNo: Number,
	price: Number

});

var bookingSchema = new mongoose.Schema({
	bookingId: String,
	bookingType: String,
	bookingDate: Date,
	bookingPrice: Number,
	bookingDetails:[bookingDetailsSchema],
	passenger:[passengerSchema]
});

var userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	mobileNo: Number,
	address: String,
	booking:[bookingSchema]
});

var User=mongoose.model('User',userSchema);

module.exports=User;