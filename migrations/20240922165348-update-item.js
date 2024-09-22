// migrations/YYYYMMDDHHMMSS-update-item.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('items', 'menuCategoryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'menuCategories',
        key: 'id',
      },
    });

    await queryInterface.addColumn('items', 'menuId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'menus',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('items', 'menuCategoryId');
    await queryInterface.removeColumn('items', 'menuId');
  }
};