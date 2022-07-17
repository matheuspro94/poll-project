'use strict'

module.exports = {
  // eslint-disable-next-line space-before-function-paren
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('polls', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateStart: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dateFinish: {
        type: Sequelize.DATE,
        allowNull: false
      },
      OptionId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      options: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    })
  },

  // eslint-disable-next-line space-before-function-paren
  async down(queryInterface) {
    await queryInterface.dropTable('polls')
  }
}
