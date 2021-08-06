import config from "config";
import {ConnectionOptions, connect } from "mongoose"

const connectDB = async() => {
    try {
        const mongoURI : string = process.env.MONGO_URL
        const options : ConnectionOptions = {  
            useNewUrlParser: true,
            useCreateIndex : true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }

        await connect(mongoURI, options);
        console.log("MongoDB Connected...")

    } catch (error) {
        console.error(error.message);
        process.exit()
    }
};

export default connectDB;