// migrations/YYYYMMDDHHMMSS-create-menu-category.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('menuCategories', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      menuId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'menus', // Assuming the table name for Menu is 'menus'
          key: 'id',
        },
      },
      categoryName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('menuCategories');
  }
};