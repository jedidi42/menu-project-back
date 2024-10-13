'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('businesses', 'address', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn('businesses', 'categoryID', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.removeColumn('businesses', 'addressId');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('businesses', 'addressId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Addresses',
        key: 'id',
      },
    });

    await queryInterface.removeColumn('businesses', 'address');
    await queryInterface.removeColumn('businesses', 'categoryID');
  }
};