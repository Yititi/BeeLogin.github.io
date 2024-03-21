const { create } = require("domain");
const mongoose = require("mongoose");

//check the database connected or not
const connect = mongoose.connect('mongodb+srv://ithelp:rUrMvhRrspVpOo3R@cluster0.tjjg2hc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB...'))

connect.then(() =>{ 
    console.log("Database connected Successfully");
})
.catch(() => {
    console.log("Database cannot be connected");
});
//Create a schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    }
});

//collection part
const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;