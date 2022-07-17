const express = require('express')

const pollController = require('../src/app/controllers/poll.controllers')

const routes = express.Router()

routes.get('/poll', pollController.create)

module.exports = routes
