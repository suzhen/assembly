import bunyan from 'bunyan'
export default function (opts) {
  opts = opts || {}
  var name = opts.name || 'assembly'
  return bunyan.createLogger({name: name})
}
