// migrations/YYYYMMDDHHMMSS-update-brands-menuId-constraint.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove the existing foreign key constraint
    await queryInterface.removeConstraint('brands', 'brands_menuId_fkey');

    // Add the new foreign key constraint with CASCADE on delete
    await queryInterface.addConstraint('brands', {
      fields: ['menuId'],
      type: 'foreign key',
      name: 'brands_menuId_fkey',
      references: {
        table: 'menus',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the foreign key constraint with CASCADE
    await queryInterface.removeConstraint('brands', 'brands_menuId_fkey');

    // Add the original foreign key constraint without CASCADE
    await queryInterface.addConstraint('brands', {
      fields: ['menuId'],
      type: 'foreign key',
      name: 'brands_menuId_fkey',
      references: {
        table: 'menus',
        field: 'id',
      },
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  }
};