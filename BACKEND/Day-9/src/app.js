const express = require("express");
const noteModel = require("./models/note.models");
const app = express();


app.use(express.json());


/**
 * - POST /api/notes
 * - create new note and save data in mongodb
 * - req.body = {title, description, age}
 */
app.post("/api/notes", async (req, res) => {
    const {title, description, age} = req.body;

    const note = await noteModel.create({
        title,
        description,
        age
    })

    res.status(201).json({
        message: "Note created successfully",
        note
    });
});


/**
 * - GET /api/notes
 * - Fetch all the notes data from mongodb and send them in the response
 */
app.get("/api/notes", async (req, res) => {

    const notes = await noteModel.find();

    res.status(200).json({
        message: "Notes are fetched successfully",
        notes
    });
});


/**
 * - DELETE /api/notes/:id
 * - Delete note with the id from req.params
 */
app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id);

    res.status(204).json({
        message: "Note deleted successfully"
    });
});


/**
 * - PATCH /api/notes/:id
 * - update the description of the note by id
 * - req.body = {title, age}
 */
app.patch("/api/notes/:id", async(req, res) => {
    const id = req.params.id;
    const {title, age} = req.body;

    await noteModel.findByIdAndUpdate(id, {title, age});

    res.status(200).json({
        message: "Note modified successfully"
    });
});


module.exports = app;