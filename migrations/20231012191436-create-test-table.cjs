'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('test', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Set 'id' as the primary key
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('test');
  },
};

