require('dotenv').config({ path: '.env' });
const mongoos = require('mongoose');
// const mongoURI = 'mongodb://localhost:27017/';
const mongoURI = process.env.MONGO_DB_CONNECTION_STRING;

const connectToMongo = async () => {
    try {
        await mongoos.connect( mongoURI, {
            dbName: 'QuizTitans',
        }); 
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectToMongo;