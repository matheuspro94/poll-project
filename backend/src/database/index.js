const Sequelize = require('sequelize')

const dbconfig = require('../config/database')
const Poll = require('../app/models/poll.model')
const Option = require('../app/models/option.model')

const models = [Poll, Option]

class Database {
  // eslint-disable-next-line space-before-function-paren
  constructor() {
    this.Poll = Poll
    this.Option = Option
  }

  init() {
    this.connection = new Sequelize(dbconfig)
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

module.exports = Database
