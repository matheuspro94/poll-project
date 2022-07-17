const { Model, DataTypes } = require('sequelize')

class Poll extends Model {
  static init(connection) {
    super.init({
      title: DataTypes.STRING,
      dateStart: DataTypes.DATE,
      dateFinish: DataTypes.DATE,
      OptionId: DataTypes.INTEGER
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.hasMany(models.Option, {
      foreignKey: 'pollId',
      as: 'options'
    })
  }
}

module.exports = Poll
