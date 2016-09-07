const mongoose = require('mongoose')

var wordSchema = require('../schemas/word')

var Word = mongoose.model('Word', wordSchema)

module.exports = Word
