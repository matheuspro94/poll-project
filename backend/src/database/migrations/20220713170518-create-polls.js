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
      start: {
        type: Sequelize.DATE,
        allowNull: false
      },
      finish: {
        type: Sequelize.DATE,
        allowNull: false
      },
      options: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      options_id: {
        type: Sequelize.INTEGER,
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
