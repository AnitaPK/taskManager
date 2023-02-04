const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true });

// Create a connection schema
const connSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a model from the schema
const connModel = mongoose.model("conn", connSchema);

// Add a new document to the collection

function createDoc() {
  const newDoc = new connModel({ name: "John", age: 30 });
  newDoc.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Document added to collection");
    }
  });
}

async function getData(){
    try {
        const doc = await connModel.findOne({ name: 'John' });
        console.log(doc);
        return doc;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createDoc,
    getData
}