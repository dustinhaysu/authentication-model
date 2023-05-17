const Mongoose = require('mongoose')
const RemoteDB = `mongodb+srv://haysdustinu:NW6vaE9bQSqR0cBW@cluster0.aarda2k.mongodb.net/?retryWrites=true&w=majority`
const connectDB = async () => {
    await Mongoose.connect(RemoteDB)
    .then(client => {
        console.log('MongoDB connection successful')
    })
}
Module.exports = connectDB