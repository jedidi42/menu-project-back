// migrations/YYYYMMDDHHMMSS-update-brand-model.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('brands', 'name');
    await queryInterface.removeColumn('brands', 'description');
    await queryInterface.addColumn('brands', 'primaryColor', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('brands', 'secondaryColor', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('brands', 'font', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('brands', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('brands', 'description', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.removeColumn('brands', 'primaryColor');
    await queryInterface.removeColumn('brands', 'secondaryColor');
    await queryInterface.removeColumn('brands', 'font');
  }
};