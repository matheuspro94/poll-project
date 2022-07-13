const { Model, DataTypes } = require('sequelize')

class Option extends Model {
  // eslint-disable-next-line space-before-function-paren
  static init(connection) {
    super.init({
      poll_id: DataTypes.INTEGER,
      options: DataTypes.ARRAY(DataTypes.STRING)
    }, {
      sequelize: connection
    })
  }
}

module.exports = Option
