'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      prime_uid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique identifier for products',
      },
      internalRefrence: {
        type: Sequelize.STRING,
        unique: true,
        comment: 'Internal reference for the product',
      },
      name: {
        type: Sequelize.STRING,
        comment: 'Name of the product',
      },
      bussnessType: {
        type: Sequelize.INTEGER,
        comment: 'Type of business (0-pos, 1-rent, 2-both)',
      },
      productType: {
        type: Sequelize.STRING,
        comment: 'Type of product (main, sub)',
      },
      productCategory: {
        type: Sequelize.STRING,
        comment: 'Category of the product',
      },
      size: {
        type: Sequelize.INTEGER,
        comment: 'Size of the product in a suitable unit',
      },
      color: {
        type: Sequelize.STRING,
        comment: 'Color of the product',
      },
      taxCode: {
        type: Sequelize.STRING,
        comment: 'Tax code for the product',
      },
      taxPersantage: {
        type: Sequelize.DECIMAL(10, 2),
        comment: 'Tax percentage applied to the product',
      },
      qty: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 1,
        comment: 'Quantity of the product (default: 1)',
      },
      salePrice: {
        type: Sequelize.INTEGER,
        comment: 'Sale price of the product',
      },
      photo: {
        type: Sequelize.STRING,
        comment: 'URL or path to the product photo',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  },
};
