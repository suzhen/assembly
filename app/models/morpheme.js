const mongoose = require('mongoose')

var morphemeSchema = require('../schemas/morpheme')

var Morpheme = mongoose.model('Morpheme', morphemeSchema)

module.exports = Morpheme
