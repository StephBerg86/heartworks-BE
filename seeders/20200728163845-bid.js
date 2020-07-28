"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("bids", [
      {
        email: "henk@hotmail.com",
        amount: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
        artworkId: 4,
      },
      {
        email: "rembrandt@vanrijn.nl",
        amount: 130,
        createdAt: new Date(),
        updatedAt: new Date(),
        artworkId: 3,
      },
      {
        email: "vince@vangogh.nl",
        amount: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
        artworkId: 2,
      },
      {
        email: "pablo@picasso.es",
        amount: 125,
        createdAt: new Date(),
        updatedAt: new Date(),
        artworkId: 1,
      },
      {
        email: "s@ophie.com",
        amount: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
        artworkId: 1,
      },
      {
        email: "mad@onna.com",
        amount: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        artworkId: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("bids", null, {});
  },
};
