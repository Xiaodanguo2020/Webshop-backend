"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "products",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      name: {
        type: Sequelize.STRING,
        allownull: false,
      },
      rating: {
        type: Sequelize.INTEGER,
        allownull: false,
      },
      review: {
        type: Sequelize.STRING,
        allownull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("reviews");
  },
};
