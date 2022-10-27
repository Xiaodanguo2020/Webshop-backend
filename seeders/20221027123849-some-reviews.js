"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("reviews", [
      {
        id: 1,
        productId: 3,
        name: "Xiaodan",
        rating: 4,
        review:
          "Wear it like a charm, really liked this piece and with good price too",
      },
      {
        id: 2,
        productId: 2,
        name: "Esteban",
        rating: 2,
        review: "the quality is not as good as shown in picture",
      },
      {
        id: 3,
        productId: 7,
        name: "Ynte",
        rating: 1,
        review:
          "the delivery service is horrible and product specs not accurate",
      },
      {
        id: 4,
        productId: 4,
        name: "Jewels",
        rating: 5,
        review:
          "Wear it like a charm, really liked this piece and with good price too",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
