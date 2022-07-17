const { Model, DataTypes } = require('sequelize')

class Option extends Model {
  static init(connection) {
    super.init({
      poll_id: DataTypes.INTEGER,
      options: DataTypes.ARRAY(DataTypes.STRING)
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.belongsTo(models.Poll, {
      foreignKey: 'OptionId',
      as: 'Polls'
    })
  }
}

module.exports = Option
