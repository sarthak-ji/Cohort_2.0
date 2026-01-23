const express = require('express');

const app = express();  // Server created!

app.use(express.json());  // Middleware(1)

const notes = [];

app.post("/notes", (req, res) => {

    console.log(req.body);  // Middleware(1) is required to run this line..

    notes.push(req.body);  // "req.body" ke ander data rhega note ka!

    res.send("Note created!");
})

app.get("/notes", (req, res) => {
    res.send(notes);
})

app.listen(3000, () => {  // Server started!
    console.log("Server is running on port 3000.");
});