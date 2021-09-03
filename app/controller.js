// Uses the db client from loader.js
import { ObjectId } from "mongodb";
import client from "./loader.js";

const notesConnection = client.db("noteTaker").collection("notes");

export default {
  index() {
    return notesConnection.find().toArray();
  },
  create(newNote) {
    return notesConnection.insertOne(newNote);
  },
  update(id, updatedNote) {
    return notesConnection.updateOne(
      { _id: ObjectId(id) },
      { $set: updatedNote }
    );
  },
  // findoneandupdate can be used in-place of updateOne giving additional information when the json is returned
  show(id) {
    return notesConnection.findOne(ObjectId(id));
  },
  delete(id) {
    return notesConnection.deleteOne({ _id: ObjectId(id) });
  },
  deleteAll() {
    return notesConnection.deleteMany();
  },
};
