import Morpheme from '../models/morpheme'
import parse from 'co-body'

function * index (next) {
  let morphemes = yield Morpheme.find({}).exec()
  this.body = morphemes
  yield next
}

function * show (next) {
  yield next
}

function * create (next) {
  var body = yield parse.form(this)
  console.log(body)
  this.body = 'o'
  yield next
}

function * update (next) {
  yield next
}


export {index, show, create, update}
