//require mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;


//create languageSchema
const languageSchema = new Schema({
    name: { type: String, required: true },
    greeting: String,
    pangram: String,
    filler: String,

})


//create and export model
const Language = mongoose.model('Language', languageSchema)
module.exports = Language