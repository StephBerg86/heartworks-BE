"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Test",
          email: "t@est.com",
          password: bcrypt.hashSync("test1", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          isArtist: false,
        },
        {
          name: "dummy",
          email: "d@ummy.com",
          password: bcrypt.hashSync("dummy1", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          isArtist: false,
        },
        {
          name: "Banksy",
          email: "b@anksy.com",
          password: bcrypt.hashSync("banksy1", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          isArtist: true,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
