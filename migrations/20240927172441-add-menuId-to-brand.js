// migrations/YYYYMMDDHHMMSS-add-menuId-to-brand.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('brands', 'menuId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'menus', // Assuming the table name for Menu is 'menus'
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('brands', 'menuId');
  }
};