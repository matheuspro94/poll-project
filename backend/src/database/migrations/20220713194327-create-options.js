'use strict'

module.exports = {
  // eslint-disable-next-line space-before-function-paren
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('options', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      poll_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      options: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  // eslint-disable-next-line space-before-function-paren
  async down(queryInterface) {
    await queryInterface.dropTable('options')
  }
}
