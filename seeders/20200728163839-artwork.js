"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "artworks",
      [
        {
          title: "South bank",
          imageUrl:
            "https://www.amersfoortart.nl/wp-content/uploads/2019/09/Banksymuur2.jpg",
          hearts: 0,
          minimumBid: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Swing",
          imageUrl:
            "https://www.veelzijdigmaleisie.nl/attracties/wp-content/uploads/sites/4/2014/10/street-art-georgetown-penang-8.jpg",
          hearts: 0,
          minimumBid: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Pejac",
          imageUrl:
            "https://art-sheep.com/wp-content/uploads/2015/06/Vandal-ism-1.jpg",
          hearts: 0,
          minimumBid: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Bycle",
          imageUrl:
            "https://s3.amazonaws.com/tunehotels/kidsonabicyclepenangstreetarts-1582430260248.jpg",
          hearts: 0,
          minimumBid: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Corona",
          imageUrl:
            "https://cdn.mos.cms.futurecdn.net/KAwoo8NBxaT56fkbEWvvGC.jpg",
          hearts: 0,
          minimumBid: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          title: "Piece and Love",
          imageUrl:
            "https://www.theosthinktank.co.uk/cmsfiles/archive/files/4544013443_17febb8987_b.jpg",
          hearts: 0,
          minimumBid: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("artworks", null, {});
  },
};
