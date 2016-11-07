const mongoose = require('mongoose')

var Schema = mongoose.Schema

var morphemeSchema = new Schema({
  letters: { type: String, index: true },
  root: {free: { type: Number, index: true, default: 0 },
         bound: { type: Number, index: true, default: 0 }},
  affix: {derivational: { type: Number, index: true, default: 0 },
          primitive: { type: Number, index: true, default: 0 }
         },
  position: {prefix: { type: Number, index: true, default: 0 },
             suffix: { type: Number, index: true, default: 0 }
            },
  explanation: {chinese: {type: String},
                english: {type: String}
              },
  property: {type: Number}
})

module.exports = morphemeSchema
