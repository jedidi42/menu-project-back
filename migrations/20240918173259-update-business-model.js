'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Businesses', 'address', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn('Businesses', 'categoryID', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.removeColumn('Businesses', 'addressId');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Businesses', 'addressId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Addresses',
        key: 'id',
      },
    });

    await queryInterface.removeColumn('Businesses', 'address');
    await queryInterface.removeColumn('Businesses', 'categoryID');
  }
};