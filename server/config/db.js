const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
	try {
		
		const connString = process.env.mongoURI
		const conn = await mongoose.connect(connString)
		console.log(`MongoDB connected`)
	} catch (error) {
		console.log(error)
		// proccess.exit(1)
	}
}

module.exports = connectDB