const mongoose = require('mongoose')

var Schema = mongoose.Schema

var wordSchema = new Schema ({
  letters: { type: String, index: true, unique: true}
})

module.exports = wordSchema