const Sequelize = require('sequelize')

const dbconfig = require('../config/database')
const Poll = require('../app/models/poll.model')
const Option = require('../app/models/option.model')

const connection = new Sequelize(dbconfig)

Poll.init(connection)
Option.init(connection)

module.exports = connection
