const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/assembly')
var Morpheme = require('../app/models/morpheme')
var morpheme = new Morpheme({
                  letters: 'tive',
                  root: {free: 0,
                         bound: 0},
                  affix: {derivational: 0,
                          primitive: 1
                         },
                  position: {prefix: 0,
                             suffix: 1
                         }
                  })
morpheme.save()                  
mongoose.disconnect()

