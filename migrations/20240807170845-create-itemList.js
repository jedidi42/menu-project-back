"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("itemLists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      menuId: {
        type: Sequelize.INTEGER,
        references: {
          model: "menus",
          key: "id",
        },
      },
      itemId: {
        type: Sequelize.INTEGER,
        references: {
          model: "items",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("itemLists");
  },
};
