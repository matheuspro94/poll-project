const { Model, DataTypes } = require('sequelize')

class Poll extends Model {
  // eslint-disable-next-line space-before-function-paren
  static init(connection) {
    super.init({
      title: DataTypes.STRING,
      start: DataTypes.DATE,
      finish: DataTypes.DATE,
      options: DataTypes.ARRAY(DataTypes.STRING)
    }, {
      sequelize: connection
    })
  }
}

module.exports = Poll
