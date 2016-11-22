const mongoose = require('mongoose')

var Schema = mongoose.Schema

var morphemeSchema = new Schema({
  letters: { type: String, index: true }, // 字母
  root: { // 词根
    free: { type: Boolean, index: true, default: false }, // 自由词根
    bound: { type: Boolean, index: true, default: false } // 粘附词根
  },
  affix: { // 词缀
    derivational: { type: Boolean, index: true, default: false }, // 派生词缀
    primitive: { type: Boolean, index: true, default: false } // 原生词缀
  },
  position: { // 词缀位置
    prefix: { type: Boolean, index: true, default: false }, // 前缀
    suffix: { type: Boolean, index: true, default: false } // 后缀
  },
  explanation: { // 词义解释
    chinese: {type: String}, // 中文
    english: {type: String} // 英文
  },
  property: {type: String, index: true} // 词性
})

module.exports = morphemeSchema
