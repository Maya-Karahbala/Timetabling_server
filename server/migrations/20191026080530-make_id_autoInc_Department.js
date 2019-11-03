'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return(
    queryInterface.addConstraint(
      "Department",
      ["id"],
      {
        autoIncrement:true,
        name: "idAuto"
    })
    )
  },

  down: (queryInterface, Sequelize) => {
    return(
    queryInterface.removeConstraint(
      'Users',
      'idAuto'
    )
    )
  }
};
