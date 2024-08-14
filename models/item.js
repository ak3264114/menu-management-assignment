const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	taxApplicability: Boolean,
	tax: {
		type: Number,
		default: 0,
	},
	baseAmount: Number,
	discount: Number,
	totalAmount: {
		type: Number,
		default: () => {
			return this.baseAmount - this.discount;
		},
	},
});

module.exports = mongoose.model("Item", itemSchema);
