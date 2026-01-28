/**
 * Server ko start karna
 * Database se connect karna
 */

const app = require("./src/app");
const mongoose = require('mongoose');

function connectToDatabase(){
    mongoose.connect("mongodb+srv://Sarthak_Sriv:EIWAPKE5r85DPznO@cluster0.3sznj6a.mongodb.net/")
    .then(() => {
        console.log("Connected to database");
    });
}

connectToDatabase();


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});