"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "isArtist", Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("users", "isArtist");
  },
};
