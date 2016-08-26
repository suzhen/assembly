var path = require('path')
var fs = require('fs')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/assembly')

var Word = require('./app/models/word')

var lineReader = require('line-reader')
var Promise = require("bluebird")
var eachLine = Promise.promisify(lineReader.eachLine)
var wordsPath = path.join(__dirname,'seeds','words.txt')

if (fs.statSync(wordsPath)) { 

 var readStream = fs.createReadStream(wordsPath)

 eachLine(readStream, function(line, last) {
   var _word = new Word({letters: line})
   _word.save()
 }).then(function() {
   console.log('done')
   mongoose.disconnect()
 }).catch(function(err) {
   console.error(err)
   mongoose.disconnect()
 });

}



