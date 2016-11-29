import koa from 'koa'

import createLogger from './lib/logger'
const logger = createLogger()

import 'dotenv'

var app = koa()

// app.listen(3501)

// var koa = require('koa')
// require('dotenv').config()
// var Promise = require('bluebird')
// const mongoose = require('mongoose')
// mongoose.Promise = Promise
// mongoose.connect('mongodb://' + process.env.MANGO_ENV + '/assembly')

// var router = require('koa-router')()
// var cors = require('koa-cors')

// var logger = require('./lib/logger')()
// var exportfile = require('./middlewares/exportfile')
// var fetchoriginal = require('./middlewares/fetchoriginal')
// var funnel = require('./middlewares/funnel')
// var minutia = require('./middlewares/minutia')
// var sum = require('./middlewares/sum')
// var dynamic = require('./middlewares/dynamic')
// var alert = require('./middlewares/alert')
// var lexicon = require('./middlewares/lexicon')
// var abtest = require('./middlewares/sample')

// router
//   .get('/funnel', funnel())
//   .get('/sumvalue', sum())
//   .get('/minutiavalue', minutia())
//   .get('/dynamicvalue', dynamic())
//   .get('/samplevalue', abtest())
//   .get('/alerts', alert())
//   .get('/lexicon', lexicon())



// // var reload = require('require-reload')

// // load dictionary
// app.use(function * (next) {
//   var rest = yield require('./middlewares/dictionary')
//   this.state.cityDic = global.cityDic = rest[0]
//   this.state.channelDic = global.channelDic = rest[1]
//   this.state.template = {date: '日期', ch_name: '渠道', ct_name: '城市', impression: '展现 (A)', click: '点击 (B)', cic: 'CTR (B/A)', budget: '投放成本 (X)', pvCount: '到站量', uvCount: '独立到站量', abCount: '填写量', nsCount: '所有Leads (C)', rgCount: '完整leads数(D)',
//                   pass: '下发leads数', outbound: '外呼数', connect: '接通数', promise: '净新增派单数(P)', arrival: '到店(E)', contract: '投放城市O2O激活量', realcontract: '导流成单(F)', bcc: '成单成本(X/F)', ncc: 'leads生成% (C/B)', rnc: '完整leads转化率',
//                   pac: '通过率', prc: '派单率%(P/C)', arc: 'leads-到店%(E/C)', coc: 'leads-成单%(F/C)', acc: 'O2O平均贷款金额(G/F)', cpc: 'CPC (X/B)', cpl: 'CPL (X/C)', wcpl: 'CPL 完整(X/D)', bac: '到店成本(X/E)', amount: '导流成单金额(G)', acon: '城市整体激活量(H)',
//                   aloan: '城市整体贷款金额(I)', aac: 'O2O贷款金额占比(G/I)'}
//   this.state.rtemplate = ['realcontract', 'bcc', 'coc', 'amount', 'acc', 'acon', 'aloan', 'aac', 'budget', 'impression', 'cic', 'click', 'ncc', 'nsCount', 'pass', 'promise', 'prc', 'arrival', 'arc', 'cpc', 'cpl', 'wcpl', 'bac']
//   yield next
// })


// // Cross Domain
// app.use(cors())

// // export file
// app.use(exportfile())

// // calculate the range of date and validate parameters
// app.use(fetchoriginal())

// app.use(router.routes())
//    .use(router.allowedMethods())

// app.listen(3501)

logger.info('assembly started')
