const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/assembly')
var Morpheme = require('../app/models/morpheme')
var Word = require('../app/models/word')
var S = require('string')
var fs = require('fs')
const Writable = require('stream').Writable

var file = fs.createWriteStream('/Users/suezhen/Projects/assembly/wordfolder/nate.txt')

var query = Word.find({}).cursor()
var words = []
query.on('data', function (word) {
  if (S(word.letters).endsWith('nate')) {
    words.push(word.letters) 
  }
  // do something with the mongoose document
}).on('error', function (err) {
  // handle the error
}).on('close', function () {
    // console.log(words)
    var buf = new Buffer(words.join('\t'))
    file.write(buf)
    mongoose.disconnect()
  // the stream is closed
})