import koa from 'koa'

import createLogger from './lib/logger'
const logger = createLogger()

import dotenv from 'dotenv'
dotenv.config()

var Promise = require('bluebird')
const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://' + process.env.MANGO_ENV + '/assembly')

import cors from 'koa-cors'
import createRouter from 'koa-router'
var router = createRouter()

var app = koa()

// Cross Domain
app.use(cors())

import * as morphemeController from './app/controllers/morpheme_controller'

router
  .get('/morphemes', morphemeController.index)
  .post('/morphemes', morphemeController.create)

app.use(router.routes())
   .use(router.allowedMethods())

app.listen(4000)

logger.info('assembly started')
